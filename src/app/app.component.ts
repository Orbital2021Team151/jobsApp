import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jobsApp';

  constructor(private authService: AuthService) {
    if (localStorage.getItem('token')) {
      this.authService.autoAuthUser();
    }
  }
  private authStatusSub: Subscription;
  public authStatusObject: any;

  ngOnInit() {
    //this.authService.autoAuthUser();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      //console.log("inside app-component's ngOnInit here!");
      //console.log(authObject);
      this.authStatusObject = authObject;
      //this.authService.autoAuthUser();
      //console.log("PAGE REFRESHED!!!!!!");
    });
    //console.log("This line acTiVated!!!!!!");
    //this.authService.autoAuthUser();
  }


  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
