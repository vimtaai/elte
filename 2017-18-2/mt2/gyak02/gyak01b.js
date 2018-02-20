// $ segédfüggvény
function $(selector) {
    return document.querySelector(selector);
}

// Feldolgozó függvény (üzleti logika)

// Állapot
const todoList = [];

// Eseménykezelő függvény
function buttonClick() {
    // Beolvasás
    const todo = $('input[type=text]').value;
    // Feldolgozás
    todoList.push(todo);
    // Kiírás
    $('ul').innerHTML = genTodoList(todoList);
    $('input[type=text]').value = '';
    $('input[type=text]').focus();
}

// A gomb kattintás eseményéhez rendeljük a buttonClick függvényt
$('input[type=button]').addEventListener('click', buttonClick);

// HTML generátor
// function genTodoList(list) {
//     let html = '';
//     for (let todo of list) {
//         html += `<li>${todo}</li>`;
//     }
//     return html;
// }

const genTodoList = (list) =>
    list.map((todo) => `<li>${todo}</li>`).join('');