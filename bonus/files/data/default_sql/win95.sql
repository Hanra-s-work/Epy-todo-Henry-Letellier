CREATE DATABASE IF NOT EXISTS win95;
USE win95;
CREATE TABLE IF NOT EXISTS errors { id INT NOT NULL AUTO_INCREMENT,
error_id TEXT NOT NULL,
error_title TEXT NOT NULL,
error_description TEXT NOT NULL,
PRIMARY KEY (id);
};
INSERT INTO errors (error_id, error_title, error_description)
VALUES (
        "New Windows 95 Error list",
        "Microsoft forgot to explain them in the manuals, so they will be spread via the Internet:",
        ""
    ),
    (
        "WinErr: 001",
        "Windows loaded",
        "System in danger"
    ),
    ("WinErr: 002", "No Error", "Yet"),
    (
        "WinErr: 003",
        "Dynamic linking error",
        "Your mistake is now in every file"
    ),
    (
        "WinErr: 004",
        "Erroneous error",
        "Nothing is wrong"
    ),
    (
        "WinErr: 005",
        "Multitasking attempted",
        "System confused"
    ),
    (
        "WinErr: 006",
        "Malicious error",
        "Desqview found on drive"
    ),
    (
        "WinErr: 007",
        "System price error",
        "Inadequate money spent on hardware"
    ),
    (
        "WinErr: 008",
        "Broken window",
        "Watch out for glass fragments"
    ),
    (
        "WinErr: 009",
        "Horrible bug encountered",
        "God knows what has happened"
    ),
    (
        "WinErr: 00A",
        "Promotional literature overflow",
        "Mailbox full"
    ),
    (
        "WinErr: 00B",
        "Inadequate disk space",
        "Free at least 50MB"
    ),
    (
        "WinErr: 00C",
        "Memory hog error",
        "More Ram needed. Moreť Moreť Moreť"
    ),
    (
        "WinErr: 00D",
        "Window closed",
        "Do not look outside"
    ),
    (
        "WinErr: 00E",
        "Window open",
        "Do not look inside"
    ),
    (
        "WinErr: 00F",
        "Unexplained error",
        "Please tell us how this happened"
    ),
    (
        "WinErr: 010",
        "Reserved for future mistakes by our developers"
    ),
    (
        "WinErr: 011",
        "Window open",
        "Do not look outside"
    ),
    (
        "WinErr: 012",
        "Window closed",
        "Do not look inside"
    ),
    ("WinErr: 013", "Unexpected error", "Huh ?"),
    (
        "WinErr: 014",
        "Keyboard locked",
        "Try anything you can think of."
    ),
    (
        "WinErr: 018",
        "Unrecoverable error",
        "System has been destroyed. Buy a new one. Old Windows licence is not valid anymore."
    ),
    (
        "WinErr: 019",
        "User error",
        "Not our fault. Is Notť Is Notť"
    ),
    (
        "WinErr: 01A",
        "Operating system overwritten",
        "Please reinstall all your software. We are terribly sorry."
    ),
    (
        "WinErr: 01B",
        "Illegal error",
        "You are not allowed to get this error. Next time you will get a penalty for that."
    ),
    (
        "WinErr: 01C",
        "Uncertainty error",
        "Uncertainty may be inadequate."
    ),
    (
        "WinErr: 01D",
        "System crash",
        "We are unable to figure out our own code."
    ),
    (
        "WinErr: 01E",
        "Timing error",
        "Please wait. And wait. And wait. And wait."
    ),
    (
        "WinErr: 01F",
        "Reserved for future mistakes of our developers.",
        "Reserved for future mistakes of our developers."
    ),
    (
        "WinErr: 020",
        "Error recording error codes",
        "Additional errors will be lost."
    ),
    (
        "WinErr: 042",
        "Virus error",
        "A virus has been activated in a dos-box. The virus, however, requires Windows. All tasks will automatically be closed and the virus will be activated again."
    ),
    (
        "WinErr: 079",
        "Mouse not found",
        "A mouse driver has not been installed. Please click the left mouse button to continue."
    ),
    (
        "WinErr: 103",
        "Error buffer overflow",
        "Too many errors encountered. Additional errors may not be displayed or recorded."
    ),
    (
        "WinErr: 678",
        "This will end your Windows session. Do you want to play another game?",
        ""
    ),
    (
        "WinErr: 683",
        "Time out error",
        "Operator fell asleep while waiting for the system to complete boot procedure."
    ),
    (
        "WinErr: 815",
        "Insufficient Memory",
        "Only 50.312.583 Bytes available"
    );
