import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import formData from "form-data";
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

app.listen(port, () => {
    console.log(`Sá merda tá funcionando na porta ${port}`);
});


// Trace Moe API