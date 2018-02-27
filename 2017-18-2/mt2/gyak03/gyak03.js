// $ segédfüggvény
function $(selector) {
    return document.querySelector(selector);
}

function delegate(parent, type, selector, fn) {
    function delegatedFunction(e) {
        if (e.target.matches(`${selector},${selector} *`)) {
            let target = e.target;
            while (!target.matches(selector)) {
                target = target.parentNode;
            }
            e.delegatedTarget = target;
            return fn(e);
        }
    }
    parent.addEventListener(type, delegatedFunction, false);
}

// Feldolgozó függvény (üzleti logika)

// Állapot
const todoList = [];

// Eseménykezelő függvény
function buttonClick() {
    // Beolvasás
    const todo = $('input[type=text]').value;
    // Feldolgozás
    todoList.push({
        text: todo,
        ready: false
    });
    // Kiírás
    $('ul').innerHTML = genTodoList(todoList);
    $('input[type=text]').value = '';
    $('input[type=text]').focus();
}
// A gomb kattintás eseményéhez rendeljük a buttonClick függvényt
$('input[type=button]').addEventListener('click', buttonClick);

function textKeydown(event) {
    //console.log(event);
    if (event.key == 'Enter') {
        $('input[type=button]').click();
    }
}
$('input[type=text]').addEventListener('keydown', textKeydown);

function todoRightClick(event) {
    event.preventDefault();
    const li = event.delegatedTarget;
    //li.classList.toggle('disabled');
    const index = li.getAttribute('data-index');
    // Változtatom az állapotot
    todoList[index].ready = !todoList[index].ready;
    // Újragenerálom a felhasználói felületet
    $('ul').innerHTML = genTodoList(todoList);
}
delegate($('ul'), 'contextmenu', 'li', todoRightClick);

// HTML generátor
// function genTodoList(list) {
//     let html = '';
//     for (let todo of list) {
//         html += `<li>${todo}</li>`;
//     }
//     return html;
// }

const genTodoList = (list) =>
    list.map((todo, index) => 
        `<li${todo.ready ? ' class="disabled"' : ''}
            data-index="${index}">
            ${todo.text}
        </li>`).join('');