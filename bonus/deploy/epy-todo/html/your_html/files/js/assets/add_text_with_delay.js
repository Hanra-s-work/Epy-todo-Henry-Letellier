function add_text_with_delay(id, str, delay) {
    const element = document.getElementById(id);
    const message = [
        "<pre><p>",
        "Dear Visitors,\n",
        "</p><p>",
        "Unfortunately, based of my current knowledge of web assembly it is not possible for me to compile CSFML in a way that a browser could run it.\n",
        "</p><br><p>",
        "I am sincerely sorry for dissapointing you.\n",
        "</p><br><p><span style='text-align:left'><i>",
        "The website creator\n",
        "</i></span></p></pre>"
    ];

    for (let i = 0; i < message.length; i++) {
        if (message[i][0] === "<") {
            element.innerHTML += message[i];
        } else {
            for (let j = 0; j < message[i].length; j++) {
                setTimeout(() => {
                    element.innerHTML += message[i][j];
                }, delay * 1000);
            }
        }
    }
}

// const my_msg = [
// "Dear Visitors,",
//     "Unfortunately, based of my current knowledge of web assembly it is not possible for me to compile CSFML in a way that a browser could run it.",
//     "<br>",
//     "I am sincerely sorry for dissapointing you.",
//     "<br><span style='text-align:left'><i>",
//     "The website creator",
//     "</i></span>"
//     ];
