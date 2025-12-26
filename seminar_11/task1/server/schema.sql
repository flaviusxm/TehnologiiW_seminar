DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL
);

INSERT INTO users (name, type) VALUES ('George', 'admin');
INSERT INTO users (name, type) VALUES ('Mark', 'user');
INSERT INTO users (name, type) VALUES ('Decimus', 'admin');
