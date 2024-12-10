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
    return animes.slice(-12).reverse(); // Últimas 10 buscas, em ordem decrescente
};

const addAnimeTorecent = (newAnime) => {
    const animePath = path.join(__dirname, "animes.json");
    const animes = fs.existsSync(animePath)
        ? JSON.parse(fs.readFileSync(animePath))
        : [];
    // Remover duplicatas
    const filteredAnimes = animes.filter(anime => anime.id !== newAnime.id);
    filteredAnimes.unshift(newAnime);
    if (filteredAnimes.length > 12) {
        filteredAnimes.pop();
    }
    fs.writeFileSync(animePath, JSON.stringify(filteredAnimes, null, 2));
};

// Página inicial com "Animes Procurados Recentemente"
app.get("/", (req, res) => {
    const recentSearches = getRecentSearches();
    res.render("index.ejs", { recentSearches });
});

app.get("/search", (req, res) => {
    const searchType = 'text';  // Ou 'image', dependendo da lógica
    res.render("search", { mainResult: null, otherResults: [], searchType })   
})

app.get("/details/:id", (req, res) => {
    const animeId = req.params.id; // Captura o ID do anime da URL
    const animes = getRecentSearches(); // Pega os animes recentes do JSON
    const anime = animes.find(a => a.id == animeId); // Verifica se o ID bate com algum anime

    if (!anime) {
        return res.status(404).send("Anime não encontrado.");
    }

    res.render("details", { anime }); // Renderiza a página de detalhes com as informações do anime
});


// Rota de busca usando Trace.moe e AniList
app.post("/search", upload.single("image"), async (req, res) => {
    const animeName = req.body.animeName;
    let results = [];
    let searchType = 'text';  // Default é busca por texto

    // Se não houver nome de anime e arquivo de imagem, retorna erro
    if (!animeName && !req.file) {
        return res.status(400).send("Por favor, envie uma imagem ou digite o nome do anime.");
    }

    // Verificar se a busca foi feita por imagem
    if (req.file) {
        searchType = 'image'; // Busca feita por imagem
    }

    // Lógica para busca por imagem (existente)
    if (req.file) {
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

            results = traceResponse.data.result;

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
                    video: animeInfo.video, // Certifique-se de que isso está correto
                    anilistLink: `https://anilist.co/anime/${animeDetails.id}`,
                });

                // Atualiza o histórico de buscas recentes
                addAnimeTorecent({
                    id: animeDetails.id,
                    title: animeDetails.title.romaji || animeDetails.title.native,
                    coverImage: animeDetails.coverImage.large,
                    description: animeDetails.description, 
                });
                
                /*const animes = fs.existsSync(animesPath)
                    ? JSON.parse(fs.readFileSync(animesPath))
                    : [];

                if (!animes.find(anime => anime.id === animeDetails.id)) {
                    animes.push({
                        id: animeDetails.id,
                        title: animeDetails.title.romaji || animeDetails.title.native,
                        coverImage: animeDetails.coverImage.large,
                    });
                    fs.writeFileSync(animesPath, JSON.stringify(animes.slice(-50), null, 2));
                }*/
            }

            await fs.promises.unlink(req.file.path).catch(err => console.error("Erro ao excluir arquivo temporário:", err));

            // Exibir o resultado mais relevante em destaque
            const mainResult = animeDetailsList.shift();
            return res.render("search", { mainResult, otherResults: animeDetailsList, searchType });
        } catch (error) {
            console.error("Erro:", error.response?.data || error.message);
            return res.status(500).send("Erro ao buscar anime.");
        }
    }

    // Lógica para busca por nome
    if (animeName) {
        try {
            const query = `
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
                { query, variables: { search: animeName } },
                { headers: { "Content-Type": "application/json" } }
            );
    
            const animeDetails = searchResponse.data.data.Media;
            
            if (animeDetails) {
                if (!animeDetails.id) {
                    throw new Error("ID do anime não encontrado.");
                }
    
                results = [{
                    anilist: animeDetails.id,
                    title: animeDetails.title.romaji || animeDetails.title.native,
                    description: animeDetails.description,
                    coverImage: animeDetails.coverImage.large,
                    match: 1.0, // Pode ser considerado 100% de similaridade, pois é uma busca direta
                }];
            } else {
                results = [];  // Se não houver resultados, trata como um array vazio
            }
        } catch (error) {
            console.error("Erro ao buscar anime por título:", error.message);
            return res.status(500).send("Erro ao buscar anime.");
        }
    }
    
    // Processar resultados e renderizar a página
    if (!results || results.length === 0) {
        return res.status(404).send("Nenhum anime encontrado.");
    }
    
    const sortedResults = results.sort((a, b) => b.match - a.match);
    const mainResult = sortedResults.shift();
    
    // Adicionar o principal anime encontrado ao histórico
    addAnimeTorecent({
        id: mainResult.anilist, // ID do anime encontrado
        title: mainResult.title, // Título do anime encontrado
        coverImage: mainResult.coverImage,
        description: mainResult.description, // Descrição do anime
    });
    
    res.render("search", { mainResult, otherResults: sortedResults, searchType });    
    
});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
