import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({
          position: 'relative'
        }),

        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),

        query(':enter', [
          style({
            opacity: 0
          })
        ], { optional: true }),

        query(':leave', [
          style({
            display: 'block'
          }),

          animate(250, style({
            opacity: 0,
          }))
        ], { optional: true }),


        query(':enter', [
          style({
            opacity: 0,
            display: 'block',
            height: '100%'
          }),
          animate(250, style({
            opacity: 1,
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jobsApp';
  active = 'changePassword';

  public showOverlay: boolean = true;

  constructor(private authService: AuthService, private router: Router) {

    if (localStorage.getItem('expiration')) {

    const expiryDate: Date = new Date(localStorage.getItem('expiration'));
    const rightNow = new Date();
    const diff = expiryDate.getTime() - rightNow.getTime();

      if (diff <= 0) {
      localStorage.clear();
      this.router.navigate(['/expiredSession']);
      }
    }
    if (localStorage.getItem('token')) {
      this.authService.autoAuthUser();
    }

    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  private authStatusSub: Subscription;
  public authStatusObject: any;

  ngOnInit() {
    //this.authService.autoAuthUser();
    //this.authStatusObject = this.authService.getAuthStatusObject();

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
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }


}
