import { Component } from '@angular/core';
import { Follow } from '../models/follow';
import { FollowService } from '../services/follow.service';
import { MatDialog } from '@angular/material/dialog';
import { FollowItem } from '../models/follow-item';
import { Bid } from '../models/bid';
import { LoginResponse } from '../user-login/login-response';
import { GetBidsService } from '../get-bids/get-bids.service';
import { ItemsService } from '../services/item.service';
import { Auction } from '../models/auction';
import { AuctionService } from '../services/auction.service';
import moment from 'moment';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrl: './follow-page.component.css'
})
export class FollowPageComponent {
follow!:Follow;
boolean!:boolean
auction!:Auction;
bids!: Bid[];
  userToken!: string;
  public user!: LoginResponse | null;
constructor(private followService: FollowService,private matDialog:MatDialog,private getBidService:GetBidsService,
  private itemService:ItemsService,private auctionService:AuctionService) {

  this.setFollow();
  setInterval(() => this.updateFollow(), 1000);
}
ngOnInit(){
 
  
    this.addItemsToFollow();
   
}
emptyFollow(){
  this.followService.getFollow().items = [];
}
addItemsToFollow(){
  
  this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
  this.userToken = this.user.access_token;
  this.getBidService.getBids(this.userToken).
  subscribe(response => {
    this.bids = response;
    this.bids.forEach(element => {
    if(element.user_id===this.user?.user_id){
      this.auction=this.auctionService.getAuctionById(element.auction_id);
      
      this.followService.addToFollow(this.itemService.getItemsByAuction(this.auction));
    }
  
    });

  }, error => { console.log(error); });
 
}
  setFollow() {
    this.follow = this.followService.getFollow();
  }
  removeFromFollow(followItem: FollowItem) {
    this.followService.removeFromFollow(followItem.item.id);
    this.setFollow();
  }
  updateFollow() {
 
    this.follow.items.forEach(element => {
      if (moment(element.item.preostaloVreme) <= moment()) {
      element.gotov=true;
      

      }
    });
  }

}
