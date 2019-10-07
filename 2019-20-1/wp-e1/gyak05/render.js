export function render(root, state) {
  root.innerHTML = state.todos.map(renderTodo).join("\n");
}

function renderTodo(todo) {
  return `<li class="${todo.completed ? "completed" : ""}">
    <button data-id="${todo.id}">✅</button> ${todo.text}
  </li>`;
}