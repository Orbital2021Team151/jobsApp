import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

          animate(500, style({
            opacity: 0,
          }))
        ], { optional: true }),


        query(':enter', [
          style({
            opacity: 0,
            display: 'block',
            height: '100%'
          }),
          animate(500, style({
            opacity: 1,
          }))
        ], { optional: true })
      ])
    ])
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
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }


}
