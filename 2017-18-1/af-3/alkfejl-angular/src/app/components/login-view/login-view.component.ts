import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
})
export class LoginViewComponent implements OnInit {
  private error: boolean;
  private from: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.from = this.activatedRoute.snapshot.queryParamMap.get('from');
  }

  private tryLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe((user) => {
      console.log(user); 
      this.authService.setUser(user as User);
      if (this.from) {
        this.router.navigate(['/' + this.from])
      } else {
        this.router.navigate(['/']);
      }
    }, (err) => {
      if (err.status === 403) {
        this.error = true;
      }
    });
  }

}
