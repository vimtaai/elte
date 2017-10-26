import { Component } from '@angular/core';
import { Item } from './classes/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _data: Item[] = [
    new Item('tej', 1),
    new Item('kenyer', 2),
    new Item('tejföl', 1)
  ];

  public addItem(item: Item): void {
    this._data.push(item);
  }

  public changeItemCount({id, amount}: any): void {
    this._data[id].changeCount(amount);
    console.log(this._data);
  }
}
