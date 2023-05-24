/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_inform.js
*/

function compile_message(ID) {
    var message = "";
    var cookie_count = cookie.count_all_cookies();
    var needs_an_s = "";
    if (cookie_count != 1) {
        needs_an_s = "s";
    }
    message += `This Website uses ${cookie_count} cookie${needs_an_s}.`;
    message += `<button class=" inform_button" onclick="clear_my_cookies('${ID}')" aria-label="Clear this websites cookies.">`;
    message += `Clear my cookie${needs_an_s}!`;
    message += "</button>";
    return message;
}

async function clear_my_cookies(ID) {
    cookie.clear_all_cookies();
    var message = compile_message(ID);
    document.getElementById(ID).innerHTML = message;
}

function add_inform(ID) {
    var message = compile_message(ID);
    document.getElementById(ID).innerHTML += message;
}
