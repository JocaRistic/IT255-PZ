import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TelefonModel } from 'src/app/models/telefon.model';
import { getTelefoni } from 'src/app/store/actions/telefon.actions';
import { getTelefoniSelector } from 'src/app/store/selectors/telefon.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit{
  public telefoni$: Observable<TelefonModel[]>;

  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.telefoni$ = this.store.select(getTelefoniSelector);
    this.store.dispatch(getTelefoni());
  }

}
