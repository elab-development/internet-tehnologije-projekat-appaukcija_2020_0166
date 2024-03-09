import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { LoginResponse } from '../user-login/login-response';
import { GetItemsService } from '../items/get-items.service';
import { Auction } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public user!: LoginResponse | null;
  userToken!: string;

  private dataGotovo: Item[] = [];
  private data: Item[] = [

  ];
  constructor(private getItemService: GetItemsService) {
    this.setItems();
  }
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
    itemToUpdate.url = item.url;
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

  setData(items: Item[]) {
    this.data = items;
  }
  setItems() {
  

      this.getItemService.getItems().
        subscribe(response => {

          this.setData(response);


        }, error => { console.log(error); });

    

    
  }
  getItemsByAuction(auction:Auction): Item {
   let item = this.data.filter(e=>e.id === auction.item_id)[0];
   item.preostaloVreme=auction.vreme_zavrsetka;
   return item;
  }

 
}
