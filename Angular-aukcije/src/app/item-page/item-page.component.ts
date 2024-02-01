import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { FollowService } from '../services/follow.service';
import { Follow } from '../models/follow';
import { ContactComponent } from '../contact/contact.component';
import { SharedDataService } from '../services/shared-data.service';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  items!: Item;
  unosIznosa: any;
  displayVal: any;
  validationMessage: string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService, private matDialog: MatDialog,
    private followService: FollowService, 
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.items = itemsService.getItemById(params['id']);
    })
  }
  openDialog() {
    this.matDialog.open(ContactComponent, {
      width: '350px'
    })

  }
  addToFollow() {

    this.followService.addToFollow(this.items,);
    this.router.navigateByUrl('/follow-page');
  }
  getSelectedPriceValue(value: string) {
    this.displayVal = parseInt(value);
    if (!this.displayVal) {
      this.validationMessage = "Molimo vas unesite vasu licitaciju.";
      return;
    }
    if (this.displayVal <= this.items.trenutna_cena) {
      this.validationMessage = "Morate uneti cifru vecu od trenutne cene proizvoda."
      return;
    }
    this.items.trenutna_cena=this.displayVal;
    
   this.addToFollow();
  }



}
