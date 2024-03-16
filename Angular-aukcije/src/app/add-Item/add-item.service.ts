import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  private apiUrl: string = "http://127.0.0.1:8000/api/item";

  constructor(private readonly httpClient: HttpClient) { }

  addItem( naziv:string,opis:string,pocetna_cena:string,trenutna_cena:string,url:string) {
   

    const formData = new FormData();
    formData.append('naziv', naziv);
    formData.append('opis', opis);
    formData.append('pocetna_cena', pocetna_cena);
    formData.append('trenutna_cena', trenutna_cena);
    formData.append('url', url);
    return this.httpClient.post(this.apiUrl, formData).pipe(
      map(response => response as Item),
      catchError(error => {
        console.error('Bid creation failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
