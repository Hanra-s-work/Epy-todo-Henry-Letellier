// script.js

// Variables to store the user's token and todos
let token = '';
let todos = [];

// Function to perform login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a request to the backend to authenticate the user
    // Replace the URL with your actual backend endpoint for login
    fetch(`${node_url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            // Store the returned token
            token = data.token;

            // Fetch todos for the authenticated user
            fetchTodos();

            // Hide the login form and show the todos
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('todos').style.display = 'block';
        })
        .catch(error => console.log(error));
}

// Function to fetch todos
function fetchTodos() {
    // Send a request to the backend to fetch todos
    // Replace the URL with your actual backend endpoint for fetching todos
    fetch(`${node_url}/user/todos`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            // Store the fetched todos
            todos = data.todos;

            // Display the todos on the webpage
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.textContent = todo.title;
                todoList.appendChild(listItem);
            });
        })
        .catch(error => console.log(error));
}

// Function to perform logout
function logout() {
    // Send a request to the backend to log out the user
    // Replace the URL with your actual backend endpoint for logout
    fetch(`${node_url}/logout`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(() => {
            // Clear the token and todos
            token = '';
            todos = [];

            // Hide the todos and show the login form
            document.getElementById('todos').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        })
        .catch(error => console.log(error));
}
