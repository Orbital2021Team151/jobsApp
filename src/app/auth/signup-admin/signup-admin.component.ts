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
  roles: any = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
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

    var selectedRole = "";
    if (form.value.role === "Student / NUS Alumni") {
      selectedRole = "Student";
    } else {
      selectedRole = form.value.role;
    }

    this.authService.createUserAdmin(form.value.email, form.value.password, selectedRole, form.value.orgName, form.value.uen);

    //IDK IF THIS FIXES IT BUT I THINK IT IS WORKING?
    this.authService.getSignupListener().subscribe(result => {
      this.signedUp = result;
    });

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
