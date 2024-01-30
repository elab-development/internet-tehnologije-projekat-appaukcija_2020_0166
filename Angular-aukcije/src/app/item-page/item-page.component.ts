import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { FormaComponent } from '../forma/forma.component';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  items!: Item;
  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService, private matDialog: MatDialog,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.items = itemsService.getItemById(params['id']);
    })
  }
  openDialog() {
    this.matDialog.open(FormaComponent, {
      width: '350px'
    })
  }
  addToFavorites() {

  }
}
