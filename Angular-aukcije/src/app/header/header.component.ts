import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../user-login/login-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public user!: LoginResponse | null;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
  }
}
