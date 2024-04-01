import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Auction } from './models/auction';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UpdateVremeZavrsetkaService {

  private apiUrl: string = "http://127.0.0.1:8000/api/auction";
  constructor(private readonly httpClient: HttpClient,private datePipe: DatePipe) {
  }
  updateVremeZavrsetka( auctionId: number, updatedData: Auction) {
   
    const url = `${this.apiUrl}/${auctionId}`;
    const formattedDate = this.datePipe.transform(updatedData.vreme_zavrsetka, 'yyyy-MM-dd HH:mm:ss');
    const jsonData = { vreme_zavrsetka: formattedDate };
    return this.httpClient.put(url, jsonData ).pipe(

      catchError(error => {
        console.error('Update failed:', error);
        return throwError(error);
      })
    );
  }
}
