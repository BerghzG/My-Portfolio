CREATE DATABASE bookstore;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    password VARCHAR(8) NOT NULL,
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    author VARCHAR(255) NOT NULL, 
    note VARCHAR,
    status VARCHAR(20), 
    user_id INT REFERENCES users(id) ON DELETE CASCADE 
);