CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    page_count INT NOT NULL,
    edition VARCHAR(50),
    publisher VARCHAR(255)
);

INSERT INTO livros (title, author, isbn, page_count, edition, publisher) VALUES
('Dom Quixote', 'Miguel de Cervantes', '9788535914849', 928, '1ª Edição', 'Companhia das Letras'),
('1984', 'George Orwell', '9780451524935', 328, '2ª Edição', 'Penguin Books'),
('O Senhor dos Anéis', 'J.R.R. Tolkien', '9780544003415', 1216, '3ª Edição', 'HarperCollins'),
('A Revolução dos Bichos', 'George Orwell', '9780451526342', 112, '1ª Edição', 'Penguin Books'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', '9780156012195', 96, '5ª Edição', 'Harcourt');
