import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: Cart;
  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

}
