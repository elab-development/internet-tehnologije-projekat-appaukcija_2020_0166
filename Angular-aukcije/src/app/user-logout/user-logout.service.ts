import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserLogoutService {
  private apiUrl: string = "http://127.0.0.1:8000/api/logout"
  constructor(private readonly httpClient: HttpClient) { }

  logout(accessToken: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    return this.httpClient.get(this.apiUrl, { headers }).pipe(
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }

}
