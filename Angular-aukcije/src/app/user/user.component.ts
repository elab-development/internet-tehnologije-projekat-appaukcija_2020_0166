import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { UserItemService } from '../user-item/user-item.service';
import { LoginResponse } from '../user-login/login-response';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { UsersService } from '../users/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  items: Item[] = [];
  users: User[] = [];
  userName!: string;
  cart!: Cart;
  userId!: number;
  public user!: LoginResponse | null;
  userToken!: string;
  constructor(private itemSerivce: ItemsService, private activatedRoute: ActivatedRoute,
    private userItemService: UserItemService, private usersService: UsersService) {

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
      subscribe(response => {

        this.items = Object.values(response);
        console.log(this.items);
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
          if (this.userId.toString() === element.id.toString()) {
            this.userName = element.username;
            console.log("Match found! UserName:", this.userName);
          }
        });
        
  
      }, error => {
        console.log(error);
      });
  }
  
}
