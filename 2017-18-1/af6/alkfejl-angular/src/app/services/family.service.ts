import { Injectable } from '@angular/core';
import { FamilyMember } from '../classes/family-member';

@Injectable()
export class FamilyService {
  public _family: FamilyMember[] = [
    new FamilyMember('Kata'),
    new FamilyMember('Pisti')
  ];

  public get family(): FamilyMember[] {
    return this._family;
  }
}
