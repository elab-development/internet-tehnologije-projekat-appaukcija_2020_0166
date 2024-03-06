import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { LoginResponse } from '../user-login/login-response';
import { GetBidsService } from '../get-bids/get-bids.service';
import { Bid } from '../models/bid';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: Cart;
  bids!: Bid[];
  userToken!: string;
  public user!: LoginResponse | null;
  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService, private getBidService: GetBidsService) {
    this.setCart();
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    this.getBidService.getBids(this.userToken).
    subscribe(response => {
      this.bids = response;
   
      console.log(this.bids);
    

    }, error => { console.log(error); });
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

}
