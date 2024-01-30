import { Injectable } from '@angular/core';
import { FollowItem } from '../models/follow-item';
import { Item } from '../models/item';
import { Follow } from '../models/follow';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
private follow: Follow=new Follow();
  constructor() { }
  addToFollow(item: Item): void {
    let followItem = this.follow.items.find(proizvod => proizvod.item.id===item.id )
    if (followItem) {
      this.changeQuantity(followItem, followItem.quantity + 1);
      return;
    }
    this.follow.items.push(new FollowItem(item));
  }
  removeFromFollow(itemId: number): void {
    this.follow.items =
      this.follow.items.filter(proizvod => proizvod.item.id != itemId);
  }


  changeQuantity(followItem: FollowItem, quantity: number) {
    followItem.quantity = quantity;
  }
  getFollow(): Follow {
    return this.follow;
  }
}
