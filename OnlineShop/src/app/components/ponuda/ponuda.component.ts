import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TelefonModel } from 'src/app/models/telefon.model';
import { AuthService } from 'src/app/services/auth.service';
import { deleteTelefon, getTelefoni } from 'src/app/store/actions/telefon.actions';
import { getTelefoniSelector } from 'src/app/store/selectors/telefon.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit, DoCheck{

  telefoni$: Observable<TelefonModel[]>;
  isAdmin: boolean;

  constructor(private store: Store<AppState>,
              private _authService: AuthService){
  }

  ngOnInit(): void {
    this.telefoni$ = this.store.select(getTelefoniSelector);
    this.store.dispatch(getTelefoni());
  }

  ngDoCheck(): void {
    this.isAdmin = this._authService.adminLoggedIn();
  }

  //metoda salje akciju za brisanje telefona kroz metodu dispatch objekta store
  //zatim salje akciju za ucitavanje svih telefona
  obrisiTel(id: any){
    this.store.dispatch(deleteTelefon({ id }));
    this.store.dispatch(getTelefoni());
  }

}
