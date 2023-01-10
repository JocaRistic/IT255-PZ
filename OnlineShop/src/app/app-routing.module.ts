import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';

const routes: Routes = [
  {path: '', redirectTo:'pocetna', pathMatch:'full'},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'ponuda', component: PonudaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
