import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KorisnikModel } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private baseUrl = 'http://localhost:3000/korisnici';

  constructor(private _http: HttpClient) { }

  //citanje svih korisnika
  public getKorisnici(): Observable<KorisnikModel[]> {
    return this._http.get<KorisnikModel[]>(this.baseUrl);
  }

  //citanje korisnika za uneti id
  public getKorisnik(id: number): Observable<KorisnikModel> {
    return this._http.get<KorisnikModel>(this.baseUrl + '/' + id);
  }

  //dodavanje korisnika u bazu
  public addKorisnik(korisnik: KorisnikModel): Observable<KorisnikModel> {
    return this._http.post<KorisnikModel>(this.baseUrl, korisnik);
  }

}
