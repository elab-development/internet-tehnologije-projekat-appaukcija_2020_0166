import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../user-login/login-response';
import { UserLogoutService } from '../user-logout/user-logout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public user!: LoginResponse | null;
  userToken!: string;
  constructor(private logOutService: UserLogoutService) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
  }
  onLogout() {

    if (this.userToken !== null) {

      this.logOutService.logout(this.userToken).
        subscribe(response => {
          console.log(response)
        }, error => { console.log(error); });
      localStorage.removeItem('user');
     
    }

    else {
      console.warn('User token is null. Logout not performed.');
    }
  }
}
