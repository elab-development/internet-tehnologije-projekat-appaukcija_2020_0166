import { Component, Injectable, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserRegisterService } from '../user-register/user-register.service';

@Injectable({ providedIn: 'root' })
export class UserLoggedInEvent {
  private eventSubject = new Subject<any>();
  public eventObservable = this.eventSubject.asObservable();
  emitEvent(event: any) {
    this.eventSubject.next(event);
  }
}

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
    password: '',
    broj_telefona: '',
    adresa: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }
  constructor(private loginService: LoginServiceService, private router: Router, private registerService: UserRegisterService, private userLoggedInEvent: UserLoggedInEvent) { }
  ngOnInit(): void {

  }
  onSignUp() {
    this.registerService.register(this.signupObj.userName, this.signupObj.email, this.signupObj.password, this.signupObj.broj_telefona, this.signupObj.adresa)
      .subscribe(response => {
        console.log(response);

      }, error => { console.log(error); });

  }
  onLogin() {
    this.loginService.logIn(this.loginObj.userName, this.loginObj.password)
      .subscribe(response => {
        response.userName = this.loginObj.userName;
        localStorage.setItem('user', JSON.stringify(response));
        this.userLoggedInEvent.emitEvent(response);
        this.router.navigate(['/']);
      }, error => { console.log(error); });

  }
}
