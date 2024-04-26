import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateNovacService {
  private apiUrl: string = "http://127.0.0.1:8000/api/users";
  constructor(private readonly httpClient: HttpClient) { }
  updateNovac( userId: number, novac:number) {
   
    const url = `${this.apiUrl}/${userId}`;
    const jsonData = ({ novac});
    return this.httpClient.put(url, jsonData ).pipe(

      catchError(error => {
        console.error('Update failed:', error);
        return throwError(error);
      })
    );
  }
}
