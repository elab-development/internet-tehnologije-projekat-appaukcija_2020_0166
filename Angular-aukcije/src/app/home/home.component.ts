import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UserLogoutService } from '../user-logout/user-logout.service';
import { LoginResponse } from '../user-login/login-response';
import { GetItemsService } from '../items/get-items.service';
import { GetAuctionsService } from '../get-autions/get-auctions.service';
import { Auction } from '../models/auction';
import moment from 'moment';
import { AuctionService } from '../services/auction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  auctions!: Auction[];
  public user!: LoginResponse | null;
  userToken!: string;
  itemsAuctions: Item[] = [];
  items: Item[] = [];
  itemsGotovo: Item[] = [];
  p: number = 1;
  i: number = 0;
  itemsPerPage: number = 6;
  totalProduct: any;
  constructor(private itemSerivce: ItemsService, private route: ActivatedRoute, private logOutService: UserLogoutService,
    private getItemService: GetItemsService, private getAuctionService: GetAuctionsService, private auctionService: AuctionService) {
    this.items = this.itemSerivce.getAll();
  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.auctions = data['auctionsData'];
    })
    this.route.data.subscribe(data => {
      this.items = data['itemsData'];
      console.log(this.items);
    })
    this.itemSerivce.setData(this.items);

    this.auctionService.setData(this.auctions);


    this.getItems();
    this.updateItem();
    this.route.params.subscribe(params => {

      if (params['searchTerm']) {
        this.itemsAuctions = this.itemSerivce.getAllItemsWithAuctions().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
        this.itemsGotovo = this.itemSerivce.getAllGotovo().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
      }
      else {
        this.itemsGotovo = this.itemSerivce.getAllGotovo();
      }

      if (params['filtrationTerm']) {
        this.itemsAuctions = this.itemSerivce.getAllItemsWithAuctions().filter(item => item.kategorija.toLowerCase() == (params['filtrationTerm'].toLowerCase()));
        this.itemsGotovo = this.itemSerivce.getAllGotovo().filter(item => item.kategorija.toLowerCase() == (params['filtrationTerm'].toLowerCase()));
      }
      if (params['sortTerm'] == "Trenutnoj ceni") {
        this.sortByTrenutnaCena();
      }
     
      if (params['sortTerm'] == "Datumu pocetka aukcije") {
        this.sortByDate();
      }
      if (params['sortTerm'] == "A-Z") {
        this.sortByAlphabet();
      }


    })



  }
  updateItem() {

    for (let i = this.itemsAuctions.length - 1; i >= 0; i--) {
      const element = this.itemsAuctions[i];
      if (moment(element.preostaloVreme) <= moment()) {
        this.itemSerivce.addItemGotovo(element);
        this.itemsAuctions.splice(i, 1);
      }
    }
  }

  getItems() {
    this.itemsAuctions = [];

    this.auctions.forEach(element => {
      this.itemsAuctions.push(this.itemSerivce.getItemsByAuction(element));

    });
    this.itemSerivce.setData2(this.itemsAuctions);
  }
  sortByTrenutnaCena() {
    this.itemsAuctions = this.itemSerivce.getAllItemsWithAuctions().sort((a, b) => b.trenutna_cena - a.trenutna_cena);
  }
  sortByAlphabet() {
    this.itemsAuctions = this.itemSerivce.getAllItemsWithAuctions().sort((a, b) => a.naziv.localeCompare(b.naziv));
  }
  sortByDate() {
    this.itemsAuctions = this.itemSerivce.getAllItemsWithAuctions().map(item => ({
      ...item,
      preostaloVreme: typeof item.preostaloVreme === 'string' ? new Date(item.preostaloVreme) : item.preostaloVreme
    })).sort((a, b) => a.preostaloVreme.getTime() - b.preostaloVreme.getTime());
  }
  

}
