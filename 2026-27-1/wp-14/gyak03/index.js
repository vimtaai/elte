// https://github.com/vimtaai/elte

// References
const inputElement = document.querySelector("form input");
const buttonElement = document.querySelector("form button");
const todoListElement = document.querySelector("#todoList");

// 
const state = {
  todoList: [
    { text: "Learn HTML", isSelected: false },
    { text: "Learn JS", isSelected: false },
    { text: "Learn CSS", isSelected: false },
  ],
  resetSelected() {
    for (const todoItem of this.todoList) {
      todoItem.isSelected = false;
    }
  },
  get selectedIndex() {
    return this.todoList.findIndex((todoItem) => todoItem.isSelected);
  }
};

// Rendering
function renderTodoItem(todoItem) {
  if (todoItem.isSelected) {
    return `<article><strong>${todoItem.text}</strong></article>`;
  }

  return `<article>${todoItem.text}</article>`;
}

function renderTodoList(state) {
  return state.todoList.map(renderTodoItem).join("\n");
}

// Event handlers
function onAddButtonClick(event) {
  console.log(event);
  const newTodoItem = inputElement.value;
  todoList.push(newTodoItem);
  todoListElement.innerHTML = renderTodoList(state);
  inputElement.value = "";
}

function onTodoItemClick(event) {
  console.log(event);
  const todoItemElement = event.target.closest("article");

  if (!todoListElement.contains(todoItemElement)) {
    return;
  }

  // todoItemElement.style.color = "red";
  // const todoItem = todoItemElement.innerText;
  // const todoItemIndex = todoList.indexOf(todoItem);

  const todoItemIndex = Array.from(todoListElement.children).indexOf(todoItemElement);
  const todoItem = state.todoList[todoItemIndex];
  console.log(state.todoList)
  console.log({ todoItemIndex, todoItem });

  if (todoItem.isSelected) {
    state.todoList.splice(todoItemIndex, 1);
  } else {
    state.resetSelected();
    todoItem.isSelected = true;
  }
  todoListElement.innerHTML = renderTodoList(state);
}

buttonElement.addEventListener("click", onAddButtonClick);
todoListElement.addEventListener("click", onTodoItemClick);

// Setup
todoListElement.innerHTML = renderTodoList(state);