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
import { DeleteAuctionService } from '../deleteAuction/delete-auction.service';
import { DeleteItemService } from '../delete-item/delete-item.service';
import { BidService } from '../services/bid.service';
import { AuthServiceService } from '../authservice';
import { CurrencyInfoService } from '../currency-service.service';
import { currencyRatioService } from '../currency-ratio.service';
import { UpdateVremeZavrsetkaService } from '../update-vreme-zavrsetka.service';
import { UpdateNovacService } from '../update-novac.service';
import { GetMoneyService } from '../get-money.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  auction!: Auction;
  item!: Item;
  signalValuta: boolean = false;
  inputValue: string = '';
  itemsProba!: Item[];
  proba!: string | null;
  users: User[] = [];
  userId!: number;
  unosIznosa: any;
  userName!: string;
  displayVal: number = 0;
  validationMessage: string = '';
  endMessage: string = '';
  preostaliSati: number = 0;
  preostaliDani: number = 0;
  preostaliMinuti: number = 0;
  preostaleSekunde: number = 0;
  intervalId: any;
  currencySymbol: string = "$";
  selectedCurrency: string = '';
  maxBid!: number;
  signal: number = 0;
  auctionId!: number;
  bids: Bid[] = [];
  public user!: LoginResponse | null;
  userToken!: string;
  currency: string[] = [];
  currencyInfo: any;
  currencyRatio: any;
  usdToCad!: number;
  usdToEur!: number;
  cadToEur!: number;
  eurToCad!: number;
  eurToUsd!: number;
  cadToUsd!: number;
  novac!: number;
  novacDolar!: number;
  prikazCena!: number;
  trenutnaCenaDolar!: number;
  pocetnaCenaDolar!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService, private matDialog: MatDialog,
    private followService: FollowService, private router: Router,
    private updateTrenutnaCenaService: UpdateTrenutnaCenaService,
    private createBidService: CreateBidService, private auctionService: AuctionService,
    private deleteAuctionService: DeleteAuctionService,
    private deleteItemService: DeleteItemService, private authService: AuthServiceService,
    private currencyService: CurrencyInfoService, private currencyRatioService: currencyRatioService,
    private updateVremeZavrsetkaService: UpdateVremeZavrsetkaService, private updateNovacService: UpdateNovacService,
    private getMoneyService: GetMoneyService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.item = itemsService.getItemById(params['id']);
      this.trenutnaCenaDolar = this.item.trenutna_cena;
      this.pocetnaCenaDolar = this.item.pocetna_cena;


    })


  }
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.user = this.authService.getUser();
      const responseData = data['usersData'] as unknown as { users: User[] };;
      this.users = responseData.users;

    })
    this.activatedRoute.data.subscribe(data => {
      this.bids = data['bidsData'];

    })
    this.activatedRoute.data.subscribe(data => {
      const responseData = data['moneyData'] as unknown as { novac: number };;
      this.novacDolar = responseData.novac;
      this.novac = responseData.novac;
    })


    this.user = this.authService.getUser();
    if (this.user != null) {
      this.userToken = this.user.access_token;
      this.userId = this.user.user_id;

    }
    this.auctionId = this.auctionService.getAuctionIdByItemId(this.item.id);
    this.auction = this.auctionService.getAuctionById(this.auctionId);
    this.remainingTime();
    this.intervalId = setInterval(() => this.remainingTime(), 1000);

    this.setUsers();
    this.isBid(this.bids);
    const currencies = 'EUR,USD,CAD';

    this.currencyService.getCurrencyInfo(currencies)
      .subscribe(
        data => {
          this.currencyInfo = data.data;

          this.currency.push(this.currencyInfo['CAD'].name);
          this.currency.push(this.currencyInfo['USD'].name);
          this.currency.push(this.currencyInfo['EUR'].name);
          this.currencyRatioService.getCurrencyRatio(currencies).subscribe(data => {
            this.currencyRatio = data.data;
            this.usdToCad = (this.currencyRatio['CAD']);
            this.usdToEur = (this.currencyRatio['EUR']);
            this.eurToCad = this.usdToCad / this.usdToEur;
            this.cadToEur = 1 / this.eurToCad;
            this.eurToUsd = 1 / this.usdToEur;
            this.cadToUsd = 1 / this.usdToCad;

          }, error => {
            console.error('Error', error);
          })
        },
        error => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
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



  getSelectedPriceValue(value: string, inputElement: HTMLInputElement) {
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
    if (this.user != null && this.displayVal > this.novac) {
      this.validationMessage = "Nemate dovljno sredstava za datu transakciju!";
      return;
    }
    if (this.preostaleSekunde == 0 && this.preostaliMinuti == 0 && this.preostaliSati == 0 && this.preostaliDani == 0 || moment(this.item.preostaloVreme) <= moment()) {
      this.validationMessage = "Licitacija je istekla, ne mozete vise licitirati."
      return;
    }
    if (this.userId == this.item.user_id) {
      this.validationMessage = "Ne mozete licitrati na sopstvenoj aukciji."
      return;
    }
    this.inputValue = "";
    inputElement.placeholder = "Unesi licitaciju";

    this.updateNovac(this.displayVal);
    this.updateTrenutnaCena();
    if (this.preostaliMinuti == 0 && this.preostaliSati == 0 && this.preostaliDani == 0 && this.preostaleSekunde < 60) {
      this.item.preostaloVreme = typeof this.item.preostaloVreme === 'string' ? new Date(this.item.preostaloVreme) : this.item.preostaloVreme;
      const currentTime = new Date();

      this.item.preostaloVreme = new Date(currentTime.getTime() + 60000);
      this.auction.vreme_zavrsetka = new Date(currentTime.getTime() + 60000);
      this.updateVremeZavrsetkaService.updateVremeZavrsetka(this.auctionId, this.auction).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }

  }
  updateNovac(displayVal: number) {
    if (this.currencySymbol == "$") {
      this.novac = this.novac - displayVal;
    }
    if (this.currencySymbol == "€") {
      this.novac = this.novac * this.eurToUsd - this.displayVal * this.eurToUsd;

    }
    if (this.currencySymbol == "CA$") {
      this.novac = this.novac * this.cadToUsd - this.displayVal * this.cadToUsd;

    }
    this.updateNovacService.updateNovac(this.userId, this.novac).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  updateTrenutnaCena() {

    if (this.currencySymbol == "$") {
      this.item.trenutna_cena = this.displayVal;

    }
    if (this.currencySymbol == "€") {
      this.item.trenutna_cena = this.displayVal * this.eurToUsd;

      this.currencySymbol = "$";
      this.selectedCurrency = "";
    }
    if (this.currencySymbol == "CA$") {
      this.item.trenutna_cena = this.displayVal * this.cadToUsd;
      this.selectedCurrency = "";
      this.currencySymbol = "$";
    }

    if (this.user !== null) {
      this.userToken = this.user.access_token;
      this.item = this.itemsService.update(this.item)
      this.updateTrenutnaCenaService.updateTrenutnaCena(this.item.id, this.item).
        subscribe(response => {

        }, error => { console.log(error); });



      this.createBidService.makeBid(this.auctionId, this.item.trenutna_cena).
        subscribe(response => {

        }, error => { console.log(error); });
      this.addToFollow();
      this.signalValuta = true;
    }

    else {
      alert("Da bi ste licitirali morate biti ulogovani!")
      this.router.navigate(['/user-login']);
    }
  }


  setUsers() {

    this.users.forEach(element => {
      if (this.item.user_id.toString() === element.id.toString()) {
        this.userName = element.username;
        console.log("Match found! UserName:", this.userName);
      }
    });


  }
  deleteAuction() {
    this.deleteAuctionService.deleteAucion(this.auctionService.getAuctionIdByItemId(this.item.id)).subscribe(response => {
      console.log(response)

    }, error => {
      console.log(error);
    })
    this.deleteItemService.deleteItem(this.item.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  isBid(bids: Bid[]) {
    if (bids.some(element => element.auction_id === this.auctionId)) {

      return;
    }

    this.endMessage = "Nema pobednika aukcije, nijedan korisnik nije licitirao."
  }
  promeniValutu(option: string) {
    if (option == "Canadian Dollar" && this.currencySymbol == "$") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.usdToCad;
      this.item.pocetna_cena = this.item.pocetna_cena * this.usdToCad;
      this.novac = this.novac * this.usdToCad;
      this.currencySymbol = "CA$";
      return;
    }
    if (option == "Canadian Dollar" && this.currencySymbol == "€") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.eurToCad;
      this.item.pocetna_cena = this.item.pocetna_cena * this.eurToCad;
      this.novac = this.novac * this.eurToCad;
      this.currencySymbol = "CA$";
      return;
    }
    if (option == "Euro" && this.currencySymbol == "$") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.usdToEur;
      this.item.pocetna_cena = this.item.pocetna_cena * this.usdToEur;
      this.novac = this.novac * this.usdToEur;
      this.currencySymbol = "€";
      return;
    }
    if (option == "Euro" && this.currencySymbol == "CA$") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.cadToEur;
      this.item.pocetna_cena = this.item.pocetna_cena * this.cadToEur;
      this.novac = this.novac * this.cadToEur;
      this.currencySymbol = "€";
      return;
    }
    if (option == "US Dollar" && this.signalValuta == false) {
      this.item.trenutna_cena = this.trenutnaCenaDolar;
      this.item.pocetna_cena = this.pocetnaCenaDolar;
      this.novac = this.novacDolar;
      this.currencySymbol = "$";
      return;
    }
    if (option == "US Dollar" && this.signalValuta == true && this.currencySymbol == "€") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.eurToUsd;
      this.item.pocetna_cena = this.pocetnaCenaDolar;
      this.currencySymbol = "$";
      this.novac = this.novac * this.eurToUsd;
      this.novacDolar = this.novac;
      this.signalValuta = false;
      this.trenutnaCenaDolar = this.item.trenutna_cena;
      return;
    }
    if (option == "US Dollar" && this.signalValuta == true && this.currencySymbol == "CA$") {
      this.item.trenutna_cena = this.item.trenutna_cena * this.cadToUsd;
      this.item.pocetna_cena = this.pocetnaCenaDolar;
      this.currencySymbol = "$";
      this.novac = this.novac * this.cadToUsd;
      this.novacDolar = this.novac;
      this.signalValuta = false;
      this.trenutnaCenaDolar = this.item.trenutna_cena;
      return;
    }
  }
  getIntegerNumber(): number {
    return Math.round(this.item.trenutna_cena);
  }

}




