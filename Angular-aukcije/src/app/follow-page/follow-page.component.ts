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
import { AuthServiceService } from '../authservice';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrl: './follow-page.component.css'
})
export class FollowPageComponent {
  follow!: Follow;
  boolean!: boolean
  auction!: Auction;
  auctions!:Auction[];
  items!:Item[];
  bids!: Bid[];
  userToken!: string;
  public user!: LoginResponse | null;
  constructor(private followService: FollowService, private matDialog: MatDialog, private route: ActivatedRoute, private getBidService: GetBidsService,
    private itemService: ItemsService, private auctionService: AuctionService, private authService: AuthServiceService) {

    this.setFollow();
    setInterval(() => this.updateFollow(), 1000);
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.bids = data['bidsData'];
      console.log(this.bids);
    })
    this.route.data.subscribe(data => {
      this.auctions = data['auctionsData'];
    })
    this.route.data.subscribe(data => {
      this.items = data['itemsData'];
    })
    this.itemService.setData(this.items);
    this.auctionService.setData(this.auctions);

    this.addItemsToFollow();

  }
  emptyFollow() {
    this.followService.getFollow().items = [];
  }
  addItemsToFollow() {

    this.user = this.authService.getUser();
    if (this.user != null) {
      this.userToken = this.user.access_token;

      this.bids.forEach(element => {
        if (element.user_id === this.user?.user_id) {
          this.auction = this.auctionService.getAuctionById(element.auction_id);

          this.followService.addToFollow(this.itemService.getItemsByAuction(this.auction));
        }

      });

    }

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
        element.gotov = true;


      }
      else {
        element.gotov = false;
      }
    });
  }

}
