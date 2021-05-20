import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  role: string;

  constructor(private authService: AuthService) {};

  onLogout() {
    this.authService.logout();
  }


  ngOnInit() {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(authAndRoleObject => {
      this.userIsAuthenticated = authAndRoleObject.auth;
      this.role = authAndRoleObject.role;
    })
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
