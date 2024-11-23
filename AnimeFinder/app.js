import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import multer from "multer";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const upload = multer({ dest: './uploads/' });
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Função para obter animes recentemente procurados
const getRecentSearches = () => {
    const animesPath = path.join(__dirname, "animes.json");
    if (!fs.existsSync(animesPath)) {
        return [];
    }
    const animes = JSON.parse(fs.readFileSync(animesPath));
    return animes.slice(-10).reverse(); // Últimas 10 buscas, em ordem decrescente
};

// Página inicial com "Animes Procurados Recentemente"
app.get("/", (req, res) => {
    const recentSearches = getRecentSearches();
    res.render("index.ejs", { recentSearches });
});

// Rota de busca usando Trace.moe e AniList
app.post("/search", upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("Por favor, envie uma imagem ou GIF.");
    }

    const mimeType = req.file.mimetype;
    if (!mimeType.startsWith("image/") && mimeType !== "image/gif") {
        return res.status(400).send("Apenas imagens e GIFs são permitidos.");
    }

    try {
        const formData = new FormData();
        formData.append("image", fs.createReadStream(req.file.path), {
            filename: req.file.originalname,
            contentType: mimeType,
        });

        const traceResponse = await axios.post(
            "https://api.trace.moe/search",
            formData,
            { headers: formData.getHeaders() }
        );

        console.log("Resposta do Trace.moe:", JSON.stringify(traceResponse.data, null, 2));

        const results = traceResponse.data.result;
        if (!results || results.length === 0) {
            return res.status(404).send("Nenhum anime encontrado para a imagem fornecida.");
        }

        // Ordenar os resultados pela maior similaridade
        const sortedResults = results.sort((a, b) => b.similarity - a.similarity);

        // Limitar os resultados a um número máximo e exibir a similaridade mínima
        const filteredResults = sortedResults.filter(result => result.similarity >= 0.75);

        if (filteredResults.length === 0) {
            return res.status(404).send("Nenhum resultado relevante encontrado.");
        }

        const animeDetailsList = [];
        const animesPath = path.join(__dirname, "animes.json");

        for (const animeInfo of filteredResults) {
            console.log("Objeto animeInfo:", JSON.stringify(animeInfo, null, 2));

            // Validação do ID do AniList
            const animeId = animeInfo.anilist;
            const animeTitle = animeInfo.filename || animeInfo.video;

            // Verifica se há pelo menos um parâmetro para buscar o anime
            if (!animeId && !animeTitle) {
                console.warn("Nenhum ID ou título disponível para este resultado.");
                continue;
            }

            let animeDetails = null;

            // Buscar detalhes no AniList pelo ID (se disponível)
            if (animeId) {
                try {
                    const query = `
                    query ($id: Int) {
                        Media(id: $id, type: ANIME) {
                            id
                            title {
                                romaji
                                native
                            }
                            description
                            coverImage {
                                large
                            }
                        }
                    }`;

                    const variables = { id: parseInt(animeId, 10) };

                    const anilistResponse = await axios.post(
                        "https://graphql.anilist.co",
                        { query, variables },
                        { headers: { "Content-Type": "application/json" } }
                    );

                    animeDetails = anilistResponse.data.data.Media;
                } catch (err) {
                    console.error(`Erro ao buscar detalhes do anime (ID: ${animeId}):`, err.message);
                }
            }

            // Fallback: buscar pelo título se o ID falhou
            if (!animeDetails && animeTitle) {
                try {
                    const searchQuery = `
                    query ($search: String) {
                        Media(search: $search, type: ANIME) {
                            id
                            title {
                                romaji
                                native
                            }
                            description
                            coverImage {
                                large
                            }
                        }
                    }`;

                    const searchResponse = await axios.post(
                        "https://graphql.anilist.co",
                        { query: searchQuery, variables: { search: animeTitle } },
                        { headers: { "Content-Type": "application/json" } }
                    );

                    animeDetails = searchResponse.data.data.Media;
                } catch (err) {
                    console.error("Erro ao buscar anime por título:", err.message);
                }
            }

            // Se não conseguiu encontrar detalhes
            if (!animeDetails) {
                console.warn(`Não foi possível encontrar detalhes para o anime: ${animeId || animeTitle}`);
                continue; // Pule para o próximo resultado
            }

            console.log("Detalhes do anime (AniList):", JSON.stringify(animeDetails, null, 2));

            // Adiciona os detalhes na lista final
            animeDetailsList.push({
                match: animeInfo.similarity,
                episode: animeInfo.episode,
                from: animeInfo.from,
                to: animeInfo.to,
                id: animeDetails.id,
                title: animeDetails.title.romaji || animeDetails.title.native,
                description: animeDetails.description,
                coverImage: animeDetails.coverImage.large,
                anilistLink: `https://anilist.co/anime/${animeDetails.id}`, // Link direto para o AniList
            });

            // Atualiza o histórico de buscas recentes
            const animes = fs.existsSync(animesPath)
                ? JSON.parse(fs.readFileSync(animesPath))
                : [];

            if (!animes.find(anime => anime.id === animeDetails.id)) {
                animes.push({
                    id: animeDetails.id,
                    title: animeDetails.title.romaji || animeDetails.title.native,
                    coverImage: animeDetails.coverImage.large,
                });
                fs.writeFileSync(animesPath, JSON.stringify(animes.slice(-50), null, 2));
            }
        }

        await fs.promises.unlink(req.file.path).catch(err => console.error("Erro ao excluir arquivo temporário:", err));

        // Exibir o resultado mais relevante em destaque
        const mainResult = animeDetailsList.shift();
        res.render("search", { mainResult, otherResults: animeDetailsList });
    } catch (error) {
        console.error("Erro:", error.response?.data || error.message);
        res.status(500).send("Erro ao buscar anime.");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
