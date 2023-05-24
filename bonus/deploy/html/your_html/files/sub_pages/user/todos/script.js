async function refresh_all_todos(DEST_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    const response = await query.getUserTodos(DEST_ID);
}
