import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateBidService {
  private apiUrl: string = "http://127.0.0.1:8000/api/bid";

  constructor(private readonly httpClient: HttpClient) { }

  makeBid( auction_id: number, iznos: number) {
 

    const formData = new FormData();
    formData.append('auction_id', auction_id.toString());
    formData.append('iznos', iznos.toString());
    

    return this.httpClient.post(this.apiUrl, formData).pipe(
      catchError(error => {
        console.error('Bid creation failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
