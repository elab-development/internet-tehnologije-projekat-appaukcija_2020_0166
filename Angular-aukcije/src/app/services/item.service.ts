import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private dataGotovo: Item[] = [];
  private data = [
    {
      id: 1,
      naziv: 'assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 2,
      preostaloVreme: new Date(2024, 1, 7, 14,18, 0)

    },
    {
      id: 2,
      naziv: 'Kosarkaska lopta',
      opis: "",
      pocetna_cena: 50,
      trenutna_cena: 70,
      imageUrl: '/assets/images/lopta.png',
      preostaloVreme: new Date(2024, 1, 7, 14,30, 0),
      user_id: 2
    },
    {
      id: 3,
      naziv: 'Tastatura',
      opis: "",
      pocetna_cena: 60,
      trenutna_cena: 90,
      imageUrl: '/assets/images/tastatura.jpg',
      preostaloVreme: new Date(2024, 1, 7, 14, 30, 0),
      user_id: 2
    },
    {
      id: 4,
      naziv: 'Punjac za ajfon',
      opis: "",
      pocetna_cena: 120,
      trenutna_cena: 160,
      imageUrl: '/assets/images/punjaczaajfon.jpg',
      preostaloVreme: new Date(2024, 1, 7, 14, 30, 0),
      user_id: 3
    },
    {
      id: 5,
      naziv: 'Trzalice za gitaru',
      opis: "",
      pocetna_cena: 20,
      trenutna_cena: 30,
      imageUrl: '/assets/images/trzalice.jpg',
      preostaloVreme: new Date(2024, 1, 7, 14, 30, 0),
      user_id: 3
    },
    {
      id: 6,
      naziv: 'Koka kola case',
      opis: "",
      pocetna_cena: 40,
      trenutna_cena: 48,
      imageUrl: '/assets/images/kokakola.jpg',
      preostaloVreme: new Date(2024, 1, 7, 14, 30, 0),
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
      preostaloVreme: new Date(Date.now() + 10 * 60 * 1000),

    },
    {
      id: 8,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 3
    },
    {
      id: 9,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 10,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 11,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 12,
      naziv: 'assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      user_id: 4,
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
      user_id: 4
    },
    {
      id: 14,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 15,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 16,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 6,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
    {
      id: 12,
      naziv: 'Assassins creed IV Black Flag',
      opis: "",
      pocetna_cena: 130,
      trenutna_cena: 180,
      imageUrl: '/assets/images/item1.jpg',
      preostaloVreme: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_id: 4
    },
  ];
  constructor() { }
  getItemById(id: number): Item {
    return this.getAll().find(item => item.id == id)!;
  }

  getAll(): Item[] {
    return this.data;
  }
  getAllGotovo(): Item[] {
    return this.dataGotovo;
  }
  getAllItemsByUserId(id: number): Item[] {
    let dataUser: Item[] = [];
    this.data.forEach(element => {
      if (element.user_id == id) {
        dataUser.push(element)
      }
    })
    return dataUser;
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
  deleteItemById(id: number) {
    const index = this.getAll().findIndex(item => item.id === id);
    if (index !== -1) {
      this.getAll().splice(index, 1);
    }
  }
  addItemGotovo(item: Item): void {
    let itemGotovo = this.dataGotovo.find(proizvod => proizvod.id === item.id)
    if (itemGotovo) {

      return;
    }
    this.dataGotovo.push(item);
  }
}
