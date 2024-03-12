import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAuctionService {

  private apiUrl: string = "http://127.0.0.1:8000/api/auction";

  constructor(private readonly httpClient: HttpClient) { }

  addAuction(accessToken: string, item_id:number,vreme_pocetka:string,vreme_zavrsetka:string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
     
    });

    const formData = new FormData();
    formData.append('item_id', item_id.toString());
    formData.append('vreme_pocetka', vreme_pocetka);
    formData.append('vreme_zavrsetka', vreme_zavrsetka);
    return this.httpClient.post(this.apiUrl, formData, { headers: headers }).pipe(
      catchError(error => {
        console.error('Auction creation failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
