import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../classes/todo';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [AuthService]
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: Todo;

  @Output()
  public delTodo: EventEmitter<number> = new EventEmitter();

  public clickButton($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.delTodo.emit(this.todo.id);
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
