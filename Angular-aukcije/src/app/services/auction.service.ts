import { Injectable } from '@angular/core';
import { Auction } from '../models/auction';
import { GetAuctionsService } from '../get-autions/get-auctions.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private data: Auction[] = [

  ];
  constructor(private getAuctionService:GetAuctionsService) {
    this.setAuctions();
   }
  getAuctionById(id: number): Auction {
    return this.getAll().find(auction => auction.id == id)!;
  }
 
  getAll(): Auction[] {
    return this.data;
  }
  setData(auctions: Auction[]) {
    this.data = auctions;
  }
  setAuctions() {
  

    this.getAuctionService.getAuctions().
      subscribe(response => {

        this.setData(response);


      }, error => { console.log(error); });

  

  
}
}
