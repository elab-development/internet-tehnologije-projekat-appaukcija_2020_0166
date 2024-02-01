import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private data = [
    {
      id: 1,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 2,
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    },
    {
      id: 2,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 3,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 4,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 5,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 6,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
  ];
  constructor() { }
  getItemById(id: number): Item {
    return this.getAll().find(item => item.id == id)!;
  }

  getAll(): Item[] {
    return this.data;
  }

  update(item: Item): Item {
    let itemToUpdate = this.data.find(e => e.id === item.id)!;
    itemToUpdate.imageUrl = item.imageUrl;
    itemToUpdate.naziv = item.naziv;
    itemToUpdate.opis = item.opis;
    itemToUpdate.pocetna_cena = item.pocetna_cena;
    itemToUpdate.trenutna_cena = item.trenutna_cena;
    itemToUpdate.preostaloVreme = item.preostaloVreme;
    itemToUpdate.user_id = item.user_id;
    return itemToUpdate;
  }
}
