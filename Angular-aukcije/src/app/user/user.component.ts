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
import { AuthServiceService } from '../authservice';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  items: Item[] = [];
  proba!: Item[];
  users: User[] = [];
  userName!: string;
  cart!: Cart;
  userId!: number;
  public user!: LoginResponse | null;
  userToken!: string;
  constructor(private itemSerivce: ItemsService, private activatedRoute: ActivatedRoute,
    private userItemService: UserItemService, private usersService: UsersService, private authService: AuthServiceService) {

    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.userId = params['id'];

    })
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      const responseData = data['usersData'] as unknown as { users: User[] };;
      this.users = responseData.users;
      console.log(this.users);
      
    })
    this.activatedRoute.data.subscribe(data => {
      this.items = Object.values(data['userItemsData']);
      console.log(this.items);
    })

    this.setUsers();

  }



  setUsers() {

    this.users.forEach(element => {

      if (this.userId.toString() === element.id.toString()) {
        this.userName = element.username;

      }
    });


  }

}
