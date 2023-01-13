import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { PorucivanjeComponent } from './components/porucivanje/porucivanje.component';
import { RegisterComponent } from './components/register/register.component';
import { TelefonCardComponent } from './components/telefon-card/telefon-card.component';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo:'pocetna', pathMatch:'full'},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'ponuda', component: PonudaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'telefon/:id', component: TelefonCardComponent},
  {path: 'poruci/:id', component: PorucivanjeComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
