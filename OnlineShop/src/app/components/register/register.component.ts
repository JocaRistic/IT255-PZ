import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, imePrezimeValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForma: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  //kreiranje forme pomocu FormBuilder
  createRegisterForm(){
    this.registerForma = this.fb.group({
      ime: ['', Validators.compose([Validators.required, imePrezimeValidator])],
      prezime: ['', Validators.compose([Validators.required, imePrezimeValidator])],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      lozinka: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  //funkcija za registraciju
  registrujSe(){
    console.log(this.registerForma.value)
  }
}
