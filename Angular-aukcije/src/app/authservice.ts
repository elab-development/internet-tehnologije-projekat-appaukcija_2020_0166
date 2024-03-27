import { Injectable } from '@angular/core';
import { LoginResponse } from './user-login/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn(): boolean {
    return !!this.getUserFromStorage();
  }
  getUser(): LoginResponse | null {
    return this.isLoggedIn() ? this.getUserFromStorage() : null;
  }
  getUserToken(): string | null {
    return this.isLoggedIn() ? this.getUserFromStorage().access_token : null;
  }

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user') || 'null') as LoginResponse;
  }

}