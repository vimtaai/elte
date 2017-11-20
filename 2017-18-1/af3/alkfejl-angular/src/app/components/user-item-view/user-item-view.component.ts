import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-item-view',
  templateUrl: './user-item-view.component.html',
  styleUrls: ['./user-item-view.component.css'],
  providers: [UserService]
})
export class UserItemViewComponent implements OnInit {
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
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

}
