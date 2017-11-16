import { Component, OnInit } from '@angular/core';
import { Item } from '../../classes/Item';
import { FamilyMember } from '../../classes/family-member';
import { FamilyService } from '../../services/family.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css'],
  providers: [FamilyService, ItemService]
})
export class ShopViewComponent implements OnInit {
  private _family: FamilyMember[];
  private _data: Item[];

  public addItem(item: Item): void {
    this.itemService.addItem(item).subscribe();
  }

  public changeItemCount({id, amount}: any): void {
    this._data[id].changeCount(amount);
    console.log(this._data);
  }
  constructor(
    private familyService: FamilyService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.familyService.getFamily()
      .subscribe((family: FamilyMember[]) => {
        this._family = family;
      });
    this.itemService.getItems()
      .subscribe((items: Item[]) => {
        this._data = items;
      });
  }

}
