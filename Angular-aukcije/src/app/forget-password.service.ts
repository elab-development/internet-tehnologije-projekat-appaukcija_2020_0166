import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  private apiUrl: string = "http://127.0.0.1:8000/api/forget-password";

  constructor(private readonly httpClient: HttpClient) { }

  sendResetLink( email:string) {
 

    const formData = new FormData();
    formData.append('email',email);
    return this.httpClient.post(this.apiUrl, formData).pipe(
      catchError(error => {
        console.error('Reset token failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
