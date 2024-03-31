import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-reusable',
  templateUrl: './item-reusable.component.html',
  styleUrl: './item-reusable.component.css'
})
export class ItemReusableComponent {
  @Input() item!: Item;
  constructor(private sanitizer:DomSanitizer){}
  
  getOpis() {
    return this.sanitizer.bypassSecurityTrustHtml(this.item.opis);
  }
}
