import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../user-login/login-response';
import { UserLogoutService } from '../user-logout/user-logout.service';
import { Router } from '@angular/router';
import { AddItemService } from '../add-Item/add-item.service';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public user!: LoginResponse | null;
  userToken!: string;
  
  constructor(private logOutService: UserLogoutService, private router: Router,
    private addItemService: AddItemService,private matDialog: MatDialog,) { }
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
