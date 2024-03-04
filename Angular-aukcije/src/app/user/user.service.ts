import { Injectable } from "@angular/core";
import { LoginResponse } from "../user-login/login-response";

@Injectable({ providedIn: "root" })
export class UserService {
    getUserToken() {
        const user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
        return user.access_token;
    }
}