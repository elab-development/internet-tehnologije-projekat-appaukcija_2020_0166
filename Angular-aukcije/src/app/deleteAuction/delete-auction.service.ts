import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteAuctionService {

  private apiUrl: string = "http://127.0.0.1:8000/api/auctions";

  constructor(private readonly httpClient: HttpClient) { }

  deleteAucion(accessToken: string, auction_id: number) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
     
    });
   
    const url = `${this.apiUrl}/${auction_id}`;
    return this.httpClient.delete(url, { headers: headers }).pipe(
      catchError(error => {
        console.error('Auction removal failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
