/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** script.js
*/

async function log_user_in(ID) {
    var message = await query.login("lumine@example.com", "123456");
    if (message === "success") {
        message = "You are successfully logged in !\<br>";
        message += "Based on the Epitech cybersecurity Kit/Kat:<br>";
        message += "<i>Embedding a trap door (back door) into a <br>";
        message += " login program results in an improved version of <br>";
        message += "the login program with enhanced secret access.</i ><br>";
    }
    document.getElementById(ID).innerHTML += message;
}
