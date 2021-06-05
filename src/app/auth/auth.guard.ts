import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const role = this.authService.getAuthStatusObject().role;
    const isAuth = this.authService.getIsAuth();
    if (isAuth) {
      if (route.data.roles && route.data.roles.indexOf(role) === -1) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
