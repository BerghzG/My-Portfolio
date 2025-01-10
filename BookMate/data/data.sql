CREATE DATABASE book_mate;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    UNIQUE (title, user_id) -- Garante que um usuário não pode ter mais de um registro para o mesmo livro
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,                 -- ID único para cada nota
    user_id INTEGER NOT NULL,              -- Relaciona a nota ao usuário
    title VARCHAR(255) NOT NULL,           -- Título do livro
    rating DECIMAL(2, 1) NOT NULL CHECK (rating >= 0 AND rating <= 5), -- Nota de 0 a 5
    note TEXT,                             -- Nota opcional do usuário sobre o livro
    created_at TIMESTAMP DEFAULT NOW(),    -- Data e hora de criação
    updated_at TIMESTAMP DEFAULT NOW(),    -- Data e hora da última atualização
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Relaciona com a tabela users
);
