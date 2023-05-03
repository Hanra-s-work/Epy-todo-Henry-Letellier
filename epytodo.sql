DROP DATABASE epytodo;
CREATE DATABASE epytodo;

USE epytodo;

ALTER TABLE IF EXISTS todo
DROP FOREIGN KEY other_key_id;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS todo;

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS todo (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at  DATETIME DEFAULT NOW(),
    due_time DATETIME NOT NULL,
    status VARCHAR(11) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT other_key_id
        FOREIGN KEY (user_id)
        REFERENCES user(id),
    PRIMARY KEY (id)
);

ALTER TABLE user ENGINE = InnoDB;
ALTER TABLE todo ENGINE = InnoDB;


INSERT INTO user (email, password, name, firstname)
VALUES ("sonic@test.com", "123456", "fox", "sonic"),
("lumine@test.com", "123456", "<unknown>", "Lumine");

SELECT * FROM user;
