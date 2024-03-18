import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/item.service';
import { Item } from '../models/item';
import { Auction } from '../models/auction';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: String = "";
  constructor(private route: ActivatedRoute, private router: Router,private itemsService:ItemsService) { }
  proba: Item[] = [];
  auctions!: Auction[];
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.auctions = data['auctionsData'];
    })
    this.route.data.subscribe(data => {
      this.proba = data['itemsData'];
    })
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })
    this.itemsService
  }
  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm)
  }
}
