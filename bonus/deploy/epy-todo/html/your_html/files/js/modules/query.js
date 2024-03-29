// constants
var node_url = "https://backend-epy-todo.pingpal.news";
let token_cookie_name = "login_token"
let username_cookie_name = "username";
let user_firstname_cookie_name = "user_firstname";
let user_email_cookie_name = "user_email";
let user_id_cookie_name = "user_id";

// Function get user info
async function getUserInfo() {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ('id' in data) {
        cookie.createCookie(user_id_cookie_name, data.id, "", "/");
        cookie.createCookie(username_cookie_name, data.name, "", "/");
        cookie.createCookie(user_firstname_cookie_name, data.firstname, "", "/");
        cookie.createCookie(user_email_cookie_name, data.email, "", "/");
        return "success";
    } else {
        return data.msg;
    }
}

// Function register
async function register(firstname, name, email, password) {
    // Send a request to the backend to register the user
    // Replace the URL with your actual backend endpoint for registration
    const response = await fetch(`${node_url}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password, "firstname": firstname, "name": name })
    });
    const data = await response.json();
    if (data.token != '' && data.token != undefined) {
        cookie.createCookie(token_cookie_name, data.token, "", "/");
        await getUserInfo();
        return "success";
    }
    return data.msg;
}

// Function to perform login
async function login(email, password) {
    // Send a request to the backend to authenticate the user
    // Replace the URL with your actual backend endpoint for login
    const response = await fetch(`${node_url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password })
    });
    const data = await response.json();
    if (data.token != '' && data.token != undefined) {
        cookie.createCookie(token_cookie_name, data.token, "", "/");
        await getUserInfo();
        return "success";
    }
    return data.msg;
}


// Function get todos
async function getTodos(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/todos`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTable(DEST_ID, data);
    return "Todos sucessfully fetched !";
}

// Function get todos via id
async function getTodosViaID(DEST_ID, TODO_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/todos/${TODO_ID}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            return "<h1>You are not logged in !</h1>";
        }
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    try {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            createTable.createHTMLTableFromJSON(DEST_ID, data);
        }
    } catch (err) {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            debugger;
            document.getElementById(DEST_ID).innerHTML += data.msg;
        }
        return data.msg;
    }
    return data;
}


// Function post todos via id
async function postTodos(DEST_ID, title = "", description = "", due_time = "", status = "") {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/todos`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${login_token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ "title": title, "description": description, "due_time": due_time, "status": status })
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return `Successfully created: ${data[data.length - 1].id} - ${data[data.length - 1].title}`;
}

// Function put todos via id
async function putTodosViaID(DEST_ID, todo_id = "", title = "", description = "", due_time = "", status = "", user_id = "") {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/todos/${todo_id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${login_token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "due_time": due_time,
            "status": status,
            "user_id": user_id
        })
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return `Successfully updated: ${title}`;
}

// Function delete todos via id
async function deleteTodosViaID(DEST_ID, todo_id) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/todos/${todo_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return data.msg;
}


// Function to get user
async function getUser(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    console.log(`data = ${JSON.stringify(data)}`);
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return data.msg;
}

// Function get user todos
async function getUserTodos(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/user/todos`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTable(DEST_ID, data);
    return data.msg;
}

// Function get users by id
async function getUsersByID(DEST_ID, user_id) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/users/${user_id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            return "<h1>You are not logged in !</h1>";
        }
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    try {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            createTable.createHTMLTableFromJSON(DEST_ID, data);
        }
    } catch (err) {
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            debugger;
            document.getElementById(DEST_ID).innerHTML += data.msg;
        }
        return data.msg;
    }
    return data;
}

// Function get users by email
async function getUsersByEmail(DEST_ID, user_email) {
    console.log(`In getUserByEmail`);
    var login_token = cookie.readCookie(token_cookie_name);
    console.log(`login token = ${login_token}`);
    const response = await fetch(`${node_url}/users/${user_email}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    console.log(`Response sent`);
    const data = await response.json();
    console.log(`response = ${JSON.stringify(data)}`);
    if (("msg" in data) === true && data.msg === "User not logged in") {
        console.log(`In if 1`);
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            console.log(`In if 2`);
            return "<h1>You are not logged in !</h1>";
        }
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    try {
        console.log(`In try`);
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            console.log(`In if 1`);
            createTable.createHTMLTableFromJSON(DEST_ID, data);
        }
    } catch (err) {
        console.log(`In catch`);
        if (DEST_ID != undefined && DEST_ID.length > 0) {
            console.log(`In if 1`);
            document.getElementById(DEST_ID).innerHTML += data.msg;
        }
        return data.msg;
    }
    return data.id;
}

// Function put users via id
async function putUsersViaID(DEST_ID, user_id = "", email = "", password = "", name = "", firstname = "") {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/users/${user_id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${login_token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password, "name": name, "firstname": firstname })
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return `Successfully updated user: ${user_id} - ${email}`;
}

// Function delete users via id
async function deleteUsersViaID(DEST_ID, user_id) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/users/${user_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    console.log(`data = ${data}`);
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return data;
}

// Function get home
async function getHome(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    document.getElementById(DEST_ID).innerHTML = `<b>${data.msg}</b>`;
    return data.msg;
}

// Function get stop
async function getStop(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/stop`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    document.getElementById(DEST_ID).innerHTML = `<b>${data.msg}</b>`;
    return data.msg;
}

// Function get logout
async function getLogout() {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/logout`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    console.log(`data = ${JSON.stringify(data)}`);
    if (data.msg === "You are logged out") {
        cookie.removeCookie(token_cookie_name);
        cookie.removeCookie(username_cookie_name);
        cookie.removeCookie(user_firstname_cookie_name);
        cookie.removeCookie(user_email_cookie_name);
        cookie.removeCookie(user_id_cookie_name);
    }
    return data.msg;
}

// Function get override
async function getOverride(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/override`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTableFromJSON(DEST_ID, data);
    return data.msg;
}

// Function get reflet-d-acide
async function getRefletDAcide(DEST_ID) {
    var login_token = cookie.readCookie(token_cookie_name);
    const response = await fetch(`${node_url}/reflet-d-acide`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${login_token}`
        }
    });
    const data = await response.json();
    if ("msg" in data && data.msg === "User not logged in") {
        document.getElementById(DEST_ID).innerHTML = "<h1>You are not logged in !</h1>";
        return data.msg;
    }
    createTable.createHTMLTable(DEST_ID, data.msg);
    return data.msg;
}

// Function to perform logout
async function logout() {
    return await getLogout();
}


export {
    register,
    login,
    getTodos,
    getTodosViaID,
    postTodos,
    putTodosViaID,
    deleteTodosViaID,
    getUser,
    getUserTodos,
    getUsersByID,
    getUsersByEmail,
    putUsersViaID,
    deleteUsersViaID,
    getHome,
    getStop,
    getLogout,
    getOverride,
    getRefletDAcide,
    logout,
    node_url,
    token_cookie_name,
    username_cookie_name,
    user_firstname_cookie_name,
    user_email_cookie_name,
    user_id_cookie_name
}

window.query = {
    register,
    login,
    getTodos,
    getTodosViaID,
    postTodos,
    putTodosViaID,
    deleteTodosViaID,
    getUser,
    getUserTodos,
    getUsersByID,
    getUsersByEmail,
    putUsersViaID,
    deleteUsersViaID,
    getHome,
    getStop,
    getLogout,
    getOverride,
    getRefletDAcide,
    logout,
    node_url,
    token_cookie_name,
    username_cookie_name,
    user_firstname_cookie_name,
    user_email_cookie_name,
    user_id_cookie_name
}
