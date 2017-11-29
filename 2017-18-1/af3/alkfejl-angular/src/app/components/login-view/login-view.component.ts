import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
})
export class LoginViewComponent implements OnInit {
  private error: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private tryLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe((user) => {
      console.log(user); 
      this.authService.setUser(user as User);
      this.router.navigate(['/']);
    }, (err) => {
      if (err.status === 403) {
        this.error = true;
      }
    });
  }

}
