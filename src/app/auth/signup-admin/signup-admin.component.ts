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
  roles: any = ["Admin", "External Organisation", "Internal Organisation", "Student"];
  hidePassword = true;
  signedUp: boolean;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}


  //signup should be ok for async???????????????????????????
  //TODO: Run some buggy cases eg go sign up a new admin and new non-admin accounts and see how it goes
  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatusObject => {
        if (!authStatusObject.auth) {
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

    if (this.authService.signedUp) {
      this.signedUp = true;
    } else {
      this.signedUp = false;
    }

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
