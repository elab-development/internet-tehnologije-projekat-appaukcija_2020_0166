import { Injectable } from '@angular/core';
import { GetItemsService } from '../items/get-items.service';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Item } from '../models/item';
import { Bid } from '../models/bid';
import { GetBidsService } from '../get-bids/get-bids.service';
import { User } from '../models/user';
import { UsersService } from '../users/users.service';
import { UserItemService } from '../user-item/user-item.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private getAuctionsService:GetAuctionsService, private getItemService:GetItemsService,
    private getBidsService:GetBidsService,private getUserService:UsersService) { }
  getAuctions(): Observable<Auction[]> {
   return this.getAuctionsService.getAuctions();
  }
  getItems(): Observable<Item[]> {
    return this.getItemService.getItems();
   }
   getBids(): Observable<Bid[]> {
    return this.getBidsService.getBids();
   }
   getUsers(): Observable<User[]> {
    return this.getUserService.getUsers();
   }
   
}

