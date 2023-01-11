import { FormControl } from "@angular/forms";

//proverava da li je email validan
export function emailValidator(control: FormControl): { [key: string]: any } | null {
  var pattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
  return pattern.test(control.value) ? null : { invalidEmail: true };
}

//proverava da li je ime ili prezime validno
export function imePrezimeValidator(control: FormControl): { [key: string]: any } | null {
  var pattern = new RegExp("^[a-zA-Z]+$");
  if(!pattern.test(control.value) || (control.value.length < 3)){
    return { invalidImePrezime: true };
  }else{
    return null;
  }
}
