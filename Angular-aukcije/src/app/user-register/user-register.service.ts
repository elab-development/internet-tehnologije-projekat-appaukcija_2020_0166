import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private apiUrl: string = "http://127.0.0.1:8000/api/register";
  constructor(private readonly httpClient: HttpClient) { }

  register(username: string, email: string, password: string, broj_telefona: string, adresa: string) {
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('broj_telefona', broj_telefona);
    formData.append('adresa', adresa);
    return this.httpClient.post(this.apiUrl, formData).pipe(
      catchError(error => {
        console.error('Logout failed:', error);
        alert('Niste se pravilno registrovali!')
        return throwError(error);
      })
    );
  }
}
