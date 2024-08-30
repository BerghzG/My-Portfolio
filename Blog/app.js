import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import path from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000

const postPath = path.join(__dirname, "data/data.json")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))


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
    const updated = req.body
    const posts = readData()
    const index = posts.findIndex(p => p.id == req.params.id)
    
    if (index !== -1) {
        posts[index] = {...posts[index], ...updated}
        writeData(posts)
        res.json(posts[index])
    } else {
        res.status((404).json({message: "Post not found"}))
    }
})

app.post("/posts/:id", (req, res) => {
    if (req.query._method === 'DELETE') {
        let posts = readData()
        posts = posts.filter(p => p.id != req.params.id)
        writeData(posts)
        res.status(204).send() 
    } else {
        console.log("Defaut case: req.query._method is not DELETE")
    }
    
})

app.listen(port, () => {
    console.log(`Está funcionando na porta ${port}`)
})