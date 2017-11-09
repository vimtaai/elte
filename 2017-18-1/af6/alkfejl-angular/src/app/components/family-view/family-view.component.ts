import { Component, OnInit } from '@angular/core';
import { FamilyMember } from '../../classes/family-member';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-family-view',
  templateUrl: './family-view.component.html',
  styleUrls: ['./family-view.component.css'],
  providers: [FamilyService]
})
export class FamilyViewComponent implements OnInit {
  public _family: FamilyMember[];

  constructor(private FamilyService: FamilyService) { }

  ngOnInit() {
    this._family = this.FamilyService.family;
  }

}
