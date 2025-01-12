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
    const { title } = req.query;

    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${title}&limit=5`);

        const books = response.data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
            key: book.key,
            cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
            formats: book.format && book.format.length > 0 ? book.format[0] : "Format not available",
            publisher: book.publisher && book.publisher.length > 0 ? book.publisher[0] : "Unknown Publisher",
            firstIsbn: book.isbn && book.isbn.length > 0 ? book.isbn[0] : "No ISBN available",
            id_amazon: book.id_amazon && book.id_amazon.length > 0
                        ? (book.id_amazon[0].trim() !== '' ? book.id_amazon[0].trim() : (book.id_amazon[1] || "Not Available").trim())
                        : "Not Available",
            number_of_pages: book.number_of_pages_median || "Not specified",
            genre: book.subject ? book.subject.slice(0, 14) : [],
            want_to_read_count: book.want_to_read_count,
            currently_reading_count: book.currently_reading_count,
            already_read_count: book.already_read_count,
            first_publish_year: book.first_publish_year,
            ratings_average: book. ratings_average
        }));

        if (books.length > 0) {
            const book = books[0];
            const bookKey = books[0].key;
            const openLibraryRating = books[0].ratings_average || 0;

            console.log(openLibraryRating)

            const detailsResponse = await axios.get(`https://openlibrary.org${bookKey}.json`);
            const bookDetails = detailsResponse.data;

            const siteRatingResult = await db.query("SELECT AVG(rating) AS average_rating FROM notes WHERE title = $1",
                [books[0].title]);
            const siteRating = siteRatingResult.rowCount > 0 ? siteRatingResult.rows[0].average_rating : null;            

            const openLibraryRatingNum = parseFloat(openLibraryRating);
            const siteRatingNum = parseFloat(siteRating);

            const rating = !isNaN(siteRatingNum)
                ? (openLibraryRatingNum + siteRatingNum) / 2
                : openLibraryRatingNum;

                console.log("openLibraryRatingNum:", openLibraryRatingNum);
                console.log("siteRatingNum:", siteRatingNum);
                console.log("rating total:", rating);               

            const booksMore = {
                description: bookDetails.description
                    ? typeof bookDetails.description === "object"
                        ? bookDetails.description.value
                        : bookDetails.description
                    : "N/A",
            };

            const convertedDescription = booksMore.description
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="text-decoration: none;">$1</a>') 
            .replace(/\[([0-9]+)\]:\s*(https?:\/\/[^\s]+)/g, '<a href="$2" target="_blank" style="text-decoration: none;">$1</a>') 
            .replace(/[*_~`]/g, "") 
            .replace(/-{2,}/g, "");             

                 // **Buscar as notas relacionadas ao livro**
            const notesResult = await db.query(`
                SELECT n.id, n.rating, n.note, n.created_at, u.name AS username
                FROM notes n
                JOIN users u ON n.user_id = u.id
                WHERE n.title = $1
                ORDER BY n.created_at DESC
            `, [books[0].title]);
                
            const notes = notesResult.rows;

            console.log(booksMore)

            return res.render("book.ejs", { book, description: convertedDescription, rating, user: req.session.user, notes });
        } else {
            req.session.message = "No books found";
            return res.redirect("/");
        }
    } catch (err) {
        console.error(err);
        req.session.message = "An error occurred while searching for the book.";
        return res.redirect("/");
    }
});

app.post("/update-book-status", requireAuth, async (req, res) => {
    const { title, status } = req.body;

    // Verifica se os dados necessários foram enviados
    if (!title || !status) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields (title or status).",
        });
    }

    const { id: userId } = req.session.user; // Obtém o ID do usuário da sessão

    try {
        // Insere ou atualiza o status do livro no banco de dados
        const query = `
            INSERT INTO book (title, status, user_id)
            VALUES ($1, $2, $3)
            ON CONFLICT (title, user_id) DO UPDATE
            SET status = EXCLUDED.status;
        `;
        await db.query(query, [title, status, userId]);

        // Retorna sucesso ao cliente
        res.json({ success: true, message: "Book status updated successfully." });
    } catch (error) {
        console.error("Error updating book status:", error);

        // Retorna erro ao cliente
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the book status.",
        });
    }
});

app.post('/notes', requireAuth, async (req, res) => {
    const { ratings: rating, message, title } = req.body;
    const { id: userId } = req.session.user;

    if (!rating || !message || !title) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields (rating, message, or title).",
        });
    }

    try {
        const query = `INSERT INTO notes (title, rating, note, user_id, created_at) VALUES ($1, $2, $3, $4, NOW())`;
        await db.query(query, [title, rating, message, userId]);
        return res.redirect(`/book?title=${encodeURIComponent(title)}`);
    } catch (err) {
        console.error("Error saving book note:", err);

        // Retorna erro ao cliente
        res.status(500).json({
            success: false,
            message: "An error occurred while saving the book note.",
        });
    }
})

app.get("/note/details", requireAuth, async (req, res) => {
    const { noteId } = req.query;

    if (!noteId) {
        req.session.message = "Note ID is missing.";
        return res.redirect("/");
    }

    try {
        // Busca a nota pelo ID
        const noteResult = await db.query(`
            SELECT n.id, n.rating, n.note, n.created_at, u.name AS username, n.title
            FROM notes n
            JOIN users u ON n.user_id = u.id
            WHERE n.id = $1
        `, [noteId]);

        if (noteResult.rowCount === 0) {
            req.session.message = "Note not found.";
            return res.redirect("/");
        }

        const note = noteResult.rows[0];

        // Busca as respostas associadas a esta nota
        const repliesResult = await db.query(`
            SELECT r.id, r.message, r.created_at, u.name AS username
            FROM replies r
            JOIN users u ON r.user_id = u.id
            WHERE r.note_id = $1
            ORDER BY r.created_at ASC
        `, [noteId]);

        const replies = repliesResult.rows;

        return res.render("noteDetails.ejs", { note, replies });
    } catch (error) {
        console.error("Error fetching note details:", error);
        req.session.message = "An error occurred while fetching the note details.";
        return res.redirect("/");
    }
});

app.post("/note/reply", requireAuth, async (req, res) => {
    const { noteId, message } = req.body;
    const { id: userId } = req.session.user;

    if (!noteId || !message) {
        req.session.message = "Missing required fields.";
        return res.redirect(`/note/details?noteId=${noteId}`);
    }

    try {
        await db.query(`
            INSERT INTO replies (note_id, user_id, message, created_at)
            VALUES ($1, $2, $3, NOW())
        `, [noteId, userId, message]);

        req.session.message = "Reply added successfully!";
        return res.redirect(`/note/details?noteId=${noteId}`);
    } catch (error) {
        console.error("Error adding reply:", error);
        req.session.message = "An error occurred while adding the reply.";
        return res.redirect(`/note/details?noteId=${noteId}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});