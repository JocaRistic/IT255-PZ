import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TelefonModel } from '../models/telefon.model';

@Injectable({
  providedIn: 'root'
})
export class TelefonService {

  private baseUrl = 'http://localhost:3000/telefoni';

  constructor(private _http: HttpClient) { }

  //citanje svih telefona
  public getTelefoni(): Observable<TelefonModel[]>{
    return this._http.get<TelefonModel[]>(this.baseUrl);
  }

  //citanje telefona za uneti id
  public getTelefon(id?: number): Observable<TelefonModel>{
    return this._http.get<TelefonModel>(this.baseUrl + '/' + id);
  }

  //dodavanje telefona u bazu
  public addTelefon(telefon: TelefonModel): Observable<TelefonModel>{
    return this._http.post<TelefonModel>(this.baseUrl, telefon);
  }

  //brisanje telefona iz baze za uneti id
  public deleteTelefon(id?: number): Observable<TelefonModel>{
    return this._http.delete<TelefonModel>(this.baseUrl + '/' + id);
  }
}
