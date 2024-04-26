import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoneyService {

  private apiUrl: string = "http://127.0.0.1:8000/api/user";
  constructor(private readonly httpClient: HttpClient) { }
  GetMoney( userId: number) {
   
    const url = `${this.apiUrl}/${userId}/novac`;
   
    return this.httpClient.get(url).pipe(
      catchError(error => {
        console.error('Failed to get user money:', error);
        return throwError(error);
      })
    );
  }
}
