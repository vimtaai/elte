import { state } from './state.js';
import { App } from './app.js';
import { delegate } from './utils.js';

const root = document.querySelector("ul");

function handleLoad() {
  root.innerHTML = (new App(state.todos)).render();
}
window.addEventListener("load", handleLoad);

const input = document.querySelector("input[type=text]");
function handleKeyUp(event) {
  if (event.key !== "Enter") {
    return;
  }

  state.addTodo(input.value);
  input.value = "";
  root.innerHTML = (new App(state.todos)).render();
}
input.addEventListener("keyup", handleKeyUp);

function handleButtonClick() {
  const button = this;
  const todo = state.todos.find(t => t.id === button.dataset.id);
  todo.handleButtonClick();
  root.innerHTML = (new App(state.todos)).render();
}
delegate(root, "click", "button", handleButtonClick);





