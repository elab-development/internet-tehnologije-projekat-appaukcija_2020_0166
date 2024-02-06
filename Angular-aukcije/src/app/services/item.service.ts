import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private data = [
    {
      id: 1,
      naziv: 'assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 2,
      preostaloVreme: new Date(Date.now() +  10 * 1000)

    },
    {
      id: 2,
      naziv: 'Kosarkaska lopta',
      opis: "",
      pocetna_cena: 50,
      trenutna_cena: 70,
      imageUrl: '/assets/images/lopta.png',
      preostaloVreme: new Date(Date.now() +  60 * 1000),
      user_id: 2
    },
    {
      id: 3,
      naziv: 'Tastatura',
      opis: "",
      pocetna_cena: 60,
      trenutna_cena: 90,
      imageUrl: '/assets/images/tastatura.jpg',
      preostaloVreme: new Date(Date.now() +  60 * 1000),
      user_id: 2
    },
    {
      id: 4,
      naziv: 'Punjac za ajfon',
      opis: "",
      pocetna_cena: 120,
      trenutna_cena: 160,
      imageUrl: '/assets/images/punjaczaajfon.jpg',
      preostaloVreme: new Date(Date.now() +  60 * 1000),
      user_id: 3
    },
    {
      id: 5,
      naziv: 'Trzalice za gitaru',
      opis: "",
      pocetna_cena: 20,
      trenutna_cena: 30,
      imageUrl: '/assets/images/trzalice.jpg',
      preostaloVreme: new Date(Date.now() +  60 * 1000),
      user_id: 3
    },
    {
      id: 6,
      naziv: 'Koka kola case',
      opis: "",
      pocetna_cena: 40,
      trenutna_cena: 48,
      imageUrl: '/assets/images/kokakola.jpg',
      preostaloVreme: new Date(Date.now() +  60 * 1000),
      user_id: 3
    },
    {
      id: 7,
      naziv: 'assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 2,
      preostaloVreme: new Date(Date.now() +  60 * 1000),

    },
    {
      id: 8,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 9,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 10,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 11,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 12,
      naziv: 'assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 2,
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    },
    {
      id: 13,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 14,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 2
    },
    {
      id: 15,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 16,
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
    {
      id: 12,
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
