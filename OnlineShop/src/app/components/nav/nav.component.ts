import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck{

  isLogged: boolean;
  isAdmin: boolean;

  constructor(private _authService: AuthService){

  }

  ngDoCheck(): void {
    this.isLogged = this._authService.isLoggedIn();
    this.isAdmin = this._authService.adminLoggedIn();
  }

  logout(){
    this._authService.logout();
  }

}
