import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { TodoItemViewComponent } from '../../components/todo-item-view/todo-item-view.component';
import { TodoListViewComponent } from '../../components/todo-list-view/todo-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListViewComponent
  },
  {
    path: 'todo/:id',
    component: TodoItemViewComponent
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
