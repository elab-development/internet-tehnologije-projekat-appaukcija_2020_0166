import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, pipe, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }
  constructor(private loginService: LoginServiceService, private router: Router) { }
  ngOnInit(): void {

  }

  onLogin() {
    this.loginService.logIn(this.loginObj.userName, this.loginObj.password)
    .subscribe(response => 
      {
        response.userName = this.loginObj.userName;
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/']);
      }, error=> {console.log(error);});

  }
}
