/* SEGÉDFÜGGVÉNYEK */

function $ (selector) {
  return document.querySelector(selector);
}

function delegate (parent, type, selector, fn) {
  function delegatedFunction(e) {
    if (e.target.matches(`${selector},${selector} *`)) {
      let target = e.target;
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      e.delegatedTarget = target;
      return fn(e);
      // vagy
      return fn.call(target, e);
    }
  }

  parent.addEventListener(type, delegatedFunction, false);
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
    html += `<li id="_${todoList.indexOf(todo)}">
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
  // console.log(todoList);
  $('ul').innerHTML = genTodoList(todoList);
  $('input').value = '';
  $('input').focus();

  setTodoList(todoList);
}
$('button').addEventListener('click', buttonClick);

function deleteButtonClick (e) {
  const todoList = getTodoList();

  const button = e.delegatedTarget;
  const li = button.parentNode;
  // console.log(li.firstChild.nodeValue.trim());
  const index = li.id.substring(1);
  todoList.splice(index, 1);

  $('ul').innerHTML = genTodoList(todoList);
  setTodoList(todoList);
}
delegate($('ul'), 'click', 'button', deleteButtonClick);

function inputKeyPress (e) {
  const key = e.code;
  // console.log(key);
  if (key !== 'Enter') {
    return;
  }

  // buttonClick();
  $('button').click();
}
$('input').addEventListener('keyup', inputKeyPress);

/* PROGRAM INDUL */
$('ul').innerHTML = genTodoList(getTodoList());