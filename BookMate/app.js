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
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book_mate",
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
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: (2 * 60000) * 60 }, // 1 hora
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/register", (req, res) => {
    const errorMessage = req.query.error || null;
    res.render("login.ejs", { formData: {}, error: errorMessage });
});

function handleError(res, message, statusCode = 500, formData = {}) {
    console.error(message); 
    res.status(statusCode).render("login.ejs", { error: message, formData });
}

app.post("/signup", async (req, res) => {
    const nome = req.body.signup_name;
    const email = req.body.signup_email;
    const pass = req.body.signup_pass;

    try {
        const userExist = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExist.rowCount > 0) {
            return res.status(400).render("login.ejs", {
                error: "User already exists.",
                formData: req.body, 
            });
        }

        const hashedPass = await bcrypt.hash(pass, 10);
        const newUser = await db.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email",
            [nome, email, hashedPass]
        );

        const userData = newUser.rows[0];
        req.session.user = { id: userData.id, email: userData.email };
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).render("login.ejs", {
            error: "Error during sign up.",
            formData: req.body, 
        });
    }
});

app.post("/login", async (req, res) => {
    const email = req.body.login_email;
    const pass = req.body.login_pass;

    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rowCount === 0) {
            return res.status(400).render("login.ejs", {
                error: "Email not found.",
                formData: { login_email: email }, 
            });
        }

        const userData = user.rows[0];
        const isMatch = await bcrypt.compare(pass, userData.password);
        if (!isMatch) {
            return res.status(400).render("login.ejs", {
                error: "Password incorrect.",
                formData: { login_email: email }, 
            });
        }

        req.session.user = { id: userData.id, email: userData.email };
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).render("login.ejs", {
            error: "An error occurred during login.",
            formData: { login_email: email }, 
        });
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error during logout:", err);
            return res.status(500).send("An error occurred during logout.");
        }
        res.redirect("/register");
    });
});

app.get("/search", async (req, res) => {
    const query = req.query.q; // Captura o termo da pesquisa
    if (!query) {
        return res.status(400).send("Search query is required.");
    }

    try {
        const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
        
        // Fazendo a requisição com axios
        const response = await axios.get(apiUrl);

        // Retorna os resultados para a interface ou usa no backend
        res.json(response.data.docs.slice(0, 10)); // Envia apenas os 10 primeiros resultados
    } catch (error) {
        console.error("Error fetching Open Library data:", error);
        res.status(500).send("Error fetching data.");
    }
});

function requireAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect("/register");
    }
    next();
}

app.get("/", requireAuth, (req, res) => {
    res.render("index.ejs", { user: req.session.user });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});