function page_todos() {
    table_of_contents('table_of_content', "Manage Todos");
    animate_menu('table_of_contents');
    copyright("copyright_zone");
    reset_data_forms('create-title', 'create-description', 'create-dueTime', 'create-statusDropdown');
    reset_data_forms('update-title', 'update-description', 'update-dueTime', 'update-statusDropdown');
    var token = cookie.readCookie(window.query.token_cookie_name);
    writeBodyHeader("header", "/", token);
    initialiseTheme("theme", "darkOrLight", '/', 'files/css/boostrap/boostrap_dark.css', 'files/css/boostrap/bootstrap.css');
    add_inform("inform_cookie");
    update_delete_message('todo_search', 'delete_todo_nb', 'todo_description');
    query.getTodos("data");
}

page_todos()
