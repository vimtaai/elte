import { Component, OnInit } from '@angular/core';
import { Item } from '../../classes/Item';
import { FamilyMember } from '../../classes/family-member';
import { FamilyService } from '../../services/family.service';
import { ItemService } from '../../services/item.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css'],
  providers: [FamilyService, ItemService, AuthService]
})
export class ShopViewComponent implements OnInit {
  private _family: FamilyMember[];
  private _data: Item[];

  public addItem(item: Item): void {
    this.itemService.addItem(item).subscribe(() => {
      this.itemService.getItems().subscribe((items: Item[]) => {
        this._data = items;
      });
    });
  }

  constructor(
    private familyService: FamilyService,
    private itemService: ItemService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe((family: FamilyMember[]) => {
      this._family = family;
    });
    this.itemService.getItems().subscribe((items: Item[]) => {
      this._data = items;
    });
  }

}
