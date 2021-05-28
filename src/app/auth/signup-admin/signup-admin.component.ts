import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: any = ["Admin", "External Organisation", "Student Organisation", "Student"];
  hidePassword = true;
  signedUp: boolean;
  //private authStatusObject;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    //this.authStatusObject = this.authService.getAuthStatusObject();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authObject => {
        if (!authObject.auth) {
          this.isLoading = false;
          this.signedUp = false;
        }
      }
    );
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUserAdmin(form.value.email, form.value.password, form.value.role, form.value.orgName, form.value.uen);

    //IDK IF THIS FIXES IT BUT I THINK IT IS WORKING?
    this.authService.getSignupListener().subscribe(result => {
      this.signedUp = result;
    });

    /*
    if (this.authService.signedUp) {
      this.signedUp = true;
    } else {
      this.signedUp = false;
    }
    */

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
