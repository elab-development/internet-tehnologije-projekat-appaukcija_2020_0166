import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  items: Item[] = [];
  user_id:number=0;
  constructor(private itemSerivce: ItemsService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.user_id = parseInt(params['id']);
    })
    this.setItems();
  }

  setItems() {
    this.items = this.itemSerivce.getAllItemsByUserId(this.user_id);
  }
}
