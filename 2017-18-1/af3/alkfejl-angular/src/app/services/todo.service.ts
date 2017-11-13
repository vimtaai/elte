import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {
  private static api: string = 'http://localhost:4200/api/todos';

  constructor(
    private http: HttpClient
  ) { }

  public getTodos(): Observable<Todo[]> {
    //return TodoService._data;
    let todoStream = this.http.get(TodoService.api);
    return todoStream;
  }

  public getTodo(id: number): Observable<Todo> {
    //return TodoService._data.find((todo) => todo.id === id);
    let todoStream = this.http.get(TodoService.api + '/' + id);
    return todoStream;
  }

  public delTodoById(id: number) {
    //let idx: number = TodoService._data.findIndex((todo) => todo.id === id);
    //TodoService._data.splice(idx, 1);
  }

  public delTodo(todo: Todo) {
    //this.delTodoById(todo.id);
  }
}
