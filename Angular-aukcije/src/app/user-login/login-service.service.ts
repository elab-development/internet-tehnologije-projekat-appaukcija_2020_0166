import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl: string = "http://127.0.0.1:8000/api/login";

  constructor(private readonly httpClient: HttpClient) { }

  logIn(username: string, password: string) {
    const formData: FormData = new FormData();
    formData.append('email', username);
    formData.append('password', password);
    return this.httpClient.post(this.apiUrl, formData).pipe(
      map(response => response as LoginResponse),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Proverite username i password!')
        }
        return throwError(() => new Error(error.statusText));
      }));
  }
}
