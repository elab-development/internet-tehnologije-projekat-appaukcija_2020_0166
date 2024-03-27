import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private apiUrl: string = "http://127.0.0.1:8000/api/reset-password";

  constructor(private readonly httpClient: HttpClient) { }

  sendResetLink( email:string,token:string,password:string,password_confirmation:string) {
 

    const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);
    formData.append('password_confirmation',password_confirmation);
    formData.append('token',token);
    return this.httpClient.post(this.apiUrl, formData).pipe(
      catchError(error => {
        console.error('Reset password failed:', error);
        alert('GRESKA!');
        return throwError(error);
      })
    );
  }
}
