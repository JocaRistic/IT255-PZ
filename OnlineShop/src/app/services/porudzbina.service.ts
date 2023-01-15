import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PorudzbinaModel } from '../models/porudzbina.model';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {

  private baseUrl = 'http://localhost:3000/porudzbine';

  constructor(private _http: HttpClient) { }

  //citanje svih porudzbina
  public getPorudzbine(): Observable<PorudzbinaModel[]> {
    return this._http.get<PorudzbinaModel[]>(this.baseUrl);
  }

  //dodavanje porudzbine u bazu
  public addPorudzbina(porudzbina: PorudzbinaModel): Observable<PorudzbinaModel> {
    return this._http.post<PorudzbinaModel>(this.baseUrl, porudzbina);
  }
}
