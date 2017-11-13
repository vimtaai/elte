import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from './modules/router/router.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListViewComponent } from './components/todo-list-view/todo-list-view.component';
import { TodoItemViewComponent } from './components/todo-item-view/todo-item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListViewComponent,
    TodoItemViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
