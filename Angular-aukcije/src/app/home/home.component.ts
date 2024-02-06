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
  itemsGotovo:Item[]=[];
  p: number = 1;
  i: number = 0;
  itemsPerPage: number = 6;
  totalProduct: any;
  constructor(private itemSerivce: ItemsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']){
        this.items = this.itemSerivce.getAll().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
        this.itemsGotovo = this.itemSerivce.getAllGotovo().filter(item => item.naziv.toLowerCase().startsWith(params['searchTerm'].toLowerCase()));
      }
      
      else
        this.items = this.itemSerivce.getAll();
        this.itemsGotovo = this.itemSerivce.getAllGotovo();
    })
   
  }

}
