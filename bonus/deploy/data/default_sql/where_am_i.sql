CREATE DATABASE mariadb_location;
USE mariadb_location;
CREATE TABLE IF NOT EXISTS where_am_i (
    id INT NOT NULL AUTO_INCREMENT,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO where_am_i (location)
VALUES ('Docker');
