import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Auction } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class GetAuctionsService {
  private apiUrl: string = "http://127.0.0.1:8000/api/auctions";
  constructor(private readonly httpClient: HttpClient) { }

  getAuctions() {
   
    return this.httpClient.get(this.apiUrl).pipe(
      map(response => response as Auction[]),
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }
}
