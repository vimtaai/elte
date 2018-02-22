import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { TodoItemViewComponent } from '../../components/todo-item-view/todo-item-view.component';
import { TodoListViewComponent } from '../../components/todo-list-view/todo-list-view.component';
import { UserListViewComponent } from '../../components/user-list-view/user-list-view.component';
import { UserItemViewComponent } from '../../components/user-item-view/user-item-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import { RouteGuardService } from '../../services/route-guard.service';
import { AuthService } from '../../services/auth.service';

const routes: Routes = [
  { 
    path: '', 
    canActivateChild: [RouteGuardService],
    children: [
      { path: '', component: TodoListViewComponent },
      { path: 'todo/:id', component: TodoItemViewComponent },
      { path: 'users', component: UserListViewComponent, data: { roles: ['USER', 'ADMIN'] } },
      { path: 'user/:id', component: UserItemViewComponent, data: { roles: ['ADMIN'] } },
      { path: 'login', component: LoginViewComponent }
    ]
  }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: [],
  providers: [RouteGuardService, AuthService]
})
export class RouterModule { }
