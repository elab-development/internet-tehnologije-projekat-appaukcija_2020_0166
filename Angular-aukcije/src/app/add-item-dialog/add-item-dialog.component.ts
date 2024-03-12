import { Component } from '@angular/core';
import { AddItemService } from '../add-Item/add-item.service';
import { LoginResponse } from '../user-login/login-response';
import { Item } from '../models/item';
import { AddAuctionService } from '../add-auction/add-auction.service';
import moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.css'
})
export class AddItemDialogComponent {
  public user!: LoginResponse | null;
  userToken!: string;
  selectedDate!: Date;
  itemId!: number;
  currentDate: Date = new Date();
  formattedDateTrenutni!: string;
  formattedDatePocetni: string;
  validationMessage: string = "";
  constructor(private addItemService: AddItemService, private addAuctionService: AddAuctionService,
    private datePipe: DatePipe) {
    this.formattedDatePocetni = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm:ss')!;
    
  }
  AddAuction(nazivPredmeta: string, opisPredmeta: string, pocetna_cena: string, trenutna_cena: string, urlSlike: string) {

    this.formattedDateTrenutni = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd HH:mm:ss')!;
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    if (!nazivPredmeta || !opisPredmeta || !pocetna_cena || !trenutna_cena || !urlSlike) {
      this.validationMessage = "Molimo vas unesite sve podatke.";
      return;
    }
    if(moment(this.selectedDate) <= moment()){
      this.validationMessage="Morate uneti datum koji je validan."
      return;
    }
    this.validationMessage = "";
    this.addItemService.addItem(this.userToken, nazivPredmeta, opisPredmeta, pocetna_cena, trenutna_cena, urlSlike).subscribe(response => {
      const responseData = response as unknown as { data: Item };

      this.itemId = responseData.data.id

      this.addAuctionService.addAuction(this.userToken, this.itemId, this.formattedDatePocetni, this.formattedDateTrenutni).subscribe(response => {



      }, error => {
        console.log(error);
        return;
      })

    }, error => {
      console.log(error);
      return;
    })
    alert("Uspesno ste napravili aukciju!");
  }
  updateDate(value: string) {

    this.selectedDate = new Date(value);
  }
}
