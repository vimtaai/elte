// SEGÉDFÜGGVÉNYEK ///////////
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}

// ADATOK/FELDOLGOZÓK ////////
let todos = [];

// ESEMÉNYKEZELŐK ////////////
function clickButton() {
    // Beolvasás
    let todoTxt = $('#todoInput').value;
    // Feldolgozás
    todos.push(todoTxt);
    // Kiírás
    $('#todoList').innerHTML = TodoList(todos);
    // $('#todoList').innerHTML += TodoItem(todoTxt);
}
$('#addButton').addEventListener('click', clickButton, false);

// HTML GENERÁTOROK //////////
function TodoList(todoList /*TODO-k tömbje*/) {
    let html = '';
    for (let todo of todoList) {
        html += TodoItem(todo);
    }
    return html;
    //return todoList.map(todo => TodoItem(todo)).join('');
}

function TodoItem(todo /*1 db todo*/) {
    return `<li>${todo}</li>`;
}