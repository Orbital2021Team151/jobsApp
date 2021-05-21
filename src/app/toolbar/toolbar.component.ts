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
  orgName: string;
  private authStatusObject;

  constructor(private authService: AuthService) {};

  onLogout() {
    this.authService.logout();
  }


  ngOnInit() {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(authObject => {
      this.userIsAuthenticated = authObject.auth;
      this.authStatusObject = this.authService.getAuthStatusObject();
    })
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
