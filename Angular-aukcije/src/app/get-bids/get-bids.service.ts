import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Bid } from '../models/bid';


@Injectable({
  providedIn: 'root'
})
export class GetBidsService {
  private apiUrl: string = "http://127.0.0.1:8000/api/bids";
  constructor(private readonly httpClient: HttpClient) { }

  getBids() {
 
    return this.httpClient.get(this.apiUrl).pipe(
      map(response => response as Bid[]),
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }
}
