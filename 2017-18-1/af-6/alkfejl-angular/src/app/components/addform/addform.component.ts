import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../classes/Item';
import { FamilyMember } from '../../classes/family-member';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  @Output()
  public createItem: EventEmitter<Item> = new EventEmitter();

  @Input()
  public family: FamilyMember[];

  public clickButton(name: string, 
                     count: number, 
                     memberId: number): void {
    const member = this.family.find((f) => f.id == memberId);
    this.createItem.emit(new Item(name, count, member));
  }

  constructor() { }

  ngOnInit() {
  }

}
