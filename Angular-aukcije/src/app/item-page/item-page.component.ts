import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { FollowService } from '../services/follow.service';
import { ContactComponent } from '../contact/contact.component';
import moment from 'moment';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  item!: Item;
  unosIznosa: any;
  displayVal: any;
  validationMessage: string = '';
  preostaliSati: number = 0;
  preostaliDani: number = 0;
  preostaliMinuti: number = 0;
  preostaleSekunde: number = 0;
  intervalId: any;
  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService, private matDialog: MatDialog,
    private followService: FollowService,private cartService:CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.item = itemsService.getItemById(params['id']);
    })
    this.remainingTime();
    this.intervalId = setInterval(() => this.remainingTime(), 1000);

  }
  openDialog() {
    this.matDialog.open(ContactComponent, {
      width: '350px'
    })

  }
  addToFollow() {

    this.followService.addToFollow(this.item,);
    this.router.navigateByUrl('/follow-page');
  }
  addToCart() {

    this.cartService.addToCart(this.item,);
    
  }

  remainingTime() {
    let preostaloVreme = moment.duration(moment().diff(this.item.preostaloVreme));
    this.preostaliDani = Math.abs(preostaloVreme.days());
    this.preostaliSati = Math.abs(preostaloVreme.hours());
    this.preostaliMinuti = Math.abs(preostaloVreme.minutes());
    this.preostaleSekunde = Math.abs(preostaloVreme.seconds());
    if (this.preostaleSekunde == 0) {
      clearInterval(this.intervalId);
     
    }
  }


  getSelectedPriceValue(value: string) {
    this.displayVal = parseInt(value);
    if (!this.displayVal) {
      this.validationMessage = "Molimo vas unesite vasu licitaciju.";
      return;
    }
    if (this.displayVal <= this.item.trenutna_cena) {
      this.validationMessage = "Morate uneti cifru vecu od trenutne cene proizvoda."
    }
    if (this.preostaleSekunde == 0) {
      this.validationMessage = "Licitacija je istekla, ne mozete vise licitirati."
      return;
    }
    this.item.trenutna_cena = this.displayVal;
    this.item = this.itemsService.update(this.item)
    this.addToFollow();
  }



}
