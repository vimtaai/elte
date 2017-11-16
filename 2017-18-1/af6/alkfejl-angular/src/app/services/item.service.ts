import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../classes/item';
import { Observable } from 'rxjs/Observable';
import { api } from '../config/api';

@Injectable()
export class ItemService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getItems(): Observable<Item[]> {
    return this.httpClient.get(api + 'items');
  }

  public addItem(item: Item): Observable<any> {
    return this.httpClient.post(api + 'items', item);
  }

}
