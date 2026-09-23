// https://github.com/vimtaai/elte

// References
const inputElement = document.querySelector("form input");
const buttonElement = document.querySelector("form button");
const todoListElement = document.querySelector("#todoList");

// State
const todoList = [
  "Learn HTML",
  "Learn JS",
  "Learn CSS"
];

// Rendering
function renderTodoItem(todoItem) {
  return `<article>${todoItem}</article>`;
}

function renderTodoList(todoList) {
  return todoList.map(renderTodoItem).join("\n");
}

// Event handlers
function onAddButtonClick() {
  const newTodoItem = inputElement.value;
  todoList.push(newTodoItem);
  todoListElement.innerHTML = renderTodoList(todoList);
  inputElement.value = "";
}

buttonElement.addEventListener("click", onAddButtonClick);

// Setup
todoListElement.innerHTML = renderTodoList(todoList);