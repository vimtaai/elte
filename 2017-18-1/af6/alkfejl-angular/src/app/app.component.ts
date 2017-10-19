import { Component } from '@angular/core';
import { Item } from './classes/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _data: any[] = [
    new Item('tej', 1),
    new Item('kenyer', 2),
    new Item('tejföl', 1)
  ];

  public clickAdd(itemName: string, itemCount: number): void {
    this._data.push(new Item(itemName, itemCount));
  }
}
