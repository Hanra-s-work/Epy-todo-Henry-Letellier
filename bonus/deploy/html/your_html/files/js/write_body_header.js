
function add_login_page(HOME) {
    var data = "";
    data += `<style>`;
    data += `/* Styling for the pop-up */`;
    data += `.popup {display: none;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 400px;height: 300px;background-color: #fff;border: 1px solid #ccc;padding: 20px;}`;
    data += `</style>`;
    data += `<script>`;
    data += `function openLoginPopup() {document.getElementById("loginPopup").style.display = "block";}`;
    data += `function closeLoginPopup() {document.getElementById("loginPopup").style.display = "none";}`;
    data += `</script>`;
    data += `<div id="loginPopup" class="popup">`;
    data += `   <h2>Login</h2>`;
    data += `    <iframe src="${HOME}files/sub_pages/connect/index.html" width="100%" height="100%" frameborder="0"></iframe>`;
    data += `    <button onclick="closeLoginPopup()">Close</button>`;
    data += `</div>`;
    return data;
}
function which_auth_button(HOME, token) {
    if (token === "") {
        return `        <a href="${HOME}files/sub_pages/connect" class="link"><button class="connect">Connect</button></a>\n`;
        // return `        <button class="connect" onclick="window.open('${HOME}files/sub_pages/connect', 'Login', 'width=394,height=504');">Connect</button>\n`;
        // return `        <button class="connect" onclick="openLoginPopup()">Connect</button>\n`;
    } else {
        return `        <a href="${HOME}files/sub_pages/logout" class="link"><button class="connect">Log out</button></a>\n`;
    }
}

function writeBodyHeader(ID, HOME = "/", token = "") {
    var writeBodyHeader = "";
    // writeBodyHeader += add_login_page(HOME);
    writeBodyHeader += '    <HeaderContainer>\n';
    writeBodyHeader += '    <HeaderLeft>\n';
    writeBodyHeader += `        <button class="table_button" onclick = "animate_menu(\'table_of_contents\')"><img src="${HOME}files/img/assets/menu_button/menu_button_black.png"/></button>\n`;
    writeBodyHeader += `        <a class="link" href="${HOME}"><img class="homeIcon" src="${HOME}files/img/logo/favicon_256x256.png"/></a>\n`;
    writeBodyHeader += '    </HeaderLeft>\n';
    writeBodyHeader += '    <center class="HeaderCenter">\n';
    writeBodyHeader += '        <h1>Epytodo</h1>\n';
    writeBodyHeader += '    </center>\n';
    writeBodyHeader += '    <HeaderRight>\n';
    writeBodyHeader += which_auth_button(HOME, token);
    writeBodyHeader += '    </HeaderRight>\n';
    writeBodyHeader += '</HeaderContainer>\n';
    writeBodyHeader += '<div id="checkboxContainer">\n';
    writeBodyHeader += `    <input type="checkbox" id="darkOrLight" onclick="theme('darkOrLight','theme','${HOME}','files/css/boostrap/boostrap_dark.css','files/css/boostrap/bootstrap.css');">\n`;
    writeBodyHeader += '    <label for="darkOrLight">\n';
    writeBodyHeader += '        <div id="star">\n';
    writeBodyHeader += '            <div class="star" id="star-1">&starf;</div>\n';
    writeBodyHeader += '            <div class="star" id="star-2">&starf;</div>\n';
    writeBodyHeader += '        </div>\n';
    writeBodyHeader += '        <div id="moon"></div>\n';
    writeBodyHeader += '    </label>\n';
    writeBodyHeader += '</div>\n';
    document.getElementById(ID).innerHTML = writeBodyHeader;
}
