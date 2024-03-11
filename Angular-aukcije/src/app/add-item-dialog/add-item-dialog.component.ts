import { Component } from '@angular/core';
import { AddItemService } from '../add-Item/add-item.service';
import { LoginResponse } from '../user-login/login-response';
import { Item } from '../models/item';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.css'
})
export class AddItemDialogComponent {
  public user!: LoginResponse | null;
  userToken!: string;
  itemId!: number;
  validationMessage!:string;
  constructor(private addItemService: AddItemService) {

  }
  AddAuction(nazivPredmeta: string, opisPredmeta: string, pocetna_cena: string, trenutna_cena: string, urlSlike: string) {
    this.validationMessage = '';
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    if(!nazivPredmeta || !opisPredmeta || !pocetna_cena|| !trenutna_cena || !urlSlike){
      this.validationMessage = "Molimo vas unesite sve podatke.";
      return;
    }
    this.addItemService.addItem(this.userToken, nazivPredmeta, opisPredmeta, pocetna_cena, trenutna_cena, urlSlike).subscribe(response => {
      const responseData = response as unknown as { data: Item };
      this.itemId = responseData.data.id
      
      console.log(this.itemId);
      alert("Uspesno ste napravili aukciju!")
    }, error => {
      console.log(error);
    })

  }
}
