import { Component, OnInit } from '@angular/core';
import { Item } from '../../classes/Item';
import { FamilyMember } from '../../classes/family-member';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css'],
  providers: [FamilyService]
})
export class ShopViewComponent implements OnInit {
  private _family: FamilyMember[];
  public _data: Item[];

  public addItem(item: Item): void {
    this._data.push(item);
  }

  public changeItemCount({id, amount}: any): void {
    this._data[id].changeCount(amount);
    console.log(this._data);
  }
  constructor(
    private FamilyService: FamilyService
  ) { }

  ngOnInit() {
    this._family = this.FamilyService.family;
    this._data = [
      new Item('tej', 1, this._family[0]),
      new Item('kenyér', 2, this._family[0]),
      new Item('tejföl', 1, this._family[0])
    ];
  }

}
