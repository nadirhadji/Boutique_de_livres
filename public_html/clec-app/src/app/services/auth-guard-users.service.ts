import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardUsersService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): any {

      if(this.authService.isAuthUser) {
        return true;
      } else {
        this.router.navigate(['/404']);
      }
    }
}
