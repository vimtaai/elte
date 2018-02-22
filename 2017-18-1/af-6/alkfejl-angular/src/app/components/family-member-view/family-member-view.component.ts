import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyService } from '../../services/family.service';
import { ItemService } from '../../services/item.service';
import { FamilyMember } from '../../classes/family-member';
import { Item } from '../../classes/item';

@Component({
  selector: 'app-family-member-view',
  templateUrl: './family-member-view.component.html',
  styleUrls: ['./family-member-view.component.css'],
  providers: [FamilyService, ItemService]
})
export class FamilyMemberViewComponent implements OnInit {
  private familyMember: FamilyMember;
  private items: Item[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private familyService: FamilyService,
    private itemService: ItemService,
  ) { }
  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.familyService.getFamilyMember(id).subscribe((familyMember) => {
      this.familyMember = familyMember;
      this.itemService.getItemsByFamilyMember(familyMember).subscribe((items) => {
        this.items = items;
      })
    });
  }

}
