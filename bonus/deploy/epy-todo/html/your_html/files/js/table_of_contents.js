/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** table_of_contents.js
*/

function keep_as_link(CURRENT = "Home", links = {}) {
    var key = '';
    var res = "";

    for (key in links) {
        if (key == CURRENT) {
            res += `        <li class="table_list_bullet" style="color:black;">${key}</li>`;
        } else {
            res += `        <li class="table_list_bullet"><a class="table_list_link" href="${links[key]}">${key}</a></li>`;
        }
    }
    return res;
}

function table_of_contents(ID, CURRENT = "Home") {
    var i = 0;
    var compile_all = "";
    var joke_id = "a_toc_joke";
    var dest = document.getElementById(ID);
    var links = {
        "Home": "/",
        "About": "/files/sub_pages/about",
        "My Info": "/files/sub_pages/user",
        "My Todos": "/files/sub_pages/user/todos",
        "Manage Users": "/files/sub_pages/users",
        "Manage Todos": "/files/sub_pages/todos",
        "Connect": "/files/sub_pages/connect",
        "Log out": "/files/sub_pages/logout",
        "Terms of use": "/files/sub_pages/terms_of_use",
        "Stop server": "/files/sub_pages/stop"
    };

    compile_all += '<side id="table_of_contents" style="left: -52%">';
    // compile_all += '    <button class="table_button table_close_button" onclick = "animate_menu(\'table_of_contents\')">Close</button>';
    // compile_all += '    <h1 class="table_title">Table of contents:</h1>';
    compile_all += '    <nav class="table_list">';
    compile_all += '    <ul class="table_list_block">';
    compile_all += keep_as_link(CURRENT, links);
    compile_all += '    </ul>';
    compile_all += '    </nav>';
    compile_all += `    <div id="${joke_id}"></div>`;
    compile_all += '</side>';
    compile_all += '';

    dest.innerHTML = compile_all;
    add_a_joke(joke_id);
}
