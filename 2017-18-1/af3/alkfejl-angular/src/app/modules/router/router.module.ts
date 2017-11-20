import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { TodoItemViewComponent } from '../../components/todo-item-view/todo-item-view.component';
import { TodoListViewComponent } from '../../components/todo-list-view/todo-list-view.component';
import { UserListViewComponent } from '../../components/user-list-view/user-list-view.component';
import { UserItemViewComponent } from '../../components/user-item-view/user-item-view.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListViewComponent
  },
  {
    path: 'todo/:id',
    component: TodoItemViewComponent
  },
  {
    path: 'users',
    component: UserListViewComponent
  },
  {
    path: 'user/:id',
    component: UserItemViewComponent
  }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }
