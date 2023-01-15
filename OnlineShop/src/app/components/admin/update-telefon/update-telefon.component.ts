import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TelefonModel } from 'src/app/models/telefon.model';
import { updateTelefon } from 'src/app/store/actions/telefon.actions';
import { getTelefonByIdSelector } from 'src/app/store/selectors/telefon.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-update-telefon',
  templateUrl: './update-telefon.component.html',
  styleUrls: ['./update-telefon.component.css']
})
export class UpdateTelefonComponent implements OnInit{

  updateTelefonForma: FormGroup;
  telefon: TelefonModel;

  constructor(private fb: FormBuilder, 
              private store: Store<AppState>, 
              private actRoute: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      const id = params['id'];
      this.store.select(getTelefonByIdSelector, id).subscribe((data: any) => {
        this.telefon = data;
        this.createUpdateTelefonForm();
      })
    })
  }

  //kreiranje forme pomocu FormBuilder
  createUpdateTelefonForm(){
    this.updateTelefonForma = this.fb.group({
      brend: [this.telefon.brend, Validators.required],
      model: [this.telefon.model, Validators.required],
      dijagonalaEkrana: [this.telefon.dijagonalaEkrana, Validators.required],
      ram: [this.telefon.ram, Validators.required],
      memorija: [this.telefon.memorija, Validators.required],
      kamera: [this.telefon.kamera, Validators.required],
      baterija: [this.telefon.baterija, Validators.required],
      rezolucija: [this.telefon.rezolucija, Validators.required],
      cena: [this.telefon.cena, Validators.compose([Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/)])],
      slika: [this.telefon.slika, Validators.required],
    })
  }

  //metoda pravi objekat telefona od unetih podataka,
  //zatim nad store objektom poziva funkciju dispatch i prosledjuje
  //akciju updateTelefon kojoj prosledjuje objekat telefon koji hoce da promeni u bazu
  updateTel(){
    const id = this.telefon.id;
    const brend = this.updateTelefonForma.controls['brend'].value;
    const model = this.updateTelefonForma.controls['model'].value;
    const dijagonalaEkrana = this.updateTelefonForma.controls['dijagonalaEkrana'].value;
    const ram = this.updateTelefonForma.controls['ram'].value;
    const memorija = this.updateTelefonForma.controls['memorija'].value;
    const kamera = this.updateTelefonForma.controls['kamera'].value;
    const baterija = this.updateTelefonForma.controls['baterija'].value;
    const rezolucija = this.updateTelefonForma.controls['rezolucija'].value;
    const cena = Number.parseFloat(this.updateTelefonForma.controls['cena'].value);
    const slika = this.updateTelefonForma.controls['slika'].value;

    const telefon = new TelefonModel(brend, model, dijagonalaEkrana, ram, memorija, kamera, baterija, rezolucija, cena, slika, id);

    this.store.dispatch(updateTelefon({ telefon }));
    this.router.navigate(['telefon', this.telefon.id]);
  }

}