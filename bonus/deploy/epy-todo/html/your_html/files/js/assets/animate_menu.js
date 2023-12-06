/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** animate_menu.js
*/

function animate_menu(ID) {
    const menu = document.getElementById(ID);
    const limit = -52;

    if (menu.style.left === `${limit}%`) {
        for (var i = limit; i <= 0; i++) {
            menu.style.left = `${i}%`;
        }
    } else {
        for (var i = 0; i >= limit; i--) {
            menu.style.left = `${i}%`;
        }
    }
}
