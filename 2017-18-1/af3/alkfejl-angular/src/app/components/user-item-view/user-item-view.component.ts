import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-user-item-view',
  templateUrl: './user-item-view.component.html',
  styleUrls: ['./user-item-view.component.css'],
  providers: [UserService, TodoService]
})
export class UserItemViewComponent implements OnInit {
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => {
      this.user = user as User;
      this.userService.getTodosByUser(user).subscribe((todos) => {
        this.user.todos = todos;
      });
    });
  }

  private delTodo(id: number): void {
    this.todoService.delTodoById(id).subscribe((todos) => {
      this.user.todos = todos.filter(todo => todo.user.id === this.user.id) as Todo[];
    });
  }

}
