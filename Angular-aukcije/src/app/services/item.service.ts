import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  getItemById(id: number): Item {
    return this.getAll().find(item => item.id == id)!;
  }

  getAll(): Item[] {
    return [
      {
        id: 1,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        user_id:1,
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        
      },
      {
        id: 2,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        user_id:1
      },
      {
        id: 3,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        user_id:1
      },
      {
        id: 4,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        user_id:2
      },
      {
        id: 5,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        user_id:2
      },
      {
        id: 6,
        naziv: 'Assassins creed IV Black Flag',
        opis: "",
        pocetna_cena: 130,
        trenutna_cena: 180,
        imageUrl: '/assets/images/item1.jpg',
        preostaloVreme:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        user_id:2
      },
      
    ]
  }
}
