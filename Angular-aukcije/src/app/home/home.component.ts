import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: Item[] = [];
  constructor(private itemSerivce:ItemsService,private route:ActivatedRoute){ }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.items = this.itemSerivce.getAll().filter(item => item.naziv.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
        this.items = this.itemSerivce.getAll();
    })

  }
}
