USE epytodo;
SELECT "" "Entered the database epytodo.";
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
        "<unknown>",
        "lumine@example.com",
        "$2a$10$7Rcw2li.I2DsiPVLf5XzvOcTuqCMh59pD01E9ByoeC0FPiwheRdie" -- 123456
    );
SELECT "" "Inserted the values into the table user";
