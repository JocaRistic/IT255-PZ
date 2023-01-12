import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { emailValidator } from 'src/app/validators/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForma: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService){}

  ngOnInit(): void {
    this.createLoginForm();
  }

  //kreiranje forme pomocu FormBuilder
  createLoginForm(){
    this.loginForma = this.fb.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      lozinka: ['', Validators.required]
    })
  }

  //funckija sluzi za login korisnika, tako sto poziva funkciju login servisa authService
  //i prosledjuje joj email i lozinku
  ulogujSe(){
    if(!this.loginForma.valid){
      return;
    }

    const email = this.loginForma.controls['email'].value;
    const lozinka = this.loginForma.controls['lozinka'].value;

    this._authService.login(email, lozinka);
  }

}
