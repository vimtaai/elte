import { Component, OnInit } from '@angular/core';
import { Todo } from './classes/todo';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  private user: User;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.syncLoginStatus();
  }

  private logout() {
    this.authService.logout().subscribe();
  }

  public title: string = 'Todo Alkalmazás';
}
