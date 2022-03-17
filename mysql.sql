-- Criando tabela

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Inserindo dados na tabela

INSERT INTO usuarios (nome, email , idade) VALUES (
    "Arthur",
    "arthurgabriel@gmail.com",
     49
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade =30;

DELETE FROM usuarios WHERE idade = 30;

UPDATE usuarios SET idade = 5 WHERE email = "arthurgabriel@gmail.com";