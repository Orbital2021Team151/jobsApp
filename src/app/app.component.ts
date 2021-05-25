import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jobsApp';

  constructor(private authService: AuthService) {}
  private authStatusSub: Subscription;
  public authStatusObject: any;

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      console.log("inside app-component's ngOnInit here!");
      console.log(authObject);
      this.authStatusObject = authObject;
    });
    this.authService.autoAuthUser();
  }


  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }



}
