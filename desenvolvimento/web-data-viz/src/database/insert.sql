INSERT INTO quiz (title, difficulty, describe_quiz) 
VALUES ('Piercings Básicos', 1, 'Conhecimentos essenciais sobre piercings');

INSERT INTO question (title, quiz_id) VALUES ('Qual piercing é colocado no umbigo?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Navel', 0, 1), -- Correta
('Helix', 1, 1), ('Tragus', 1, 1), ('Rook', 1, 1);


INSERT INTO question (title, quiz_id) VALUES ('Qual material é mais seguro para piercings?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Titânio cirúrgico', 0, 2),
('Prata', 1, 2), ('Ouro 18k', 1, 2), ('Aço inoxidável', 1, 2);


INSERT INTO question (title, quiz_id) VALUES ('Quanto tempo um piercing leva cicatrizar?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('6 a 8 semanas', 0, 3),
('2 semanas', 1, 3), ('6 meses', 1, 3), ('1 ano', 1, 3);


INSERT INTO question (title, quiz_id) VALUES ('O que é um "piercing de cartilagem"?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Perfuração em áreas como orelha ou nariz', 0, 4),
('Piercing no umbigo', 1, 4), ('Piercing na língua', 1, 4), ('Piercing nos lábios', 1, 4);


INSERT INTO question (title, quiz_id) VALUES ('Qual NÃO é um sinal de infecção em piercings?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Coceira leve', 0, 5),
('Secreção amarelada', 1, 5), ('Vermelhidão intensa', 1, 5), ('Dor pulsante', 1, 5);


INSERT INTO question (title, quiz_id) VALUES ('Qual piercing é feito na sobrancelha?', 1);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Anti-sobrancelha', 0, 6),
('Septum', 1, 6), ('Labret', 1, 6), ('Conch', 1, 6);



INSERT INTO quiz (title, difficulty, describe_quiz) 
VALUES ('Tatuagens Básicas', 1, 'Conhecimentos essenciais sobre tatuagens');

INSERT INTO question (title, quiz_id) VALUES ('Qual equipamento é usado para fazer tatuagens?', 2);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Máquina de tatuagem', 0, 7),
('Agulha de costura', 1, 7), ('Caneta esferográfica', 1, 7), ('Pincel de aquarela', 1, 7);

INSERT INTO question (title, quiz_id) VALUES ('Qual é o cuidado mais importante após fazer uma tatuagem?', 2);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Manter limpa e hidratada', 0, 8),
('Expor ao sol para fixar a tinta', 1, 8), ('Cobrir com plástico por uma semana', 1, 8), ('Lavar com álcool diariamente', 1, 8);

INSERT INTO question (title, quiz_id) VALUES ('Quanto tempo leva para uma tatuagem cicatrizar completamente?', 2);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('4 a 6 semanas', 0, 9),
('2 dias', 1, 9), ('1 semana', 1, 9), ('3 meses', 1, 9);



INSERT INTO quiz (title, difficulty, describe_quiz) 
VALUES ('Alargadores', 2, 'Conhecimentos sobre alargamento de piercings');

INSERT INTO question (title, quiz_id) VALUES ('Qual é o método mais seguro para alargar um piercing?', 3);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Aumentar gradualmente ao longo do tempo', 0, 10),
('Forçar o tamanho desejado de uma vez', 1, 10), ('Usar objetos improvisados', 1, 10), ('Aquecer a orelha e inserir o alargador', 1, 10);

INSERT INTO question (title, quiz_id) VALUES ('Qual material é recomendado para alargadores novos?', 3);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Titânio ou vidro', 0, 11),
('Madeira não tratada', 1, 11), ('Plástico PVC', 1, 11), ('Borrachas elásticas', 1, 11);

INSERT INTO question (title, quiz_id) VALUES ('O que é "blowout" no contexto de alargadores?', 3);
INSERT INTO alternatives (content, wrong, question_id) VALUES 
('Pele que se projeta para fora devido ao alargamento rápido', 0, 12),
('Um tipo de alargador decorativo', 1, 12), ('Infecção comum em piercings', 1, 12), ('Processo de cicatrização normal', 1, 12);