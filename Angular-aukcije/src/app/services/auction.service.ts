import { Injectable } from '@angular/core';
import { Auction } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor() { }
  getAuctionById(id: number): Auction {
    return this.getAll().find(auction => auction.id == id)!;
  }
  getAll(): Auction[] {
    return [
      {
      id:1,
      item_id:1,
      vreme_pocetka:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      vreme_zavrsetka:new Date(Date.now() + 8 * 24 * 60 * 60 * 1000)

      },
      {
        id:2,
        item_id:2,
        vreme_pocetka:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        vreme_zavrsetka:new Date(Date.now() + 8 * 24 * 60 * 60 * 1000)

      },
    ]
  }
}
