import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { User } from '../classes/user';
import { Todo } from '../classes/todo';

@Injectable()
export class UserService {
  private static api: string = 'http://localhost:4200/api/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.http.get(UserService.api);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get(UserService.api + '/' + id);
  }

  public delUserById(id: number): Observable<any> {
    return this.http.delete(UserService.api + '/' + id);
  }

  public getTodosByUser(user: User): Observable<Todo[]> {
    return this.http.get('http://localhost:4200/api/todos/user/' + user.id);
  }
}
