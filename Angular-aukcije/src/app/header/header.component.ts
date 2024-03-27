import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../user-login/login-response';
import { UserLogoutService } from '../user-logout/user-logout.service';
import { Router } from '@angular/router';
import { AddItemService } from '../add-Item/add-item.service';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from '../authservice';
import { UserLoggedInEvent } from '../user-login/user-login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public user!: LoginResponse | null;
  userToken!: string;

  constructor(private logOutService: UserLogoutService, private router: Router,
    private matDialog: MatDialog, private userLoggedInEvent: UserLoggedInEvent,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.userLoggedInEvent.eventObservable.subscribe(user => {
      this.user = user;
      this.userToken = user.access_token;
    });
    this.user=this.authService.getUser();
    if(this.user!=null){
      this.userToken=this.user.access_token;
    }
  }

  onLogout() {

    if (this.userToken !== null) {

      this.logOutService.logout().
        subscribe(response => {
          console.log(response)
        }, error => { console.log(error); });
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      window.location.reload();
    }

    else {
      console.warn('User token is null. Logout not performed.');
    }
  }
  onClickCart() {
    console.log(this.userToken);
    if (this.userToken !== undefined) {
      this.router.navigate(['/cart']);
    }

    else {
      alert('Ulogujte se da bi ste pristupili svojim predmetima!');
      this.router.navigate(['/user-login']);
    }
  }
  onClickFollow() {
    if (this.userToken !== undefined) {
      this.router.navigate(['/follow-page']);
    }

    else {
      alert('Ulogujte se da bi ste pristupili aukcijama koje pratite!');
      this.router.navigate(['/user-login']);
    }
  }
  AddAuction() {
    this.matDialog.open(AddItemDialogComponent, {
      width: '350px'
    })


  }
}
