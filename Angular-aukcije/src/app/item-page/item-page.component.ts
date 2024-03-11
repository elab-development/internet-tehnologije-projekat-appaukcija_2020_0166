import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { FollowService } from '../services/follow.service';
import { ContactComponent } from '../contact/contact.component';
import moment from 'moment';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CartService } from '../services/cart.service';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { LoginResponse } from '../user-login/login-response';
import { Auction } from '../models/auction';
import { UpdateTrenutnaCenaService } from '../update/update-trenutna-cena.service';
import { CreateBidService } from '../create-bid/create-bid.service';
import { createApplication } from '@angular/platform-browser';
import { Bid } from '../models/bid';
import { GetBidsService } from '../get-bids/get-bids.service';
import { AuctionService } from '../services/auction.service';
import { User } from '../models/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  auctions!: Auction[];
  item!: Item;
  users: User[] = [];
  userId!: number;
  unosIznosa: any;
  userName!: string;
  displayVal: number = 0;
  validationMessage: string = '';
  preostaliSati: number = 0;
  preostaliDani: number = 0;
  preostaliMinuti: number = 0;
  preostaleSekunde: number = 0;
  intervalId: any;
  maxBid!: number;
  signal: number = 0;
  auctionId!: number;
  bids: Bid[] = [];
  public user!: LoginResponse | null;
  userToken!: string;
  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService, private matDialog: MatDialog,
    private followService: FollowService, private cartService: CartService,
    private router: Router, private getAuctionService: GetAuctionsService,
    private updateTrenutnaCenaService: UpdateTrenutnaCenaService,
    private createBidService: CreateBidService, private getBidService: GetBidsService, private auctionService: AuctionService,
    private usersService: UsersService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.item = itemsService.getItemById(params['id']);

      this.auctionId = this.auctionService.getAuctionIdByItemId(this.item.id);


    })


  }
  ngOnInit(): void {
    this.remainingTime();
    this.intervalId = setInterval(() => this.remainingTime(), 1000);
    this.setAuctions();
    console.log(this.item.user_id);
  }


  openDialog() {
    this.matDialog.open(ContactComponent, {
      width: '350px'
    })

  }
  addToFollow() {

    this.followService.addToFollow(this.item);
  }


  remainingTime() {
    let preostaloVreme = moment.duration(moment().diff(this.item.preostaloVreme));
    this.preostaliDani = Math.abs(preostaloVreme.days());
    this.preostaliSati = Math.abs(preostaloVreme.hours());
    this.preostaliMinuti = Math.abs(preostaloVreme.minutes());
    this.preostaleSekunde = Math.abs(preostaloVreme.seconds());



    if (this.preostaleSekunde == 0 && this.preostaliMinuti == 0 && this.preostaliSati == 0 && this.preostaliDani == 0 || moment(this.item.preostaloVreme) <= moment()) {


      clearInterval(this.intervalId);

      this.signal = 1;
    }



    return;

  }



  getSelectedPriceValue(value: string) {
    this.validationMessage = '';
    this.displayVal = parseInt(value);
    if (!this.displayVal) {
      this.validationMessage = "Molimo vas unesite vasu licitaciju.";
      return;
    }
    if (this.displayVal <= this.item.trenutna_cena) {
      this.validationMessage = "Morate uneti cifru vecu od trenutne cene proizvoda."
      return;
    }
    if (this.preostaleSekunde == 0 && this.preostaliMinuti == 0 && this.preostaliSati == 0 && this.preostaliDani == 0 || moment(this.item.preostaloVreme) <= moment()) {
      this.validationMessage = "Licitacija je istekla, ne mozete vise licitirati."
      return;
    }

    this.updateTrenutnaCena();

  }
  updateTrenutnaCena() {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;

    if (this.user !== null) {
      this.userToken = this.user.access_token;
      this.item.trenutna_cena = this.displayVal;
      this.item = this.itemsService.update(this.item)
      this.updateTrenutnaCenaService.updateTrenutnaCena(this.userToken, this.item.id, this.item).
        subscribe(response => {

        }, error => { console.log(error); });



      this.createBidService.makeBid(this.userToken, this.auctionId, this.item.trenutna_cena).
        subscribe(response => {

        }, error => { console.log(error); });
      this.addToFollow();
    }

    else {
      alert("Da bi ste licitirali morate biti ulogovani!")
      this.router.navigate(['/user-login']);
    }
  }
  setAuctions() {

    this.getAuctionService.getAuctions().
      subscribe(response => {
        this.auctions = response;
        this.setUsers();
      }, error => { console.log(error); });


  }
  setUsers() {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    this.usersService.getUsers(this.userToken, this.userId)
      .subscribe(response => {
        const responseData = response as unknown as { users: User[] };
        this.users = responseData.users;
        console.log(this.users);

        this.users.forEach(element => {
          console.log("this.userId:", this.userId, "element.id:", element.id);
          if (this.item.user_id.toString() === element.id.toString()) {
            this.userName = element.username;
            console.log("Match found! UserName:", this.userName);
          }
        });


      }, error => {
        console.log(error);
      });
  }

}




