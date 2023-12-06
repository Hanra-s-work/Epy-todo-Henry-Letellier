
function page_user_todos() {
    table_of_contents('table_of_content', "My Todos");
    animate_menu('table_of_contents');
    copyright("copyright_zone");
    var token = cookie.readCookie(window.query.token_cookie_name);
    writeBodyHeader("header", "/", token);
    initialiseTheme("theme", "darkOrLight", '/', 'files/css/boostrap/boostrap_dark.css', 'files/css/boostrap/bootstrap.css');
    add_inform("inform_cookie");
    query.getUserTodos("data");
}

page_user_todos();
