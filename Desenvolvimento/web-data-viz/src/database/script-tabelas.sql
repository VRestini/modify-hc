-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE modify;
USE modify;

CREATE TABLE tbl_user(
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nameUser VARCHAR(40) NOT NULL,
    emailUser VARCHAR(60) NOT NULL,
    passwordUser VARCHAR(30) NOT NULL   
);