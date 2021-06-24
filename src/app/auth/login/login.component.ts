import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: string[] = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
  hidePassword = true;
  authStatusSub: Subscription;
  loggedIn: boolean;
  newPasswordSent = false;


  constructor(public authService: AuthService, private modalService: NgbModal) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatusObject => {
        if (!authStatusObject.auth) {
          this.isLoading = false;
          this.loggedIn = false;
        }
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    //TODO: Need to change this method to be backend taking in the" student / nus alumni" role if our project gets selected.
    // this is currently just a temp fix to conform to backend's role since a lot of the accounts have been set up as "Student" strictly already
    var selectedRole = "";
    if (form.value.role === "Student / NUS Alumni") {
      selectedRole = "Student";
    } else {
      selectedRole = form.value.role;
    }
    this.authService.login(form.value.email, form.value.password, form.value.role);
    this.authService.autoAuthUser();
  }

  onOpenForgetPassword(forgetPasswordContent) {
    this.modalService.open(forgetPasswordContent, { size: 'lg' });
  }
  onForgetPassword(form: NgForm) {
    if (form.invalid) {
      return false;
    }

    //console.log("onForgetPassword Fired!");
    //console.log(form.value.forgetPasswordEmail);
    //console.log(form.value.forgetPasswordRole);

    this.authService.forgetPassword(form.value.forgetPasswordEmail, form.value.forgetPasswordRole);
    this.authService.getLoginListener().subscribe((res) => {
      this.newPasswordSent = res;
    });
  }

  closeNotification() {
    this.newPasswordSent = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
