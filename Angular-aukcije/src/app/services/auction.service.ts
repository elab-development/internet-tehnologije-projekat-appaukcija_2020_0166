import { Injectable } from '@angular/core';
import { Auction } from '../models/auction';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private data: Auction[] = [

  ];
  constructor(private getAuctionService:GetAuctionsService) {
  
   }
  getAuctionById(id: number): Auction {
    return this.getAll().find(auction => auction.id == id)!;
  }
  getAuctionIdByItemId(item_id: number): number {
    let auction = this.data.filter(e=>e.item_id === item_id)[0];
    return auction.id;
  }
 
  getAll(): Auction[] {
    return this.data;
  }
  setData(auctions: Auction[]) {
    this.data = auctions;
  }

getItemIdByAuctionId(auction_id:number): number {
  let auction = this.data.filter(e=>e.id === auction_id)[0];

  return auction.item_id;
 }
}
