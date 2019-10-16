import { Todo } from "./todo.js";

export class App {
  todos = [];

  constructor(todos) {
    this.todos = todos;
  }

  render() {
    return this.todos.map(todo => todo.render()).join("\n");
  }
}