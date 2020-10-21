import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../services/account.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    public className = '[AuthGuard] ';

    constructor(private router: Router, private accountService: AccountService) {};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }

        // not authorised
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}