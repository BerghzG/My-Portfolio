CREATE DATABASE book_mate;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    author VARCHAR(255) NOT NULL, 
    note VARCHAR,
    status VARCHAR(20), 
    user_id INT REFERENCES users(id) ON DELETE CASCADE 
);