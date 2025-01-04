import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import FormData from "form-data";
import { dirname } from "path";
import path from 'path';
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "2006",
    port: 5432,
});

db.connect()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
    session({
        secret: "SECREAT",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 * 60 }, // 1 hora
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/register", (req, res) => {
    res.render("login.ejs")
})

app.post("/signin", async (req, res) => {

})

app.post("/login", async (req, res) => {

})

app.get("/", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/register");
    }
    res.render("index.ejs", { user: req.session.user });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});