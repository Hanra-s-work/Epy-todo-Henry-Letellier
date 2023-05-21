DROP DATABASE IF EXISTS epytodo;
CREATE DATABASE epytodo;
SELECT "" "Creating database epytodo:";
USE epytodo;
-- ALTER TABLE IF EXISTS todo
-- DROP FOREIGN KEY IF EXISTS other_key_id;
SELECT "" "Emptying tables user and todo:";
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS todo;
SELECT "" "Creating table user:";
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);
SELECT "" "Creating table todo:";
CREATE TABLE IF NOT EXISTS todo (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    due_time DATETIME NOT NULL,
    status VARCHAR(11) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT other_key_id FOREIGN KEY (user_id) REFERENCES user(id),
    PRIMARY KEY (id)
);
SELECT "" "Setting the engine InnoDB to be the default table engine:";
ALTER TABLE user ENGINE = InnoDB;
ALTER TABLE todo ENGINE = InnoDB;
SELECT "" "All tables are created";
