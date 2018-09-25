/* SEGÉDFÜGGVÉNYEK */

function $ (selector) {
  return document.querySelector(selector);
}

function getTodoList() {
  return JSON.parse(localStorage.todoList || '[]');
}

function setTodoList(todoList) {
  return localStorage.todoList = JSON.stringify(todoList);
}

// const $ = s => document.querySelector(s);

/* ÁLLAPOTTÉR */

// const todoList = [];

/* UI GENERÁTOROK */

function genTodoList (todoList) {
  let html = '';
  for (const todo of todoList) {
    html += `<li>
      ${todo}
      <button><img src="images/deletemark.png" alt="Törlés"></button>
    </li>`;
    // html += '<li>' + todo + '</li>';
  }
  return html;

  // return todoList.map(todo => `<li>${todo}</li>`).join('');
}

/* ESEMÉNYKEZELŐK */
function buttonClick () {
  const todoList = getTodoList();

  // console.log('rám kattintottak');
  const todo = $('input').value;

  if (todoList.includes(todo)) {
    alert('Ilyen már van!');
    return;
  }

  todoList.push(todo);
  console.log(todoList);
  $('ul').innerHTML = genTodoList(todoList);
  $('input').value = '';
  $('input').focus();

  setTodoList(todoList);
}
$('button').addEventListener('click', buttonClick);

/* PROGRAM INDUL */
$('ul').innerHTML = genTodoList(getTodoList());