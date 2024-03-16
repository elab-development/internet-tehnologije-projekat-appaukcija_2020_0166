import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteItemService {

  private apiUrl: string = "http://127.0.0.1:8000/api/items";

  constructor(private readonly httpClient: HttpClient) { }

  deleteItem( item_id: number) {
 
   
    const url = `${this.apiUrl}/${item_id}`;
    return this.httpClient.delete(url).pipe(
      catchError(error => {
        console.error('Item removal failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
