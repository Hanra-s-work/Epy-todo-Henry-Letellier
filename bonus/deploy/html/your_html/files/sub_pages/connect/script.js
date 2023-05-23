// reference : https://codepen.io/Hamza_Elkotp/pen/OJNXZaM

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

async function log_user_in() {
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;
    const response = await query.login(email, password);
    if (response != "success") {
        document.getElementById("login_error_message").innerHTML = response;
    } else {
        redirect_user();
    }
}

async function register_user() {
    const email = document.getElementById("remail").value;
    const password = document.getElementById("rpassword").value;
    const firstname = document.getElementById("rfirstname").value;
    const name = document.getElementById("rname").value;
    const response = await query.register(firstname, name, email, password);
    if (response != "success") {
        document.getElementById("registration_error_message").innerHTML = response;
    } else {
        redirect_user();
    }
}

function redirect_user() {
    console.log("Redirecting user");
    window.location.href = "/";
}
