import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck{

  isLogged: boolean;

  constructor(private _authService: AuthService){

  }

  ngDoCheck(): void {
    this.isLogged = this._authService.isLoggedIn();
  }

  logout(){
    this._authService.logout();
  }

}
