import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikModel } from '../models/korisnik.model';
import { KorisnikService } from './korisnik.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private prijavljenKorisnik: any = null;
  private isAdmin: boolean = false;

  constructor(private _korisnikService: KorisnikService, private router: Router) { }

  //funkcija vrsi login tako sto prima email i pass, poziva servis i cita sve korisnike
  //i gleda da li postoji korisnik sa unetim podacima, ukoliko postoji dodaje ga 
  //promenljivoj prijavljeniKorisnik
  login(email: string, pass: string){
    this._korisnikService.getKorisnici().subscribe(res => {
      this.prijavljenKorisnik = res.find((k: KorisnikModel) => {
        return k.email === email && k.lozinka === pass;
      })

      if(this.prijavljenKorisnik){
        // alert('Login je uspesan');
        localStorage.setItem('korisnik', JSON.stringify(this.prijavljenKorisnik));

        if (this.prijavljenKorisnik.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }

        this.router.navigate(['/pocetna']);
      } else{
        this.prijavljenKorisnik = null;
        alert("Login nije uspesan");
      }

    })
  }

  //funckija za logout, postavlja promenljivu prijavljenKorisnik na null
  //brise item korisnik iz localStorage i prosledjuje nas na stranicu login
  logout(){
    this.prijavljenKorisnik = null;
    this.isAdmin = false;
    localStorage.removeItem('korisnik');
    this.router.navigate(['/login']);
  }

  //funckija registruje korisnika tako sto na osnovu primljenih argumenata kreira objekat tipa korisnik
  //i poziva funkciju servisa korisnikService koja upisuje tog korisnika u bazu
  register(ime: string, prezime: string, email: string, lozinka: string){
    const korisnik = new KorisnikModel(ime, prezime, email, lozinka, 'user');
    this._korisnikService.addKorisnik(korisnik).subscribe((res) => {
      alert('Uspesno ste se registrovali');
      this.router.navigate(['/login']);
    })
  }

  //funkcija vraca prijavljenog korisnika sacuvanog u localStorage
  getKorisnik(): any {
    return localStorage.getItem('korisnik');
  }

  //funkcija vraca true ili false u zavisnosti da li je korisnik prijavljen,
  //odnosno da li u localStorage postoji korisnik
  isLoggedIn(): boolean {
    return this.getKorisnik() !== null;
  }

  //funkcija vraca true ukoliko je admin ulogovan, ukoliko je obican korisnik vraca false
  adminLoggedIn(): boolean {
    return this.isAdmin;
  }

}
