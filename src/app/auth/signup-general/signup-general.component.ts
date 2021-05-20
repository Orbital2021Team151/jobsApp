import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css']
})
export class SignupGeneralComponent {
  isLoading = false;
  roles: any = ["External Organisation", "Student Organisation", "Student"];
  hidePassword = true;
  signedUp: boolean = false;

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.signedUp = true;
    this.authService.createUser(form.value.email, form.value.password, form.value.role, form.value.orgName, form.value.uen);
  }

  closeNotification() {
    this.signedUp = false;
  }
}
