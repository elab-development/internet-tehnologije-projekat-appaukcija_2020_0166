import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-reusable',
  templateUrl: './item-reusable.component.html',
  styleUrl: './item-reusable.component.css'
})
export class ItemReusableComponent {
  @Input() item!: Item;
}
