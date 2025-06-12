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