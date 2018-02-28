// segédfüggvények
function $(selector) {
  return document.querySelector(selector);
}

function delegate(parent, selector, type, handler) {
  function delegatedFunction(event) {
    let target = event.target;
    if (target.matches(`${parent} ${selector}, ${parent} ${selector} *`)) {
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      handler.call(target, event);
    }
  }

  $(parent).addEventListener(type, delegatedFunction);
}

// feldolgozó függvény (üzleti logika)

// állapot
const todoList = [];

// eseménykezelő függvény
function buttonClick() {
  const todo = $('input[type=text]').value;
  todoList.push({
    text: todo,
    disabled: false
  });
  todoList.sort((a, b) => a.text < b.text ? -1 : 1);
  $('input[type=text]').value = '';
  $('input[type=text]').focus();
  renderUI();
}

$('input[type=button]').addEventListener('click', buttonClick);

function textKeydown(event) {
  // console.log(event);
  if (event.key == 'Enter') {
    $('input[type=button]').click();
  }
}

$('input[type=text]').addEventListener('keydown', textKeydown);

function todoRightClick(event) {
  //console.log(event);
  event.preventDefault();
  //this.className = 'disabled';
  const id = this.getAttribute('data-id');
  todoList[id].disabled = !todoList[id].disabled;
  renderUI();
}

delegate('ul', 'li', 'contextmenu', todoRightClick);
//$('li').addEventListener('contextmenu', textRightClick);

// HTML genererátor
function renderUI() {
  $('ul').innerHTML = genTodoList(todoList);
}

function genTodoList(list) {
  let html = '';
  //list.sort((a, b) => a.disabled ? 1 : -1);
  let ready = Array.from(list.keys()).filter((i) => list[i].disabled);
  let notReady = Array.from(list.keys()).filter((i) => !list[i].disabled);

  for (let i of notReady) {
    const todo = list[i];
    html += `
      <li${todo.disabled ? ' class="disabled"' : ''}
          data-id="${i}">
        ${todo.text}
      </li>
    `;
  }

  html += `<hr>`;

  for (let i of ready) {
    const todo = list[i];
    html += `
      <li${todo.disabled ? ' class="disabled"' : ''}
          data-id="${i}">
        ${todo.text}
      </li>
    `;
  }

  // for (let i = 0; i < list.length; i++) {
  //   const todo = list[i];
  //   html += `
  //     <li${todo.disabled ? ' class="disabled"' : ''}
  //         data-id="${i}">
  //       ${todo.text}
  //     </li>
  //   `;
  // }
  return html;
}