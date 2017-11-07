import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../classes/Item';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css']
})
export class ShopitemComponent implements OnInit {
  @Input()
  public item: Item;

  @Output()
  public countChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
