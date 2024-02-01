import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/item.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService) {
   
  }

}
