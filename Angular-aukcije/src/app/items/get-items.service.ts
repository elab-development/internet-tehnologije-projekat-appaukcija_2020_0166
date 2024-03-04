import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  private apiUrl: string = "http://127.0.0.1:8000/api/items";
  constructor(private readonly httpClient: HttpClient) { }

  getItems() {
    
    return this.httpClient.get<{ items: Item[] }>(this.apiUrl).pipe(
      map(response => response.items),
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }
}

