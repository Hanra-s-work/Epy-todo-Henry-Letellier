--
-- EPITECH PROJECT, 2022
-- B-WEB-200-PAR-2-1-epytodo-henry.letellier
-- File description:
-- epytodo.sql
--

-- Creating users
SELECT "" "Listing all users:";
SELECT user,
    host,
    password_expired,
    Password
FROM mysql.user;
SELECT "" "User privileges:";
SHOW GRANTS;
SELECT "" "Removing existing users:";
DROP USER IF EXISTS 'fox';
DROP USER IF EXISTS 'lumine';
DROP USER IF EXISTS 'tails';
SELECT "" "Creating user 'fox' on 'localhost':";
CREATE USER IF NOT EXISTS 'fox' @'localhost' IDENTIFIED BY 'fox';
GRANT ALL PRIVILEGES ON *.* TO `fox` @'localhost';
SELECT "" "Created user 'fox' on 'localhost'.";
SELECT "" "Creating user 'lumine' on 'localhost':";
CREATE USER IF NOT EXISTS 'lumine' @'localhost' IDENTIFIED BY 'lumine';
GRANT ALL PRIVILEGES ON *.* TO `lumine` @'localhost';
SELECT "" "Created user 'lumine' on 'localhost'.";
SELECT "" "Creating user 'tails' on 'localhost':";
CREATE USER IF NOT EXISTS 'tails' @'localhost' IDENTIFIED BY 'tails';
GRANT ALL PRIVILEGES ON *.* TO `tails` @'localhost';
SELECT "" "Created user 'tails' on 'localhost'.";
-- Creating database
DROP DATABASE IF EXISTS epytodo_mini;
CREATE DATABASE epytodo_mini;
SELECT "" "Created database epytodo_mini";
USE epytodo_mini;
--  Creating tables
ALTER TABLE IF EXISTS todo DROP FOREIGN KEY IF EXISTS other_key_id;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS todo;
SELECT "" "Removed tables user and todo if they existed in epytodo_mini";
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);
SELECT "" "Created table user in epytodo_mini";
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
SELECT "" "Created table todo in epytodo_mini";
ALTER TABLE user ENGINE = InnoDB;
ALTER TABLE todo ENGINE = InnoDB;
SELECT "" "Changed the table engines to InnoDB";
-- Filling table user
DELETE FROM todo;
DELETE FROM user;
SELECT "" "Emptied content of table user";
SELECT "" "Inserting the values into the table user";
INSERT INTO user(firstname, name, email, password)
VALUES (
        "John",
        "Doe",
        "john@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Jane",
        "Doe",
        "jane@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Bob",
        "Smith",
        "bob@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Sonic",
        "the Hedgehog",
        "sonic@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Miles",
        "Tails Prower",
        "tails@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Amy",
        "Rose",
        "amy@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Silver",
        "the Hedgehog",
        "silver@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Blaze",
        "the Cat",
        "blaze@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Alex",
        "Kidd",
        "alex@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "ToeJam",
        "<unknown>",
        "toe@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Earl",
        "Bobby",
        "earl@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Ristar",
        "Bobby",
        "ristar@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Kid",
        "Chameleon",
        "kid@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Vectorman",
        "<unknown>",
        "vectorman@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Bubsy",
        "<unknown>",
        "bubsy@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Earthworm",
        "Jim",
        "jim@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Gilius",
        "Thunderhead",
        "giliue@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Knuckles",
        "the Echidna",
        "knuckles3@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Amy",
        "Rose",
        "amy4@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Shadow",
        "the Hedgehog",
        "shadow5@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Rouge",
        "the Bat",
        "rouge6@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Cream",
        "the Rabbit",
        "cream7@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Cheese",
        "the Chao",
        "cheese8@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Big",
        "the Cat",
        "big9@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Froggy",
        "the Frog",
        "froggy10@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Espio",
        "the Chameleon",
        "espio11@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Charmy",
        "Bee",
        "charmy12@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Vector",
        "the Crocodile",
        "vector13@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Silver",
        "the Hedgehog",
        "silver14@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Blaze",
        "the Cat",
        "blaze15@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Marine",
        "the Raccoon",
        "marine16@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Jet",
        "the Hawk",
        "jet17@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Wave",
        "the Swallow",
        "wave18@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Storm",
        "the Albatross",
        "storm19@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "E-123",
        "Omega",
        "omega20@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Metal",
        "Sonic",
        "metalsonic21@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Mighty",
        "the Armadillo",
        "mighty22@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Ray",
        "the Flying Squirrel",
        "ray23@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Chaos",
        "The energy monster",
        "chaos24@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Tikal",
        "the Echidna",
        "tikal25@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Dr. Ivo",
        "Eggman",
        "eggman26@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Orbot",
        "<unknown>",
        "orbot27@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Cubot",
        "<unknown>",
        "cubot28@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zavok",
        "<unknown>",
        "zavok29@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zazz",
        "<unknown>",
        "zazz30@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zomom",
        "<unknown>",
        "zomom@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zooey",
        "<unknown>",
        "zooey@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zor",
        "<unknown>",
        "zor@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zorin",
        "<unknown>",
        "zorin@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zorri",
        "<unknown>",
        "zorri@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zou",
        "<unknown>",
        "zou@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zubir",
        "<unknown>",
        "zubir@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zuke",
        "<unknown>",
        "zuke@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zurgane",
        "<unknown>",
        "zurgane@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zwei",
        "<unknown>",
        "zwei@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zazz",
        "<unknown>",
        "zazz@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Wave",
        "the Swallow",
        "wave@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Tikal",
        "the Echidna",
        "tikal@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Storm",
        "the Albatross",
        "storm@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Sticks",
        "the Badger",
        "sticks@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Silver",
        "the Hedgehog",
        "silver2@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Shade",
        "the Echidna",
        "shade@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Rotor",
        "the Walrus",
        "rotor@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Rouge",
        "the Bat",
        "rouge@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Ray",
        "the Flying Squirrel",
        "ray@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Queen",
        "Aleena Hedgehog",
        "aleena@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Orbot",
        "<unknown>",
        "orbot@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Omega",
        "<unknown>",
        "omega@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Mephiles",
        "the Dark",
        "mephiles@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Mighty",
        "the Armadillo",
        "mighty@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Metal",
        "Sonic",
        "metalsonic@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Knuckles",
        "the Echidna",
        "knuckles@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Jet",
        "the Hawk",
        "jet@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Infinite",
        "<unknown>",
        "infinite@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Espio",
        "the Chameleon",
        "espio@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Orbot",
        "<unknown>",
        "orbot2@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Cubot",
        "<unknown>",
        "cubot@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zavok",
        "<unknown>",
        "zavok@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zazz",
        "<unknown>",
        "zazz2@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zeena",
        "<unknown>",
        "zeena@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Zor",
        "<unknown>",
        "zor2@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Shade",
        "the Echidna",
        "shadetheechidna@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Storm",
        "the Albatross",
        "stormthealbatross@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Marine",
        "the Raccoon",
        "marinetheraccoon@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Mighty",
        "the Armadillo",
        "mightythearmadillo@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Ray",
        "the Flying Squirrel",
        "raytheflyingsquirrel@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Bark",
        "the Polar Bear",
        "barkthepolarbear@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Bean",
        "the Dynamite",
        "beanthedynamite@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Fang",
        "the Sniper",
        "fangthesniper@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Honey",
        "the Cat",
        "honeythecat@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Jet",
        "the Hawk",
        "jetthehawk@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Wave",
        "the Swallow",
        "wavetheswallow@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Sticks",
        "the Badger",
        "sticksthebadger@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Orbot",
        "the Robot",
        "orbottherobot3@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Cubot",
        "the Robot",
        "cubottherobot@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Whisper",
        "the Wolf",
        "whisperthewolf@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Tangle",
        "the Lemur",
        "tanglethelemur@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Rough",
        "the Skunk",
        "roughtheskunk@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Tumble",
        "the Skunk",
        "tumbletheskunk@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Rosie",
        "the Rascal",
        "rosietherascal@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Franklin",
        "the Turtle",
        "franklintheturtle@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Lucas",
        "the Spider",
        "lucasthespider@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Chirps",
        "the Chickadee",
        "chirpsthechickadee@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Phineas",
        "the Flycatcher",
        "phineastheflycatcher@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Dustin",
        "the Dove",
        "dustinthedove@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Wally",
        "the Woodpecker",
        "wallythewoodpecker@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Nate",
        "the Nightingale",
        "natethenightingale@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Buzz",
        "the Bee",
        "buzzthebee@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Fifi",
        "the Peke",
        "fifithepeke@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Griff",
        "the Goat",
        "griffthegoat@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    ),
    (
        "Lumine",
        "<unkown>",
        "lumine@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    );
SELECT "" "Inserted the values into the table user";
-- Filling table todo
DELETE FROM todo;
SELECT "" "Emptied the table todo.";
SELECT "" "Inserting the values into the table todo";
INSERT INTO todo (title, description, due_time, status, user_id)
VALUES (
        "Save Amy.",
        "Save Amy from eggman.",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Buy groceries",
        "Milk, eggs, bread, and cheese",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "john@example.com"
        )
    ),
    (
        "Clean the house",
        "Vacuum, dust, and do laundry",
        DATE_ADD(NOW(), INTERVAL 9 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "jane@example.com"
        )
    ),
    (
        "Read a book",
        "Science fiction novel",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Go for a run",
        "5 miles around the park",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Study for exam",
        "Chapter 1-5 of textbook",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Prepare presentation",
        "Slides and speaking notes",
        DATE_ADD(NOW(), INTERVAL 8 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "blaze@example.com"
        )
    ),
    (
        "Pay bills",
        "Electricity, internet, and phone",
        DATE_ADD(NOW(), INTERVAL 1 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "alex@example.com"
        )
    ),
    (
        "Clean out closet",
        "Donate unwanted clothes",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "toe@example.com"
        )
    ),
    (
        "Fix bike",
        "Replace flat tire and oil chain",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "earl@example.com"
        )
    ),
    (
        "Take dog for a walk",
        "30 minutes around the block",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "ristar@example.com"
        )
    ),
    (
        "Collect rings",
        "Collect as many rings as possible",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Defeat Eggman",
        "Stop Eggman's evil plans",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Train with Tails",
        "Practice combat skills with Tails",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Gather Chaos Emeralds",
        "Find all the Chaos Emeralds",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Race against knuckles@example.com",
        "Compete against knuckles@example.com in a foot race",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Save Cream and Cheese",
        "Rescue Cream and Cheese from danger",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Find the Master Emerald",
        "Locate the Master Emerald before Eggman does",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Protect Angel Island",
        "Defend Angel Island from intruders",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Train with Espio",
        "Train stealth and agility with Espio",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Race against sonic@example.com",
        "Compete against sonic@example.com in a foot race",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Fight against Eggman",
        "Help sonic@example.com and Tails in their fight against Eggman",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Retrieve stolen treasure",
        "Recover stolen treasure from the pirates",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Assist Rouge",
        "Help Rouge in her mission to retrieve gems",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Eliminate targets",
        "Take out assigned targets in assigned locations",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Train with Omega",
        "Train combat skills with Omega",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Investigate strange occurrences",
        "Investigate unusual activity in designated area",
        DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Defeat Vile",
        "Stop Vile from causing chaos in the city.",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Investigate Suspicious Activity",
        "Look into suspicious activity in the abandoned warehouse district.",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Train with Axl",
        "Spar with Axl to improve combat skills.",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Find Missing Reploids",
        "Investigate reports of missing Reploids in the area.",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Upgrade Armor",
        "Upgrade armor to withstand tougher enemies.",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Repair Maverick Hunter Base",
        "Assist in the repairs of the Maverick Hunter Base.",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Locate Sigma's Hideout",
        "Investigate rumors of Sigma's latest hideout location.",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Retrieve Lost Data",
        "Retrieve lost data from a malfunctioning Reploid.",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Track Down Colonel",
        "Track down Colonel and bring him to justice.",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Train with Zero",
        "Spar with Zero to improve combat skills.",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "bob@example.com"
        )
    ),
    (
        "Walk Kody to school",
        "Make sure he doesn't get into any trouble",
        DATE_ADD(NOW(), INTERVAL 1 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Learn new tricks",
        "Practice how to defend Kody",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Find a job",
        "Earn some money to buy food and shelter",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Visit the doctor",
        "Get checked for any health problems",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Help Kody with homework",
        "Teach him some new skills",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Go on a walk with Kody",
        "Explore the neighborhood",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Join a club",
        "Meet new people and make friends",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Learn more about magic",
        "Expand knowledge on spells and potions",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Go to the park",
        "Relax and have fun",
        DATE_ADD(NOW(), INTERVAL 8 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Take a day off",
        "Rest and recharge",
        DATE_ADD(NOW(), INTERVAL 9 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Finish building the Tornado",
        "Install engine and wings",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Study advanced mechanics",
        "Read chapters 7-10 of textbook",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Practice flying maneuvers",
        "Loop-de-loops and barrel rolls",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Help sonic@example.com with his latest mission",
        "Gather intel and provide air support",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Fix the broken robot",
        "Replace its motherboard and reprogram it",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Design a new gadget",
        "Brainstorm ideas and sketch out plans",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Teach Amy how to use the tails@example.com Electric",
        "Explain its features and demonstrate its functions",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Invent a new type of propulsion system",
        "Research and experiment with alternative technologies",
        DATE_ADD(NOW(), INTERVAL 14 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Repair the damaged machinery in the lab",
        "Diagnose the problem and replace the faulty parts",
        DATE_ADD(NOW(), INTERVAL 8 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Organize a charity fundraiser",
        "Coordinate with local businesses and advertise the event",
        DATE_ADD(NOW(), INTERVAL 12 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Date with Sonic",
        "Try and set up a date with Sonic uwu",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "amy@example.com"
        )
    ),
    (
        "Attend meeting with GUN",
        "Report mission findings and provide analysis",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "knuckles@example.com"
        )
    ),
    (
        "Infiltrate casino",
        "Collect data on potential criminal activity",
        DATE_ADD(NOW(), INTERVAL 9 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "sonic@example.com"
        )
    ),
    (
        "Research gemstone market",
        "Identify profitable investment opportunities",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "tails@example.com"
        )
    ),
    (
        "Attend martial arts class",
        "Improve combat skills and physical fitness",
        DATE_ADD(NOW(), INTERVAL 1 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Conduct reconnaissance",
        "Survey enemy territory from air",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "shadow5@example.com"
        )
    ),
    (
        "Train shooting skills",
        "Practice with various firearms",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "omega@example.com"
        )
    ),
    (
        "Steal valuable artifact",
        "Retrieve ancient treasure from guarded location",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Attend art exhibit",
        "Socialize with high society contacts",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "lumine@example.com"
        )
    ),
    (
        "Provide backup for allies",
        "Assist in defeating enemy forces",
        DATE_ADD(NOW(), INTERVAL 8 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "blaze@example.com"
        )
    ),
    (
        "Scope out the jewelry store",
        "Identify the security measures and potential entry points",
        DATE_ADD(NOW(), INTERVAL 3 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Research potential targets",
        "Find out which museums and galleries have valuable artifacts on display",
        DATE_ADD(NOW(), INTERVAL 7 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Attend a charity gala",
        "Pose as a wealthy socialite and gather intel on the other attendees",
        DATE_ADD(NOW(), INTERVAL 5 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Recruit a new partner in crime",
        "Find someone with the right skills and motivation to join the team",
        DATE_ADD(NOW(), INTERVAL 10 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Practice pickpocketing",
        "Hone your sleight of hand skills in a crowded public space",
        DATE_ADD(NOW(), INTERVAL 2 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Plan a heist on a luxury yacht",
        "Map out the security layout and identify potential loot",
        DATE_ADD(NOW(), INTERVAL 9 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Acquire high-tech equipment",
        "Purchase or steal the necessary tools for breaking into secure locations",
        DATE_ADD(NOW(), INTERVAL 4 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Create a distraction",
        "Develop a plan for causing chaos and confusion to facilitate a heist",
        DATE_ADD(NOW(), INTERVAL 6 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Practice lockpicking",
        "Improve your lockpicking skills with various types of locks",
        DATE_ADD(NOW(), INTERVAL 8 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    ),
    (
        "Case the local casino",
        "Identify the best time to strike and potential weak points in the security",
        DATE_ADD(NOW(), INTERVAL 1 DAY),
        "not started",
        (
            SELECT id
            FROM user
            WHERE email = "rouge@example.com"
        )
    );
SELECT "" "Inserted the values into the table todo";
