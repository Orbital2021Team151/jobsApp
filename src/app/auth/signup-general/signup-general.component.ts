import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css']
})
export class SignupGeneralComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: any = ["External Organisation", "Student Organisation", "Student / NUS Alumni"];
  hidePassword = true;
  signedUp: boolean;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private http: HttpClient) {}

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

    this.authService.createUser(
      form.value.email,
      form.value.password,
      form.value.role,
      form.value.orgName,
      form.value.uen
    );

    this.authService.getSignupListener().subscribe(result => {
      this.signedUp = result;
    });
  }


  closeNotification() {
    this.signedUp = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
