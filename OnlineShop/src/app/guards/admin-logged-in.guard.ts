import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AdminLoggedInGuard implements CanActivate{

    constructor(private _authSevice: AuthService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAdminLoggedIn = this._authSevice.adminLoggedIn();
        return isAdminLoggedIn;
    }
}
