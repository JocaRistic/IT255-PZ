import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DodajTelefonComponent } from './components/admin/dodaj-telefon/dodaj-telefon.component';
import { PregledPorudzbinaComponent } from './components/admin/pregled-porudzbina/pregled-porudzbina.component';
import { UpdateTelefonComponent } from './components/admin/update-telefon/update-telefon.component';
import { LoginComponent } from './components/login/login.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { PorucivanjeComponent } from './components/porucivanje/porucivanje.component';
import { RegisterComponent } from './components/register/register.component';
import { TelefonCardComponent } from './components/telefon-card/telefon-card.component';
import { AdminLoggedInGuard } from './guards/admin-logged-in.guard';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo:'pocetna', pathMatch:'full'},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'ponuda', component: PonudaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'telefon/:id', component: TelefonCardComponent},
  {path: 'poruci/:idTelefona', component: PorucivanjeComponent, canActivate: [LoggedInGuard]},
  {path: 'dodajtel', component: DodajTelefonComponent, canActivate: [AdminLoggedInGuard]},
  {path: 'updatetel/:id', component: UpdateTelefonComponent, canActivate: [AdminLoggedInGuard]},
  {path: 'porudzbine', component: PregledPorudzbinaComponent, canActivate: [AdminLoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
