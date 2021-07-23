import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './can-deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class DirtycheckGuard implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return true;
    } else {
      return confirm("Are you sure you want to leave this page? Changes will not be saved!");
    }
  }

}
