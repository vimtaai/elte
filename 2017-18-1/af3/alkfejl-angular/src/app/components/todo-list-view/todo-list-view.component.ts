import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css'],
  providers: [TodoService]
})
export class TodoListViewComponent implements OnInit {
  private todos: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos as Todo[];
    });
  }

  private delTodo(id: number): void {
    this.todoService.delTodoById(id).subscribe((todos) => {
      this.todos = todos as Todo[];
    });
  }
}
