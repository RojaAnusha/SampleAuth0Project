import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
	constructor(private router:Router, private auth:AuthService) { }

	canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
		if(this.auth.isAuthenticated()) {
			console.log("auth guard passed");
			return true;
		} else {
			console.log("auth guard blocked");
			this.router.navigate(['/']);
			return false;
		}
	}
}