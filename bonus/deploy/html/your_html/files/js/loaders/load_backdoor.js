async function page_backdoor() {
    table_of_contents('table_of_content', 'Home');
    animate_menu('table_of_contents');
    copyright("copyright_zone");
    await log_user_in("login_message");
    var token = cookie.readCookie(window.query.token_cookie_name);
    writeBodyHeader("header", "/", token);
    initialiseTheme("theme", "darkOrLight", '/', 'files/css/boostrap/boostrap_dark.css', 'files/css/boostrap/bootstrap.css');
    add_inform("inform_cookie");
}

page_backdoor();
