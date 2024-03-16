import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = "http://127.0.0.1:8000/api/users";
  constructor(private readonly httpClient: HttpClient) { }

  getUsers(){
    
    return this.httpClient.get(this.apiUrl).pipe(
      map(response => response as User[]),
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }
}
