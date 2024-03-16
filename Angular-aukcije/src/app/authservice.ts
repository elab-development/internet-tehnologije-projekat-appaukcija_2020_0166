import { Injectable } from '@angular/core';
import { LoginResponse } from './user-login/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private user!: LoginResponse;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || 'null') as LoginResponse;
  }

  isLoggedIn():boolean{
    return !!this.user;
  }
  getUser():LoginResponse | null{
    return this.isLoggedIn() ? this.user : null;
  }
  getUserToken(): string | null {
    return this.isLoggedIn() ? this.user.access_token : null;
  }
}