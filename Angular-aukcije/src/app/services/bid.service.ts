import { Injectable } from '@angular/core';
import { Bid } from '../models/bid';
@Injectable({
  providedIn: 'root'
})
export class BidService {
  private data = [
    {
      id: 1,
      iznos: 120,
      user_id: 2,
      auction_id: 1
    },
    {
      id: 2,
      iznos: 180,
      user_id: 3,
      auction_id: 1
    },
    {
      id: 3,
      iznos: 200,
      user_id: 2,
      auction_id: 1
    },
    {
      id: 4,
      iznos: 120,
      user_id: 2,
      auction_id: 2
    },
    {
      id: 5,
      iznos: 160,
      user_id: 3,
      auction_id: 2
    }
  ];

  getItemById(id: number): Bid {
    return this.getAll().find(bid => bid.id == id)!;
  }


  update(bid: Bid): Bid {
    let bidToUpdate = this.data.find(e => e.id == bid.id)!;
    bidToUpdate.auction_id = bid.auction_id;
    bidToUpdate.id = bid.id;
    bidToUpdate.iznos = bid.iznos;
    bidToUpdate.user_id = bid.user_id;
    return bidToUpdate;
  }

  getAll(): Bid[] {
    return this.data;
  }
}
