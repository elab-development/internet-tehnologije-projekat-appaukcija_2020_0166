import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserLogoutService {
  private apiUrl: string = "http://127.0.0.1:8000/api/logout"
  constructor(private readonly httpClient: HttpClient) { }

  logout() {
  
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }

}
