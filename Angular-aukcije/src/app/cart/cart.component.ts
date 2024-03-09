import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { LoginResponse } from '../user-login/login-response';
import { GetBidsService } from '../get-bids/get-bids.service';
import { Bid } from '../models/bid';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Auction } from '../models/auction';
import moment from 'moment';
import { BidService } from '../services/bid.service';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/item.service';
import { AuctionService } from '../services/auction.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  auctions!: Auction[];
  auctionsFinish: Auction[] = [];
  auctionsFinishMax: Auction[] = [];
  cart!: Cart;
  maxBid!:Bid;
  bids: Bid[] = [];
  bidsFinish: Bid[]=[];
  bidsFinishMax: Bid[]=[];
  userToken!: string;
  public user!: LoginResponse | null;
  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService, private getAuctionService: GetAuctionsService,
    private bidsService: BidService, private getBidsService: GetBidsService,private itemService:ItemsService
    ,private auctionService:AuctionService) {
    this.setCart();
  }
  ngOnInit(): void {

    this.setAuctions();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
  setAuctions() {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse
    this.userToken = this.user.access_token;
    this.getAuctionService.getAuctions().
      subscribe(response => {
        this.auctions = response;
        this.bids = this.bidsService.data;
        this.auctions.forEach(element => {
          if (moment(element.vreme_zavrsetka) <= moment()) {
            this.auctionsFinish.push(element);
          }

        })
        console.log(this.auctionsFinish);
      this.auctionsFinish.forEach(element => {
        this.BidsFinish(element.id);
       
      });
       console.log(this.bidsFinish); 
       this.auctionsFinish.forEach(element => {
        this.MaxBids(element.id);
       });
       console.log(this.bidsFinishMax);
       this.bidsFinishMax.forEach(element => {
        if(element.user_id===this.user?.user_id){
          this.cartService.addToCart(this.itemService.getItemById(this.auctionService.getItemIdByAuctionId(element.auction_id)));
        }
       });
      }, error => { console.log(error); });


  }

BidsFinish(auctionId:number){
  this.bids.forEach(element => {
    if(element.auction_id==auctionId){
      this.bidsFinish.push(element);
    }
  });
}
MaxBids(auction_id:number){
  let maxIznos=0;
  
  this.bidsFinish.forEach(element => {
    if(element.auction_id==auction_id){
      if(element.iznos>=maxIznos){
        maxIznos=element.iznos;
        this.maxBid=element;
      }
    }
    else{
      return;
    }
  });

  if (!this.bidsFinishMax.some(element => element.id === this.maxBid.id)) {
    this.bidsFinishMax.push(this.maxBid);
  }
  
}

}
