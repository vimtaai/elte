import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'AlmaKorte';
  public _data: string[] = [
    "Todo 1",
    "Todo 2",
    "Todo 3"
  ];
  
  public delTodo(todo: string): void {
    console.log('del todo', todo);
    const idx: number = this._data.indexOf(todo);
    this._data = this._data.splice(idx, 1);
  }
}
