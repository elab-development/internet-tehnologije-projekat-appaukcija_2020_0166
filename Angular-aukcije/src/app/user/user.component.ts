import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { UserItemService } from '../user-item/user-item.service';
import { LoginResponse } from '../user-login/login-response';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  items: Item[] = [];
  cart!: Cart;
  userId!: number;
  public user!: LoginResponse | null;
  userToken!: string;
  constructor(private itemSerivce: ItemsService, private activatedRoute: ActivatedRoute,
    private userItemService: UserItemService, private cartService: CartService) {

    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.userId = params['id'];

    })
  }
  ngOnInit(): void {

    this.setItems();
    console.log(this.userId);
  }


  setItems() {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    this.userItemService.getItemsUser(this.userToken, this.userId).
      subscribe(response =>  {

        this.items = Object.values(response);
        console.log(this.items);

      }, error => { console.log(error); });

  }
}
