import { state } from './state.js';
import { render } from './render.js';
import { delegate } from './utils.js';

const root = document.querySelector("ul");
function handleLoad() {
  render(root, state);
}
window.addEventListener("load", handleLoad);

const input = document.querySelector("input[type=text]");
function handleKeyUp(event) {
  if (event.key !== "Enter") {
    return;
  }

  state.addTodo(input.value);
  input.value = "";
  render(root, state);
}
input.addEventListener("keyup", handleKeyUp);

function handleButtonClick() {
  const button = this;
  const todo = state.todos.find(t => t.id === button.dataset.id);
  console.log(todo);
  todo.toggleCompleted();
  render(root, state);
}
delegate(root, "click", "button", handleButtonClick);





