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
import { format } from "path/posix";

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
        cookie: { maxAge: (3 * 60000) * 60 }, // 3 horas
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

function requireAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect("/register");
    }
    next();
}

app.get("/", requireAuth, (req, res) => {
    const message = req.session.message || ''; 
    req.session.message = null; // Limpa a mensagem após o uso
    res.render("index.ejs", { user: req.session.user, message: message });
});

app.get("/book", requireAuth, async (req, res) => {
    const { title } = req.query

    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${title}&limit=1`); 

        const books = response.data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
            key: book.key, // Para a segunda requisição
            cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
            formats: book.format && book.format.length > 0 ? book.format[0] : 'No formats available',
            publisher: book.publisher && book.publisher.length > 0 ? book.publisher[0] : 'Unknown Publisher',
            firstIsbn: book.isbn.length > 0 ? book.isbn[0] : 'No ISBN available',
            id_amazon: book.id_amazon && book.id_amazon.length > 0 ? book.id_amazon : 'Not Avaliable',
            number_of_pages: book.number_of_pages_median || 'Not specified',
            genre: book.subject,
            want_to_read_count: book.want_to_read_count,
            currently_reading_count: book.currently_reading_count,
            already_read_count: book.already_read_count
        }));

        console.log(books)

        if (books.length > 0) { 
            const book = books[0]; 
            const bookKey = books[0].key;

            const detailsResponse = await axios.get(`https://openlibrary.org${bookKey}.json`); 
            const bookDetails = detailsResponse.data;

            const booksMore = {
                description: bookDetails.description ? (typeof bookDetails.description === 'object' ? bookDetails.description.value : bookDetails.description) : 'N/A',
            }
            console.log(booksMore)
            res.render('book.ejs', { book: book, books: booksMore, user: req.session.user }); 
        } else { 
            req.session.message = 'No books found'; 
            res.redirect('/'); 
        }
    } catch (err) {
        console.error(err); 
        res.status(500).send("Error during searching the book.");
        res.redirect("/")
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});