// SEGÉDFÜGGVÉNYEK
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// ADATOK ÉS FELDOLGOZÓK
let todos = [];

// ESEMÉNYKEZELŐK
//function buttonClick() {}
//function buttonClickHandler() {}
function clickButton() {
    // Beolvasás
    let todo = {
        text: $('#_todo').value,
        owner: $('#_owner').value,
        dueTo: $('#_due').value
    };
    // Feldolgozás
    todos.push(todo);
    // Kiírás
    $('tbody').innerHTML += genTodo(todo);
}
$('#_add').addEventListener('click', clickButton, false);

// HTML GENERÁTOROK
function genTodo(todo) {
    return `
        <tr>
            <td>${todo.text}</td>
            <td>${todo.owner}</td>
            <td>${todo.dueTo}</td>
        </tr>
    `;
}