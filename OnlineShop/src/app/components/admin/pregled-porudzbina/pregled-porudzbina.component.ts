import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { KorisnikModel } from 'src/app/models/korisnik.model';
import { PorudzbinaModel } from 'src/app/models/porudzbina.model';
import { TelefonModel } from 'src/app/models/telefon.model';
import { deletePorudzbina, getPorudzbine, updatePorudzbina } from 'src/app/store/actions/porudzbina.actions';
import { getPorudzbinaByIdSelector, getPorudzbineSelector } from 'src/app/store/selectors/porudzbina.selector';
import { AppState } from 'src/app/store/state/app.state';
import { getTelefonByIdSelector, getTelefoniSelector } from 'src/app/store/selectors/telefon.selector';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { getTelefoni } from 'src/app/store/actions/telefon.actions';

@Component({
  selector: 'app-pregled-porudzbina',
  templateUrl: './pregled-porudzbina.component.html',
  styleUrls: ['./pregled-porudzbina.component.css']
})
export class PregledPorudzbinaComponent{

  porudzbine: PorudzbinaModel[];
  telefon: TelefonModel;
  kupci: KorisnikModel[];
  kupac: KorisnikModel;

  constructor(private store: Store<AppState>, private _korisnikService: KorisnikService){
    this.store.select(getPorudzbineSelector).subscribe((porudzbine) => {
      this.porudzbine = porudzbine;
    });

    this.store.dispatch(getPorudzbine());
    this.store.dispatch(getTelefoni());

    this._korisnikService.getKorisnici().subscribe((data:any) => {
      this.kupci = data;
    })
  }

  //vraca telefon za uneti id
  getTelefon(id: any){
    this.store.select(getTelefonByIdSelector, id).subscribe((data: any) => {
      this.telefon = data;
    })

    if(this.telefon){
      return this.telefon;
    } else{
      return;
    }
  }

  //vraca korisnika za uneti id
  getKupac(id: any){
    for(let i = 0; i < this.kupci?.length; i++){
      if (this.kupci[i].id === id) {
        this.kupac = this.kupci[i];
      }
    }

    if(this.kupac){
      return this.kupac;
    }else{
      return;
    }
  }

  //metoda salje akciju za brisanje porudzbine kroz metodu dispatch objekta store
  //zatim salje akciju za ucitavanje svih porudzbina 
  obrisiPorudzbinu(id: any){
    this.store.dispatch(deletePorudzbina({ id }));
    this.store.dispatch(getPorudzbine());
  }

  azurirajPorudzbinu(porudzbina: PorudzbinaModel){
    const updatedPorudzbina: PorudzbinaModel = new PorudzbinaModel(porudzbina.adresaDostave, porudzbina.postanskiBroj, porudzbina.brojTelefona, 'isporuceno', porudzbina.korisnikId, porudzbina.telefonId, porudzbina.id);
    this.store.dispatch(updatePorudzbina({ porudzbina: updatedPorudzbina }));
    this.store.dispatch(getPorudzbine());
  }

}
