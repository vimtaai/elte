import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user';

@Injectable()
export class AuthService {
  private static api: string = 'http://localhost:4200/api/auth';
  public static user: User;

  constructor(
    private http: HttpClient
  ) { }

  public logout(): void {    
    this.http.get(AuthService.api + '/logout').subscribe(() => {
      this.setUser(undefined);
    });
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post(AuthService.api + '/login', {
      email,
      password
    }) as Observable<User>;
  }

  public setUser(user: User) {
    AuthService.user = user;
  }

  public getUser(): User {
    return AuthService.user;
  }

  public syncLoginStatus(): void {
    this.http.get(AuthService.api + '/user').subscribe((user: User) => {
      if (user) {
        this.setUser(user);
      }
    });
  }

  public hasRole(role) {
    if (!this.getUser()) {
      return false;
    }
    return this.getUser().role == role;
  }
}
