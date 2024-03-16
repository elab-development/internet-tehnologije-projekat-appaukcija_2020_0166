import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class UpdateTrenutnaCenaService {
  private apiUrl: string = "http://127.0.0.1:8000/api/item";
  constructor(private readonly httpClient: HttpClient) {
  }
  updateTrenutnaCena( itemId: number, updatedData: Item) {
   
    const url = `${this.apiUrl}/${itemId}`;
    const jsonData = ({ trenutna_cena: updatedData.trenutna_cena });
    return this.httpClient.put(url, jsonData ).pipe(

      catchError(error => {
        console.error('Update failed:', error);
        return throwError(error);
      })
    );
  }
}
