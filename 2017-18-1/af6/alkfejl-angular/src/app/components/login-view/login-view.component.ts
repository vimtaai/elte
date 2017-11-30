import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
})
export class LoginViewComponent implements OnInit {
  private error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private tryLogin(email: string, password: string) {
    this.authService.login(email, password).subscribe((success: boolean) => {
      if (success) {
        this.router.navigate(['']);
      } else {
        this.error = 'Hibás felhasnzálónév vagy jelszó';
      }
    });
  }

}
