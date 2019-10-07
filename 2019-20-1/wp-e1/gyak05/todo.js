export class Todo {
  id = NaN;
  text = "";
  completed = false;

  constructor(text) {
    this.id = Date.now() + "" + Math.trunc(Math.random() * 10000);
    this.text = text;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}