CREATE DATABASE IF NOT EXISTS AULA2910;
USE AULA2910;

CREATE TABLE IF NOT EXISTS usuarios(
	id INT auto_increment PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL,
    telefone VARCHAR(20) NULL,
    criado_em timestamp default current_timestamp
);

CREATE INDEX idx_nome ON usuarios(nome);
CREATE INDEX idx_email ON usuarios(email);
CREATE INDEX idx_telefone ON usuarios(telefone);

select * from usuarios;