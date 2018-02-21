// $ segédfüggvény
function $(selector) {
    return document.querySelector(selector);
}

// feldolgozó függvény (üzleti logika)

// állapot
const todoList = [];

// eseménykezelő függvény
function buttonClick() {
    const text = $('input[type=text]').value;
    todoList.push(text); // kellene előfeldolgozni
    todoList.sort();
    $('ul').innerHTML = genTodoList(todoList);
    $('input[type=text]').value = '';
    $('input[type=text]').focus();
}

$('input[type=button]').addEventListener('click', buttonClick);

// HTML genererátor
function genTodoList(list) {
    let html = '';
    for (let todo of list) {
        html += `<li>${todo}</li>`;
    }
    return html;
}