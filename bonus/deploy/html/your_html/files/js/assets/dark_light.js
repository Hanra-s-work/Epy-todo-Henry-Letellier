console.log("js/dark_light initialising");
// Second file
function theme(ID = "darkOrLight", ID2 = "theme", home = "/", themeD = "files/css/boostrap/boostrap_dark.css", themeL = "files/css/boostrap/boostrap.css") {
    var WasChecked = document.getElementById(ID).checked;
    if (WasChecked === false) {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL + "\">";
        cookie.createCookie('theme', "L", "", "/");
    } else {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD + "\">";
        cookie.createCookie('theme', "D", "", "/");
    }

}

function initialiseTheme(ID, IDRead, home = "/", themeD = "files/css/boostrap/boostrap_dark.css", themeL = "files/css/boostrap/bootstrap.css") {
    var url = document.location.href;
    try {
        e = cookie.readCookie("theme");
        if (e === "L") {
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL + "\">";
            document.getElementById(IDRead).checked = false;
            cookie.createCookie("theme", "L", "", "/");
        } else {
            console.log("The theme is not light.")
        }
        if (e === "D") {
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD + "\">";
            document.getElementById(IDRead).checked = true;
            cookie.createCookie("theme", "D", "", "/");
        } else {
            console.log("The theme is not dark.")
        }
        if (e === "") {
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL + "\">";
            document.getElementById(IDRead).checked = false;
            cookie.createCookie("theme", "L", "", "/");
        } else {
            console.log("There is a theme.")
        }
    } catch (err) {
        document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL + "\">";
        // document.cookie="theme=L";
        cookie.createCookie("theme", "L", "", "/");
    }
}
console.log("js/dark_light initialised");
