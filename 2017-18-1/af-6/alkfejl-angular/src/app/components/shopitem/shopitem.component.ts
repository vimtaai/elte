import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../classes/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css'],
  providers: [ItemService]
})
export class ShopitemComponent implements OnInit {
  @Input()
  public item: Item;

  public countChange(amount: number): void {
    this.item.count += amount;
    this.itemService.updateItem(this.item).subscribe();
  }

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    
   }

}
