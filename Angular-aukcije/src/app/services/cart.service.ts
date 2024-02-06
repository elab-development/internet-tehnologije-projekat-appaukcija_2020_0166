import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() { }
  addToCart(item: Item): void {
    let cartItem = this.cart.items.find(proizvod => proizvod.item.id === item.id)
    if (cartItem) {
      this.changeQuantity(cartItem, cartItem.quantity + 1);

      return;
    }
    this.cart.items.push(new CartItem(item));
  }
  changeQuantity(cartItem: CartItem, quantity: number) {
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
}
