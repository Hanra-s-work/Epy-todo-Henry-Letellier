/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_win95_message_box.js
*/

function close_window95(ID) {
    document.getElementById(ID).style.display = "none";
}

function add_win95_message_box(ID, title = 'Windows 95', message = ["Welcome to your PC!"], path = '../../', buttons = ["OK"]) {
    var res = "";

    res += `<div class="win_box">`;
    res += `<div class="win_title">`;
    res += `<img src="${path}/img/win95/windows_95.png" width="18" height="18" class="img_title" />`;
    res += `<p class="win_text_title p_font">${title}</p>`;
    res += `<button class="win_title_button" onclick="close_window('${ID}')">X</button>`;
    res += `<button class="win_title_button" onclick="close_window('${ID}')">?</button>`;
    res += `</div>`;
    res += `<div class="win_body">`;
    res += `<div class="message_section">`;
    res += `<div class="message_icon">`;
    res += `<img class="message_icon" src="${path}/img/win95/error_icon.png" />`;
    res += `</div>`;
    res += `<div class="message_content">`;
    for (var i = 0; i < message.length; i++) {
        res += `<p class="p_font_body">${message[i]}</p>`;
    }
    res += `</div>`;
    res += `</div>`;
    res += `<div class="body_button_section">`;
    for (var i = 0; i < buttons.length; i++) {
        res += `<button class="win_body_button" onclick="close_window95('${ID}')">${buttons[i]}</button>`;
    }
    res += `</div>`;
    res += `</div>`;
    res += `</div>`;
    document.getElementById(ID).innerHTML += res;
}
