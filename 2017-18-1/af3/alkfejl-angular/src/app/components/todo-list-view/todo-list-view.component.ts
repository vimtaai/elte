import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public _data: Todo[] = [
    new Todo(1, "Todo 1"),
    new Todo(2, "Todo 2"),
    new Todo(3, "Todo 3")
  ];

  public delTodo(todo: Todo): void {
    console.log('del todo', todo);
    const idx: number = this._data.indexOf(todo);
    this._data.splice(idx, 1);
  }

  public delTodoByIndex(index: number): void {
    this._data.splice(index, 1);
  }

}
