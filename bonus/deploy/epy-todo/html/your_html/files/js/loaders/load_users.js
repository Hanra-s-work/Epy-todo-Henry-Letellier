function page_users() {
    table_of_contents('table_of_content', "Manage Users");
    animate_menu('table_of_contents');
    copyright("copyright_zone");
    // reset_data_forms('create-title', 'create-description', 'create-dueTime', 'create-statusDropdown');
    reset_data_forms(todo_email = 'update-email', todo_password = 'update-pasword', todo_password_confirm = 'update-pasword-confirm', todo_name = 'update-name', todo_firstname = 'update-firstname');
    var token = cookie.readCookie(window.query.token_cookie_name);
    writeBodyHeader("header", "/", token);
    initialiseTheme("theme", "darkOrLight", '/', 'files/css/boostrap/boostrap_dark.css', 'files/css/boostrap/bootstrap.css');
    add_inform("inform_cookie");
    update_delete_message_id('user-id-search', 'delete_todo_nb', 'todo_description');
    query.getRefletDAcide("data");
}
page_users();
