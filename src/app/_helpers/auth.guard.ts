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
            if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }

        // not authorised
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}