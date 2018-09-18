/* SEGÉDFÜGGVÉNYEK */

function $ (selector) {
  return document.querySelector(selector);
}

// const $ = s => document.querySelector(s);

/* ÁLLAPOTTÉR */

// const todoList = [];

/* UI GENERÁTOROK */

function genTodoList (todoList) {
  let html = '';
  for (const todo of todoList) {
    html += `<li>${todo}</li>`;
    // html += '<li>' + todo + '</li>';
  }
  return html;

  // return todoList.map(todo => `<li>${todo}</li>`).join('');
}

/* ESEMÉNYKEZELŐK */
function buttonClick () {
  const todoList = JSON.parse(localStorage.todoList || '[]');
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
  localStorage.todoList = JSON.stringify(todoList);
}
$('button').addEventListener('click', buttonClick);

/* PROGRAM INDUL */
$('ul').innerHTML = genTodoList(JSON.parse(localStorage.todoList || '[]'));