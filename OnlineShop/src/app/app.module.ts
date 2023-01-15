import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { KorisnikService } from './services/korisnik.service';
import { AuthService } from './services/auth.service';
import { TelefonService } from './services/telefon.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TelefonEffect } from './store/effects/telefon.effects';
import { appReducers } from './store/state/app.state';
import { TelefonCardComponent } from './components/telefon-card/telefon-card.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { PorucivanjeComponent } from './components/porucivanje/porucivanje.component';
import { DodajTelefonComponent } from './components/admin/dodaj-telefon/dodaj-telefon.component';
import { AdminLoggedInGuard } from './guards/admin-logged-in.guard';
import { UpdateTelefonComponent } from './components/admin/update-telefon/update-telefon.component';
import { PorudzbinaService } from './services/porudzbina.service';
import { PorudzbinaEffect } from './store/effects/porudzbina.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PocetnaComponent,
    PonudaComponent,
    LoginComponent,
    RegisterComponent,
    TelefonCardComponent,
    PorucivanjeComponent,
    DodajTelefonComponent,
    UpdateTelefonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TelefonEffect, PorudzbinaEffect])
  ],
  providers: [
    KorisnikService, 
    AuthService, 
    TelefonService,
    PorudzbinaService,
    LoggedInGuard,
    AdminLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
