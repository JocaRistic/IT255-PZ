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

  //brisanje porudzbine iz baze za uneti id
  public deletePorudzbina(id?: number): Observable<PorudzbinaModel>{
    return this._http.delete<PorudzbinaModel>(this.baseUrl + '/' + id);
  }

  //funkcija vrsi update neke porudzbine
  public updatePorudzbina(porudzbina: PorudzbinaModel): Observable<PorudzbinaModel>{
    return this._http.patch<PorudzbinaModel>(this.baseUrl + '/' + porudzbina.id, porudzbina);
  }

}
