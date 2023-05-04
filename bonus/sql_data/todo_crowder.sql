USE epytodo;
SELECT "" "Entered the database epytodo";
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
