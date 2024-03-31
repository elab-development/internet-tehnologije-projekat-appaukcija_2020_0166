import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../forget-password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  resetEmail: string = "";
  validationMessage: string = "";
  users: User[] = [];
  userEmails: string[] = [];
  constructor(private forgetPasswordService: ForgetPasswordService, private router: Router,
    private activatedRoute: ActivatedRoute ) {

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      const responseData = data['usersData'] as { users: User[] };;
      this.users = responseData.users;
     

    })
    this.users.forEach(element => {
      this.userEmails.push(element.email);
    });
  
  }
  public forgetPassword() {
    
    if (this.resetEmail == "") {
      this.validationMessage = "Morate uneti Email adresu!"
      return;
    }
    if (this.users.some(element => element.email === this.resetEmail)) {

    }
    else{
      this.validationMessage = "Email adresa nije ispravna!"
      return;
    }
   
    this.forgetPasswordService.sendResetLink(this.resetEmail).subscribe(response => {
      alert("Reset link vam je poslat na mail!")
    }, error => {
      console.log(error);
      return;
    }
    )
   
  }
}
