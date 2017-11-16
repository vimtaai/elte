import { Injectable } from '@angular/core';
import { FamilyMember } from '../classes/family-member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { api } from '../config/api';

@Injectable()
export class FamilyService {
  
  public constructor(
    private httpClient: HttpClient
  ) {}

  public getFamily(): Observable<FamilyMember[]> {
    return this.httpClient.get(api + 'family');
  }
}
