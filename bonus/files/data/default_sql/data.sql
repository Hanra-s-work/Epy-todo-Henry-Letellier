CREATE DATABASE my_epy_todo;
USE my_epy_todo;
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    debut_year INT NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO users (name, email, password, debut_year)
VALUES ('John Doe', 'john@example.com', "123456", 1991);
INSERT INTO users (name, email, password, debut_year)
VALUES ('Jane Doe', 'jane@example.com', "123456", 1991);
INSERT INTO users (name, email, password, debut_year)
VALUES ('Bob Smith', 'bob@example.com', "123456", 1991);
INSERT INTO users (name, email, password, debut_year)
VALUES (
        'Sonic the Hedgehog',
        'sonic@example.com',
        "123456",
        1991
    );
INSERT INTO users (name, email, password, debut_year)
VALUES (
        'Miles Tails Prower',
        'tails@example.com',
        "@123456",
        1992
    );
INSERT INTO users (name, email, password, debut_year)
VALUES ('Amy Rose', 'amy@example.com', "456789", 1993);
INSERT INTO users (name, email, password, debut_year)
VALUES (
        'Silver the Hedgehog',
        'silver@example.com',
        "456789",
        2006
    );
INSERT INTO users (name, email, password, debut_year)
VALUES (
        'Blaze the Cat',
        'blaze@example.com',
        "456789",
        2005
    );
INSERT INTO users (name, email, password, debut_year)
VALUES ('Alex Kidd', 'alex@example.com', "456789", 1986),
    ('ToeJam', 'toe@example.com', "456789", 1991),
    ('Earl', 'earl@example.com', "456789", 1991),
    ('Ristar', 'ristar@example.com', "456789", 1995),
    (
        'Kid Chameleon',
        'kid@example.com',
        "456789",
        1992
    ),
    (
        'Vectorman',
        'vectorman@example.com',
        "456789",
        1995
    ),
    (
        'Bubsy',
        'bubsy@example.com',
        "456789",
        1993
    ),
    (
        'Earthworm Jim',
        'jim@example.com',
        "456789",
        1994
    ),
    (
        'Gilius Thunderhead',
        'giliue@example.com',
        "456789",
        1989
    );
INSERT INTO users (name, email, password, debut_year)
VALUES (
        'Knuckles the Echidna',
        'knuckles3@example.com',
        'P@ssword3',
        1994
    ),
    (
        'Amy Rose',
        'amy4@example.com',
        'P@ssword4',
        1993
    ),
    (
        'Shadow the Hedgehog',
        'shadow5@example.com',
        'P@ssword5',
        2001
    ),
    (
        'Rouge the Bat',
        'rouge6@example.com',
        'P@ssword6',
        2001
    ),
    (
        'Cream the Rabbit',
        'cream7@example.com',
        'P@ssword7',
        2002
    ),
    (
        'Cheese the Chao',
        'cheese8@example.com',
        'P@ssword8',
        2002
    ),
    (
        'Big the Cat',
        'big9@example.com',
        'P@ssword9',
        1998
    ),
    (
        'Froggy',
        'froggy10@example.com',
        'P@ssword10',
        1998
    ),
    (
        'Espio the Chameleon',
        'espio11@example.com',
        'P@ssword11',
        1995
    ),
    (
        'Charmy Bee',
        'charmy12@example.com',
        'P@ssword12',
        1995
    ),
    (
        'Vector the Crocodile',
        'vector13@example.com',
        'P@ssword13',
        1995
    ),
    (
        'Silver the Hedgehog',
        'silver14@example.com',
        'P@ssword14',
        2006
    ),
    (
        'Blaze the Cat',
        'blaze15@example.com',
        'P@ssword15',
        2005
    ),
    (
        'Marine the Raccoon',
        'marine16@example.com',
        'P@ssword16',
        2007
    ),
    (
        'Jet the Hawk',
        'jet17@example.com',
        'P@ssword17',
        2006
    ),
    (
        'Wave the Swallow',
        'wave18@example.com',
        'P@ssword18',
        2002
    ),
    (
        'Storm the Albatross',
        'storm19@example.com',
        'P@ssword19',
        2002
    ),
    (
        'E-123 Omega',
        'omega20@example.com',
        'P@ssword20',
        2003
    ),
    (
        'Metal Sonic',
        'metalsonic21@example.com',
        'P@ssword21',
        1993
    ),
    (
        'Mighty the Armadillo',
        'mighty22@example.com',
        'P@ssword22',
        1993
    ),
    (
        'Ray the Flying Squirrel',
        'ray23@example.com',
        'P@ssword23',
        1993
    ),
    (
        'Chaos',
        'chaos24@example.com',
        'P@ssword24',
        1998
    ),
    (
        'Tikal the Echidna',
        'tikal25@example.com',
        'P@ssword25',
        1998
    ),
    (
        'Dr. Eggman',
        'eggman26@example.com',
        'P@ssword26',
        1991
    ),
    (
        'Orbot',
        'orbot27@example.com',
        'P@ssword27',
        2010
    ),
    (
        'Cubot',
        'cubot28@example.com',
        'P@ssword28',
        2010
    ),
    (
        'Zavok',
        'zavok29@example.com',
        'P@ssword29',
        2013
    ),
    ('Zazz', 'zazz30@example.com', 'P@ssword30', 2013),
    ('Zomom', 'zomom@example.com', '123456', 2013),
    ('Zooey', 'zooey@example.com', '123456', 2014),
    ('Zor', 'zor@example.com', '123456', 2010),
    ('Zorin', 'zorin@example.com', '123456', 2012),
    ('Zorri', 'zorri@example.com', '123456', 2020),
    ('Zou', 'zou@example.com', '123456', 2016),
    ('Zubir', 'zubir@example.com', '123456', 2006),
    ('Zuke', 'zuke@example.com', '123456', 2010),
    ('Zurgane', 'zurgane@example.com', '123456', 2004),
    ('Zwei', 'zwei@example.com', '123456', 2010),
    ('Zazz', 'zazz@example.com', '123456', 2013),
    (
        'Wave the Swallow',
        'wave@example.com',
        '123456',
        2002
    ),
    (
        'Tikal the Echidna',
        'tikal@example.com',
        '123456',
        1998
    ),
    (
        'Storm the Albatross',
        'storm@example.com',
        '123456',
        2006
    ),
    (
        'Sticks the Badger',
        'sticks@example.com',
        '123456',
        2014
    ),
    (
        'Silver the Hedgehog',
        'silver@example.com',
        '123456',
        2006
    ),
    (
        'Shade the Echidna',
        'shade@example.com',
        '123456',
        2005
    ),
    (
        'Rotor the Walrus',
        'rotor@example.com',
        '123456',
        1993
    ),
    (
        'Rouge the Bat',
        'rouge@example.com',
        '123456',
        2001
    ),
    (
        'Ray the Flying Squirrel',
        'ray@example.com',
        '123456',
        1993
    ),
    (
        'Queen Aleena Hedgehog',
        'aleena@example.com',
        '123456',
        1999
    ),
    ('Orbot', 'orbot@example.com', '123456', 2010),
    ('Omega', 'omega@example.com', '123456', 2003),
    (
        'Mephiles the Dark',
        'mephiles@example.com',
        '123456',
        2006
    ),
    (
        'Mighty the Armadillo',
        'mighty@example.com',
        '123456',
        1993
    ),
    (
        'Metal Sonic',
        'metalsonic@example.com',
        '123456',
        1993
    ),
    (
        'Knuckles the Echidna',
        'knuckles@example.com',
        '123456',
        1994
    ),
    (
        'Jet the Hawk',
        'jet@example.com',
        '123456',
        2006
    ),
    (
        'Infinite',
        'infinite@example.com',
        '123456',
        2017
    ),
    (
        'Espio the Chameleon',
        'espio@example.com',
        '123456',
        1995
    ),
    ('Orbot', 'orbot@example.com', 'pass1234', 2010),
    ('Cubot', 'cubot@example.com', 'pass1234', 2010),
    ('Zavok', 'zavok@example.com', 'pass1234', 2013),
    ('Zazz', 'zazz@example.com', 'pass1234', 2013),
    ('Zeena', 'zeena@example.com', 'pass1234', 2013),
    ('Zor', 'zor@example.com', 'pass1234', 2013),
    (
        'Shade the Echidna',
        'shadetheechidna@example.com',
        '123456',
        2006
    ),
    (
        'Storm the Albatross',
        'stormthealbatross@example.com',
        '123456',
        2006
    ),
    (
        'Marine the Raccoon',
        'marinetheraccoon@example.com',
        '123456',
        2007
    ),
    (
        'Mighty the Armadillo',
        'mightythearmadillo@example.com',
        '123456',
        1993
    ),
    (
        'Ray the Flying Squirrel',
        'raytheflyingsquirrel@example.com',
        '123456',
        1993
    ),
    (
        'Bark the Polar Bear',
        'barkthepolarbear@example.com',
        '123456',
        1996
    ),
    (
        'Bean the Dynamite',
        'beanthedynamite@example.com',
        '123456',
        1996
    ),
    (
        'Fang the Sniper',
        'fangthesniper@example.com',
        '123456',
        1996
    ),
    (
        'Honey the Cat',
        'honeythecat@example.com',
        '123456',
        2003
    ),
    (
        'Jet the Hawk',
        'jetthehawk@example.com',
        '123456',
        2003
    ),
    (
        'Wave the Swallow',
        'wavetheswallow@example.com',
        '123456',
        2003
    ),
    (
        'Sticks the Badger',
        'sticksthebadger@example.com',
        '123456',
        2014
    ),
    (
        'Orbot the Robot',
        'orbottherobot@example.com',
        '123456',
        2010
    ),
    (
        'Cubot the Robot',
        'cubottherobot@example.com',
        '123456',
        2010
    ),
    (
        'Whisper the Wolf',
        'whisperthewolf@example.com',
        '123456',
        2018
    ),
    (
        'Tangle the Lemur',
        'tanglethelemur@example.com',
        '123456',
        2018
    ),
    (
        'Rough the Skunk',
        'roughtheskunk@example.com',
        '123456',
        2002
    ),
    (
        'Tumble the Skunk',
        'tumbletheskunk@example.com',
        '123456',
        2002
    ),
    (
        'Rosie the Rascal',
        'rosietherascal@example.com',
        '123456',
        1995
    ),
    (
        'Franklin the Turtle',
        'franklintheturtle@example.com',
        '123456',
        1995
    ),
    (
        'Lucas the Spider',
        'lucasthespider@example.com',
        '123456',
        2018
    ),
    (
        'Chirps the Chickadee',
        'chirpsthechickadee@example.com',
        '123456',
        2001
    ),
    (
        'Phineas the Flycatcher',
        'phineastheflycatcher@example.com',
        '123456',
        2001
    ),
    (
        'Dustin the Dove',
        'dustinthedove@example.com',
        '123456',
        2001
    ),
    (
        'Wally the Woodpecker',
        'wallythewoodpecker@example.com',
        '123456',
        2001
    ),
    (
        'Nate the Nightingale',
        'natethenightingale@example.com',
        '123456',
        2001
    ),
    (
        'Buzz the Bee',
        'buzzthebee@example.com',
        '123456',
        1991
    ),
    (
        'Fifi the Peke',
        'fifithepeke@example.com',
        '123456',
        1991
    ),
    (
        'Griff the Goat',
        'griffthegoat@example.com',
        '123456',
        1991
    );
