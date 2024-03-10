import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserItemService {
  private apiUrl: string = "http://127.0.0.1:8000/api/user";
  constructor(private readonly httpClient: HttpClient) { }

  getItemsUser(accessToken: string,userId: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    const url = `${this.apiUrl}/${userId}/items`;
    return this.httpClient.get<Item[]>(url, { headers }).pipe(
      catchError(error => {
        console.error('Fetching items failed:', error);
        return throwError(error);
      })
    );
  }
}
