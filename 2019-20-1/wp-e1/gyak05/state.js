import { Todo } from "./todo.js";

class State {
  todos = [];

  addTodo(text) {
    this.todos.push(new Todo(text));
  }
}

export const state = new State();