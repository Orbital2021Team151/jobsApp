import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: string[] = ["Admin", "External Organisation", "Student Organisation", "Student"];
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
