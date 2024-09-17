import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import path from "path"
import { fileURLToPath } from "url";
import methodOverride from 'method-override';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000

const postPath = path.join(__dirname, "data/data.json")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(methodOverride("_method"))


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	const posts = readData();
    res.render("index.ejs", { posts, showIcons: true })
})

function readData(data) {
	try {
		const data = fs.readFileSync(postPath, 'utf8')
		return JSON.parse(data)
	} catch (err) {
		console.error("ERRO ao ler ou analisar o arquivo JSON")
		return []
	}
}

function writeData(data) {
    fs.writeFileSync(postPath, JSON.stringify(data, null, 2))
}

app.get("/posts", (req, res) => {
    const posts = readData()
    res.json(posts)
})

app.post("/posts", (req, res) => {
    const novo = req.body
    const posts = readData()
    novo.id = Date.now()
    posts.push(novo)
    writeData(posts)
	res.redirect("/")
})

app.get("/posts/:id", (req, res) => {
    const posts = readData()
    const post = posts.find(p => p.id == req.params.id)

    if (post) {
        res.json(post)
    } else {
        res.status(404).json({ message: "Post not found" })
    }
})

app.put("/posts/:id", (req, res) => {
    console.log('Request body:', req.body); // Adicione este log
    const updated = req.body;
    const posts = readData();
    const index = posts.findIndex(p => p.id == req.params.id);

    if (index !== -1) {
        posts[index] = { ...posts[index], ...updated };
        writeData(posts);
        res.json(posts[index]);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.delete("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id, 10); // Converte para número
    if (isNaN(postId)) {
        return res.status(400).send('ID inválido'); // Retorna erro se o ID não for válido
    }

    try {
        let posts = readData();
        const initialLength = posts.length;
        posts = posts.filter(post => post.id !== postId);

        if (posts.length === initialLength) {
            return res.status(404).send('Post não encontrado'); // Retorna erro se o post não for encontrado
        }

        writeData(posts);
        res.status(204).send(); // Envia resposta de sucesso
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        res.status(500).send('Erro interno do servidor'); // Retorna erro se houver um problema no servidor
    }
});

app.listen(port, () => {
    console.log(`Está funcionando na porta ${port}`)
})