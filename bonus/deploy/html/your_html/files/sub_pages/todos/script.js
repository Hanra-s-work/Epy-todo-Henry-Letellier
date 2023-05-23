async function refresh_all_todos(DEST_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    const response = await query.getTodos(DEST_ID);
}

async function get_todo(TODO_ID, DEST_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    var id = document.getElementById(TODO_ID).value;
    console.log(`id = ${id}`);
    const response = await query.getTodosViaID(DEST_ID, id);
}
