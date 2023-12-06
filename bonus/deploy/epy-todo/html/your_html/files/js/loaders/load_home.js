async function page_main() {
    console.log("In Page main");
    table_of_contents('table_of_content', 'Home');
    console.log("Table of contents written");
    animate_menu('table_of_content');
    console.log("Table of animated");
    copyright("copyright_zone");
    console.log("Copyright zone added");

    var token = cookie.readCookie(window.query.token_cookie_name);
    console.log(`Cookie fetched, token = '${token}'`);
    writeBodyHeader("header", "/", token);
    console.log("Header written");

    initialiseTheme(
        "theme",
        "darkOrLight",
        "/",
        "files/css/boostrap/boostrap_dark.css",
        "files/css/boostrap/bootstrap.css"
    );
    console.log("Theme initialised");

    add_inform("inform_cookie");
    console.log("Cookie banner added");
    await query.getHome("welcome_message");
    console.log("Welcome message fetched");
}

page_main()
