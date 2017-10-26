import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../classes/Item';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  @Output()
  public createItem: EventEmitter<Item> = new EventEmitter();

  public clickButton(name: string, count: number): void {
    this.createItem.emit(new Item(name, count));
  }

  constructor() { }

  ngOnInit() {
  }

}
