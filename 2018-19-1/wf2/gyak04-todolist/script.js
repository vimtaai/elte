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

function dragStart(e) {
  const li = e.delegatedTarget;
  li.classList.add('dragged');
  // const copy = document.createElement('li');
  // copy.innerHTML = li.innerHTML;
  const copy = li.cloneNode(true);
  copy.style.position = 'absolute';
  // getComputedStyle(copy).getPropertyValue('background-color')
  copy.style.top = li.getBoundingClientRect().top + 'px';
  copy.style.left = li.getBoundingClientRect().left + 'px';
  copy.style.width = li.getBoundingClientRect().width + 'px';
  copy.classList.add('dragging');
  $('#todolist').appendChild(copy);
  console.log(copy);
}
delegate($('ul'), 'pointerdown', 'li', dragStart);

function dragMove(e) {
  e.preventDefault();
  const copy = e.delegatedTarget;
  const top = parseFloat(copy.style.top.substring(0, copy.style.top.length - 2));
  const left = parseFloat(copy.style.left.substring(0, copy.style.left.length - 2));
  copy.style.top = (top + e.movementY) + 'px';
  copy.style.left = (left + e.movementX) + 'px';
  //console.log(copy);
}
delegate($('#todolist'), 'pointermove', 'li.dragging', dragMove);

function dragEnd(e) {
  const copy = e.delegatedTarget;
  const top = parseFloat(copy.style.top.substring(0, copy.style.top.length - 2));
  const left = parseFloat(copy.style.left.substring(0, copy.style.left.length - 2));
  const liList = $('ul').childNodes;

  let nextLi;
  for (const li of liList) {
    if (li.id !== copy.id) {
      const liTop = li.getBoundingClientRect().top;
      if (liTop > top) {
        nextLi = li;
        break;
      }
    }
  }

  copy.classList.remove('dragging');
  copy.style.position = 'relative';
  copy.style.top = '';
  copy.style.left = '';

  $('ul').removeChild($('.dragged'));
  if (nextLi !== undefined) { // Ha találtam nagyobbat
    $('ul').insertBefore(copy, nextLi);
  } else {
    $('ul').appendChild(copy);
  }

}
delegate($('#todolist'), 'pointerup', 'li.dragging', dragEnd);
