-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE modify;
USE modify;

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(30) NOT NULL   
);
CREATE TABLE quiz(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    is_done TINYINT NOT NULL,
    difficulty INT,
    describe_quiz VARCHAR(200) NOT NULL
);

CREATE TABLE attempt(
    id INT NOT NULL AUTO_INCREMENT,
    quiz_id INT NOT NULL,
    user_id INT NOT NULL,
    date_attempt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(quiz_id) REFERENCES quiz(id),
    FOREIGN KEY(user_id) REFERENCES user(id),
    PRIMARY KEY(id, quiz_id, user_id)
);


CREATE TABLE question(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    quiz_id INT NOT NULL,
    FOREIGN KEY(quiz_id) REFERENCES quiz(id)
);
CREATE TABLE alternatives(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(150) NOT NULL,
    wrong TINYINT NOT NULL,
    question_id INT NOT NULL,
    Foreign Key (question_id) REFERENCES question (id)
);
CREATE TABLE user_answer(
    id INT PRIMARY KEY AUTO_INCREMENT,
    attempt_id INT NOT NULL,
    wrong_answer INT NOT NULL,
    rigth_answer INT NOT NULL,
    FOREIGN KEY(attempt_id) REFERENCES attempt(id)
);
SELECT * FROM user_answer;
SELECT * FROM user;
