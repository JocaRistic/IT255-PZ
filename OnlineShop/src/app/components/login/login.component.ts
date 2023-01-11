import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/validators/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForma: FormGroup;

  constructor(private fb: FormBuilder){

  }

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
  //funckija sluzi za login korisnika
  ulogujSe(){
    console.log(this.loginForma);
  }

}
