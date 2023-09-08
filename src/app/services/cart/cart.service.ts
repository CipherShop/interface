import { Injectable } from '@angular/core';
import { IItem } from 'src/app/models/item.object';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemEmitter: ReplaySubject<IItem> = new ReplaySubject<IItem>();

  constructor() { }

  addItem(item: IItem): void {
    this.itemEmitter.next(item);
  }

}
