import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service'; 

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!route.data.roles) {
      return true;
    }
    if (this.authService.getUser() && route.data.roles.includes(this.authService.getUser().role)) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { from: route.url } });
    return false;
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
