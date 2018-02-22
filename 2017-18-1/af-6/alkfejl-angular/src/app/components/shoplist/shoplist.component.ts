import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../classes/Item';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {
  @Input()
  public items: Item[];

  constructor() { }

  ngOnInit() {  }

}
