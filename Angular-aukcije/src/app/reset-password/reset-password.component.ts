import { Component } from '@angular/core';
import { ResetPasswordService } from '../reset-password.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetEmail: string = "";
  token: string = "";
  validationMessage = "";
  constructor(private resetPasswordService: ResetPasswordService, private route: ActivatedRoute
    , private router: Router) {

    route.queryParams.subscribe((params) => {
     
      if (params['email'])
        this.resetEmail = params['email'];
        this.token = params['token'];
    })
  }
  ngOnInit(): void {

  }

  resetPassword(password: string, confirmPassword: string) {

    if (this.token == "" || password == "" || confirmPassword == "") {
      this.validationMessage = "Morate uneti sve parametre!";
      return;
    }
    if (password != confirmPassword) {
      this.validationMessage = "Sifre moraju biti iste!"
      return;
    } this.validationMessage = "";

    if (password.length < 8) {
      this.validationMessage = "Sifra mora imati najmanje osam karaktera!"
      return;
    }

    this.resetPasswordService.sendResetLink(this.resetEmail, this.token, password, confirmPassword).subscribe(response => {
      alert("Uspesno ste zamenili lozinku!")
    }, error => {
      console.log(error);
    });
    this.router.navigate(['/user-login']);
  }

}
