import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import formData from "form-data";
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

app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Trace Moe API
// https://api.trace.moe/search

app.post("/search", upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Por favor, envie uma imagem.');
    }


    const formData = new formData()
    formData.append("image", req.file.buffer)

    axios.post("https://api.trace.moe/search", formData, { headers: { 'Content-Type': 'multipart/form-data'}, })
    .then((response) => {
        const animeInfo = response.data
        const animes = JSON.parse(fs.readFileSync('animes.json'))
    })

    animes.push({
        
    })
})


app.listen(port, () => {
    console.log(`Sá merda tá funcionando na porta ${port}`);
});
