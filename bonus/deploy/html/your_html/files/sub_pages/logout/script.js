/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** script.js
*/

async function log_user_out(ID) {
    console.log("In log_user_out");
    var message = await query.logout();
    if (message === "success") {
        message = "You are successfully logged out !"
    }
    if (message === "User not logged in") {
        message = "You are not logged in !"
    }
    document.getElementById(ID).innerHTML += message;
}
