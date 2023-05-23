/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_a_joke.js
*/

function add_a_joke(ID) {
    var joke = "";
    joke += `<img alt="Jokes Card" aria-label="Jokes Cards, images with a joke to make you laugh" src="https://readme-jokes.vercel.app/api?hideBorder"/>`;
    // joke += "<div class='joke' aria-label='A random joke'>";
    // joke += "<p>Why did the chicken cross the road?</p>";
    // joke += "<p>To get to the other side!</p>";
    // joke += "</div>";
    document.getElementById(ID).innerHTML += joke;
}
