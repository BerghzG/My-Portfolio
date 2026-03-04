-- Create database
DROP DATABASE IF EXISTS empresa_projetos;
CREATE DATABASE empresa_projetos;
USE empresa_projetos;

-- Create tables
CREATE TABLE Departamento (
    id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    gerente VARCHAR(100),
    orcamento DECIMAL(12,2) NOT NULL
);

CREATE TABLE Funcionario (
    cpf CHAR(11) PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cep CHAR(8),
    cidade VARCHAR(50),
    estado CHAR(2),
    data_admissao DATE,
    cargo VARCHAR(50),
    salario DECIMAL(10,2),
    id_departamento INT AUTO_INCREMENT,
    FOREIGN KEY(id_departamento) REFERENCES Departamento(id_departamento)
);

CREATE TABLE Projeto (
    id_projeto INT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    data_inicio DATE,
    data_fim_prevista DATE,
    stus ENUM('Em andamento','Concluido','Cancelado') NOT NULL DEFAULT 'Em andamento',
    orcamento DECIMAL(12,2)
);

CREATE TABLE Peca (
    id_peca INT AUTO_INCREMENT PRIMARY KEY,
    tipo_peca VARCHAR(50),
    descricao TEXT,
    data_cadastro DATE,
    custo_unitario DECIMAL(10,2),
    stus ENUM('Ativa', 'Inativa') NOT NULL DEFAULT 'Ativa'
);

CREATE TABLE Fornecedor (
    cnpj CHAR(14) PRIMARY KEY,
    razao_social VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cep CHAR(8),
    cidade VARCHAR(50),
    estado CHAR(2),
    nome_contato VARCHAR(100)
);

CREATE TABLE Deposito (
    id_deposito INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cep CHAR(8),
    cidade VARCHAR(50),
    estado CHAR(2),
    capacidade_maxima INT,
    responsavel VARCHAR(100)
);

-- Associative Tables
CREATE TABLE Trabalha_Em ( 
    cpf CHAR(11), 
    id_projeto INT, 
    data_inicio_no_projeto DATE, 
    horas_trabalhadas INT, 
    funcao_no_projeto VARCHAR(50), 
    PRIMARY KEY (cpf, id_projeto), 
    FOREIGN KEY (cpf) REFERENCES Funcionario(cpf), 
    FOREIGN KEY (id_projeto) REFERENCES Projeto(id_projeto) 
);

CREATE TABLE Utiliza ( 
    id_projeto INT, 
    id_peca INT, 
    quantidade INT, 
    data_utilizacao DATE, 
    PRIMARY KEY (id_projeto, id_peca), 
    FOREIGN KEY (id_projeto) REFERENCES Projeto(id_projeto), 
    FOREIGN KEY (id_peca) REFERENCES Peca(id_peca) 
);

CREATE TABLE Fornece ( 
    cnpj CHAR(14), 
    id_peca INT, prazo_entrega INT, 
    PRIMARY KEY (cnpj, id_peca), 
    FOREIGN KEY (cnpj) REFERENCES Fornecedor(cnpj), 
    FOREIGN KEY (id_peca) REFERENCES Peca(id_peca) 
);

CREATE TABLE Contem ( 
    id_deposito INT, 
    id_peca INT, 
    quantidade INT, 
    PRIMARY KEY (id_deposito, id_peca), 
    FOREIGN KEY (id_deposito) REFERENCES Deposito(id_deposito), 
    FOREIGN KEY (id_peca) REFERENCES Peca(id_peca) 
);