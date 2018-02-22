import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.css'],
  providers: [TodoService]
})
export class TodoItemViewComponent implements OnInit {
  private todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe((todo) => {
      this.todo = todo as Todo
    });
  }

}
