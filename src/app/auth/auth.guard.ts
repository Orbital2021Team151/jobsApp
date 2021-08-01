import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    /*
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
    */
   const admin: boolean = this.authService.getAuthStatusObject().admin;
   const isAuth = this.authService.getIsAuth();

  //  console.log("auth guard is being tickled!");


   if (route.data.signup && isAuth) {
    console.log("it works 3!");
    this.router.navigate(['/']);
    return false;
   }

   if (route.data.expiredSession && isAuth) {
     console.log("it works!");
     this.router.navigate(['/']);
     return false;
   } 
    if (route.data.login && isAuth) {
    console.log("it works 2!");
    this.router.navigate(['/']);
    return false;
   }

   if ((route.data.login || route.data.signup || route.data.expiredSession) && !isAuth) {
     return true;
   }
    

   if (isAuth) {
     if (admin) {
       return true;
     } else if (!admin && route.data.admin) {
       this.router.navigate(['/']);
       return false;
     } else if (!route.data.admin && !admin) {
       return true;
     } else {
      this.router.navigate(['/']);
      return false; 
     }
   } else {
     this.router.navigate(['/login']);
     return false;
   }
   return true;
  }

}
