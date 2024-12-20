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
    const animesPath = path.join(__dirname, "/JSON/animes.json");
    if (!fs.existsSync(animesPath)) {
        return [];
    }
    const animes = JSON.parse(fs.readFileSync(animesPath));
    return animes.slice(-12).reverse(); // Últimas 12 buscas, em ordem decrescente
};

const addAnimeTorecent = (newAnime) => {
    const animePath = path.join(__dirname, "/JSON/animes.json");
    const animes = fs.existsSync(animePath)
        ? JSON.parse(fs.readFileSync(animePath))
        : [];

    // Estrutura mínima com as informações essenciais
    const basicAnime = {
        id: newAnime.id,
        title: newAnime.title,
        coverImage: newAnime.coverImage,
    };

    // Remover duplicatas com base no id
    const filteredAnimes = animes.filter(anime => anime.id !== newAnime.id);
    
    // Adicionar o novo anime no início da lista
    filteredAnimes.unshift(basicAnime);

    // Limitar o número de animes no histórico a 12
    if (filteredAnimes.length > 12) {
        filteredAnimes.pop();
    }

    // Gravar no arquivo
    fs.writeFileSync(animePath, JSON.stringify(filteredAnimes, null, 2));
};

let cachedNews = [];  // Inicializa como array vazio por padrão
let lastFetchTime = null;

const fetchNews = async () => {
    try {
        // Corrigindo a URL para usar o operador "OR" com o pipe "|"
        const url = "https://api.thenewsapi.com/v1/news/all?api_token=YGCvTUftDbGTtToHhUGIVx1wKPVFobPMTwvvhNKZ&search=anime%20adaptations%20|%20anime%20studio%20|%20anime%20new%20season%20|%20anime%20sales%20|%20anime%20delays%20|%20anime%20films%20|%20anime%20events%20|%20anime%20controversies%20|%20anime%20collaborations%20|%20anime%20awards%20|%20anime%20streaming";
        
        const response = await axios.get(url);
        console.log(response.data);  // Apenas para depuração

        if (response.data && response.data.data) {
            const englishNews = response.data.data.filter(news => news.language === 'en');

            if (englishNews.length > 0) {
                cachedNews = englishNews;
                lastFetchTime = Date.now();
                console.log("Notícias encontradas:", cachedNews);
            } else {
                cachedNews = [];
            }
        } else {
            cachedNews = [];
        }
    } catch (error) {
        console.log("Erro ao buscar notícias:", error);
        cachedNews = [];
    }
};


// Página inicial
app.get("/", async (req, res) => {
    const recentSearches = getRecentSearches();
    const oneDay = 24 * 60 * 60 * 1000; // 24 horas

    // Verificar se as notícias precisam ser recarregadas (mais de um dia)
    if (!cachedNews || (Date.now() - lastFetchTime > oneDay)) {
        await fetchNews();  // Recarregar as notícias se necessário
    }

    // Passar os dados para o template
    res.render("index.ejs", { recentSearches, noticias: cachedNews });
});

app.get('/watched', (req, res) => {
    const watchedPath = path.join(__dirname, '/JSON/watched.json');
    
    // Ler o arquivo watched.json
    const watched = fs.existsSync(watchedPath) ? JSON.parse(fs.readFileSync(watchedPath)) : [];

    // Passar os dados para a view
    res.render('watched', { watchedAnimes: watched });
});

app.get("/search", (req, res) => {
    const searchType = 'text';  // Ou 'image', dependendo da lógica
    res.render("search", { mainResult: null, otherResults: [], searchType })   
})

app.get("/details/:title", async (req, res) => {
    const animeTitle = decodeURIComponent(req.params.title);
    console.log("Título decodificado:", animeTitle);

    // Obtenha todos os animes recentes do animes.json
    const animes = getRecentSearches();
    let animeFromJson = animes.find(a => a.title === animeTitle);

    if (!animeFromJson) {
        console.log("Anime não encontrado no animes.json.");
    } else {
        console.log("Dados do anime encontrado no animes.json:", animeFromJson);
    }

    // Carregar o JSON watched.json para verificar o estado de "favorito" e "status"
    const watchedPath = path.join(__dirname, '/JSON/watched.json');
    const watched = fs.existsSync(watchedPath) ? JSON.parse(fs.readFileSync(watchedPath)) : [];

    // Se não encontrou no animes.json, tente buscar no watched.json
    let favoriteAnime;
    if (animeFromJson) {
        // Buscar no watched.json usando o id do anime do animes.json
        favoriteAnime = watched.find(a => Number(a.id) === Number(animeFromJson.id));
    }

    // Caso o anime não tenha sido encontrado em animes.json, busque no watched.json
    if (!animeFromJson && watched.length > 0) {
        favoriteAnime = watched.find(a => a.title === animeTitle); // Buscando pelo título
        if (favoriteAnime) {
            console.log("Anime encontrado no watched.json:", favoriteAnime);
            animeFromJson = favoriteAnime; // Se encontrado, ele é tratado como anime válido
        }
    }

    if (!animeFromJson) {
        return res.status(404).send("Anime não encontrado no histórico.");
    }

    // Verifique o estado de "favorito" e "status"
    const isFavorite = favoriteAnime ? favoriteAnime.favorite === true : false;
    const status = favoriteAnime ? favoriteAnime.status : undefined;

    console.log("Estado favorito para o anime:", {
        id: animeFromJson.id,
        title: animeFromJson.title,
        isFavorite,
    });

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
                genres
                tags {
                    name
                }
                averageScore
                trailer {
                    site
                    id
                }
                staff {
                    edges {
                        role
                        node {
                            name {
                                full
                            }
                            image {
                                large
                            }
                        }
                    }
                }
                characters {
                    edges {
                        node {
                            name {
                                full
                            }
                            image {
                                large
                            }
                        }
                        voiceActors {
                            name {
                                full
                            }
                            image {
                                large
                            }
                            languageV2
                        }
                    }
                }
                recommendations {
                    edges {
                        node {
                            mediaRecommendation {
                                id
                                title {
                                    romaji
                                    native
                                }
                                coverImage {
                                    large
                                }
                                description
                            }
                        }
                    }
                }
                startDate {
                    year
                }
            }
        }`;

        const variables = { search: animeTitle };
        console.log("Variáveis enviadas para a API:", variables);

        const response = await axios.post("https://graphql.anilist.co", { query, variables }, {
            headers: { "Content-Type": "application/json" },
        });

        if (response.data.errors) {
            console.error("Erro na consulta GraphQL:", response.data.errors);
            return res.status(500).send("Error fetching anime.");
        }

        const animeDetails = response.data.data.Media;

        if (!animeDetails || !animeDetails.id) {
            return res.status(404).send("Anime not found in the API.");
        }

        const detailsResult = {
            id: animeDetails.id,
            favorite: isFavorite, // Aqui você passa o valor do favorito
            anilist: animeDetails.id,
            title: animeDetails.title.romaji || animeDetails.title.native,
            description: animeDetails.description,
            coverImage: animeDetails.coverImage.large,
            genres: animeDetails.genres,
            tags: animeDetails.tags.map(tag => tag.name),
            averageScore: animeDetails.averageScore,
            trailer: animeDetails.trailer
                ? animeDetails.trailer.site === "youtube"
                    ? `https://www.youtube.com/embed/${animeDetails.trailer.id}`
                    : animeDetails.trailer.id
                : null,
            staff: animeDetails.staff.edges.map(edge => ({
                role: edge.role,
                name: edge.node.name.full,
                image: edge.node.image.large,
            })),
            characters: animeDetails.characters.edges.map(edge => ({
                role: edge.role,
                name: edge.node.name.full,
                image: edge.node.image.large,
                voiceActors: edge.voiceActors.map(va => ({
                    name: va.name.full,
                    image: va.image.large,
                    language: va.languageV2,
                })),
            })),
            recommendations: animeDetails.recommendations.edges.map(edge => ({
                id: edge.node.mediaRecommendation.id,
                title: edge.node.mediaRecommendation.title.romaji || edge.node.mediaRecommendation.title.native,
                coverImage: edge.node.mediaRecommendation.coverImage.large,
                description: edge.node.mediaRecommendation.description,
            })),
            startDate: animeDetails.startDate.year,
        };

        res.render("details", { anime: detailsResult, recommendations: animeDetails.recommendations.edges, status: status });

    } catch (error) {
        console.error("Erro ao buscar detalhes do anime:", error.message);
        res.status(500).send("Error fetching anime.");
    }
});

app.post('/add-to-watched', (req, res) => {
    const { id, title, coverImage, status, favorite } = req.body;
    const watchedPath = path.join(__dirname, '/JSON/watched.json');

    // Ler o arquivo watched.json
    const watched = fs.existsSync(watchedPath) ? JSON.parse(fs.readFileSync(watchedPath)) : [];

    // Verificar se o anime já existe
    const existingAnime = watched.find(anime => anime.id === id);

    if (existingAnime) {
        // Atualiza apenas os campos enviados, preservando os outros
        if (title) existingAnime.title = title;
        if (coverImage) existingAnime.coverImage = coverImage;
        if (status) existingAnime.status = status;
        if (favorite !== undefined) existingAnime.favorite = favorite === 'true' || favorite === true;
    } else {
        // Adicionar novo anime
        watched.push({
            id,
            title,
            coverImage,
            status,
            favorite: favorite === 'true' || favorite === true, // Converta para booleano
        });
    }

    // Salvar no arquivo watched.json
    fs.writeFileSync(watchedPath, JSON.stringify(watched, null, 2));

    // Responder com uma mensagem de sucesso
    res.status(200).json({ message: 'Anime atualizado com sucesso no histórico!' });
});

app.delete('/delete-watched/:id', (req, res) => {
    const animeId = req.params.id;
    const watchedPath = path.join(__dirname, '/JSON/watched.json');

    // Ler o arquivo watched.json
    const watched = fs.existsSync(watchedPath) ? JSON.parse(fs.readFileSync(watchedPath)) : [];

    // Filtrar os animes que não correspondem ao ID
    const updatedWatched = watched.filter(anime => anime.id !== animeId);

    // Salvar no arquivo JSON
    fs.writeFileSync(watchedPath, JSON.stringify(updatedWatched, null, 2));

    // Responder ao cliente
    res.status(200).json({ message: 'Anime deletado com sucesso!' });
});


app.get("/add-recommendation/:id/:title", async (req, res) => {
    const { id, title } = req.params;
    console.log("ID do Anime:", id);
    console.log("Título do Anime:", title);

    // Verifique se o anime já está no histórico (não precisa adicionar se já estiver)
    const animes = getRecentSearches();
    const animeExists = animes.some(a => a.id == id);

    if (!animeExists) {
        // Agora vamos fazer a consulta para pegar as informações do anime
        try {
            const query = `
            query ($id: Int) {
                Media(id: $id, type: ANIME) {
                    id
                    title {
                        romaji
                        native
                    }
                    coverImage {
                        large
                    }
                    description
                }
            }`;

            const variables = { id: parseInt(id) };
            const response = await axios.post("https://graphql.anilist.co", { query, variables }, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.data.errors) {
                console.error("Erro na consulta GraphQL:", response.data.errors);
                return res.status(500).send("Erro ao buscar anime.");
            }

            const animeDetails = response.data.data.Media;
            if (!animeDetails || !animeDetails.id) {
                return res.status(404).send("Anime não encontrado.");
            }

            // Agora adicione o anime ao histórico
            const newAnime = {
                id: animeDetails.id,
                title: animeDetails.title.romaji || animeDetails.title.native,
                coverImage: animeDetails.coverImage.large, // Incluindo o coverImage
            };

            addAnimeTorecent(newAnime);

            // Após adicionar, redirecione para a página de detalhes do anime
            res.redirect(`/details/${encodeURIComponent(animeDetails.title.romaji)}`);

        } catch (error) {
            console.error("Erro ao buscar detalhes do anime:", error.message);
            res.status(500).send("Erro ao adicionar anime ao histórico.");
        }
    } else {
        // Se o anime já estiver no histórico, redireciona diretamente para a página de detalhes
        res.redirect(`/details/${encodeURIComponent(title)}`);
    }
});

// Rota de busca usando Trace.moe e AniList
app.post("/search", upload.single("image"), async (req, res) => {
    const animeName = req.body.animeName;
    let results = [];
    let searchType = 'text';  // Default é busca por texto

    // Se não houver nome de anime e arquivo de imagem, retorna erro
    if (!animeName && !req.file) {
        return res.status(400).send("Please upload an image or type the name of the anime.");
    }

    // Verificar se a busca foi feita por imagem
    if (req.file) {
        searchType = 'image'; // Busca feita por imagem
    }

    // Lógica para busca por imagem (existente)
    if (req.file) {
        const mimeType = req.file.mimetype;
        if (!mimeType.startsWith("image/") && mimeType !== "image/gif") {
            return res.status(400).send("Only images and GIFs are allowed.");
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
                return res.status(404).send("No anime found for the provided image.");
            }

            // Ordenar os resultados pela maior similaridade
            const sortedResults = results.sort((a, b) => b.similarity - a.similarity);

            // Limitar os resultados a um número máximo e exibir a similaridade mínima
            const filteredResults = sortedResults.filter(result => result.similarity >= 0.75);

            if (filteredResults.length === 0) {
                return res.status(404).send("No relevant results found.");
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
                                genres
                                tags {
                                    name
                                }
                                averageScore
                                trailer {
                                    site
                                    id
                                }
                                staff {
                                    edges {
                                        role
                                        node {
                                            name {
                                                full
                                            }
                                        }
                                    }
                                }
                                characters {
                                    edges {
                                        role
                                        node {
                                            id
                                            name {
                                                full
                                            }
                                            image {
                                                large
                                            }
                                        }
                                    }
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
                                genres
                                tags {
                                    name
                                }
                                averageScore
                                trailer {
                                    site
                                    id
                                }
                                staff {
                                    edges {
                                        role
                                        node {
                                            name {
                                                full
                                            }
                                        }
                                    }
                                }
                                characters {
                                    edges {
                                        role
                                        node {
                                            id
                                            name {
                                                full
                                            }
                                            image {
                                                large
                                            }
                                        }
                                    }
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
                
                // Processando os personagens
                const characters = animeDetails.characters.edges.map(edge => ({
                    id: edge.node.id,
                    name: edge.node.name.full,
                    role: edge.role,
                    image: edge.node.image.large,
                }));
                
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
                    video: animeInfo.video,
                    anilistLink: `https://anilist.co/anime/${animeDetails.id}`,
                    genres: animeDetails.genres,  
                    tags: animeDetails.tags
                        ? animeDetails.tags.map(tag => tag.name)  // Para AniList
                        : animeDetails.traceMoeTags,
                    averageScore: animeDetails.averageScore,
                    trailer: animeDetails.trailer
                    ? animeDetails.trailer.site === "youtube"
                        ? `https://www.youtube.com/embed/${animeDetails.trailer.id}`  // Converte para embed
                        : animeDetails.trailer.id  // Para outros tipos de trailer (como arquivos MP4)
                    : null,
                    staff: animeDetails.staff.edges.map(edge => ({
                        role: edge.role,
                        name: edge.node.name.full,
                    })),
                    characters,  // Adicionando os personagens
                });                               
                
                // Atualiza o histórico de buscas recentes
                addAnimeTorecent({ 
                    id: animeDetails.id,
                    title: animeDetails.title.romaji || animeDetails.title.native,
                    coverImage: animeDetails.coverImage.large,
                    // Removido: description, genres, tags, averageScore, trailer, staff, characters
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
                genres
                tags {
                    name
                }
                averageScore
                trailer {
                    site
                    id
                }
                staff {
                    edges {
                        role
                        node {
                            name {
                                full
                            }
                        }
                    }
                }
                characters {
                    edges {
                        role
                        node {
                            name {
                                full
                            }
                            image {
                                large
                            }
                        }
                    }
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
                genres: animeDetails.genres,
                tags: animeDetails.tags.map(tag => tag.name),
                averageScore: animeDetails.averageScore,
                trailer: animeDetails.trailer
                ? animeDetails.trailer.site === "youtube"
                    ? `https://www.youtube.com/embed/${animeDetails.trailer.id}`  // Converte para embed
                    : animeDetails.trailer.id  // Para outros tipos de trailer (como arquivos MP4)
                : null,
                staff: animeDetails.staff.edges.map(edge => ({
                    role: edge.role,
                    name: edge.node.name.full,
                })),
                characters: animeDetails.characters.edges.map(edge => ({
                    role: edge.role,
                    name: edge.node.name.full,
                    image: edge.node.image.large,
                })),
                match: 1.0, // Pode ser considerado 100% de similaridade, pois é uma busca direta
            }];
        } else {
            results = []; // Se não houver resultados, trata como um array vazio
        }        
    } catch (error) {
        console.error("Erro ao buscar anime por título:", error.message);
        return res.status(500).send("Error fetching anime.");
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
    id: mainResult.anilist,
    title: mainResult.title,
    coverImage: mainResult.coverImage,
    // Removido: description, genres, tags, averageScore, trailer, staff, characters
});

res.render("search", { mainResult, otherResults: sortedResults, searchType });
        
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});