import { Injectable } from '@angular/core';
import { GetItemsService } from '../items/get-items.service';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private getAuctionsService:GetAuctionsService, private getItemService:GetItemsService) { }
  getAuctions(): Observable<Auction[]> {
   return this.getAuctionsService.getAuctions();
  }
  getItems(): Observable<Item[]> {
    return this.getItemService.getItems();
   }
}
