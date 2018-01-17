import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const data = route.data as any;
    if (!data.roles) {
      return true;
    }
    if (this.authService.isLoggedIn() && 
        data.roles.includes(this.authService.getRole())) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { from: route.url } });
    return false;
  }

  public canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route);
  }
}
