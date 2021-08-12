import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { ForgetPasswordDialog } from "src/app/dialogs/forget-password-dialog/forget-password-dialog.component";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: string[] = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
  showPassword = false;
  authStatusSub: Subscription;
  loggedIn: boolean;
  newPasswordSent = false;


  constructor(public authService: AuthService, private modalService: NgbModal, private dialog: MatDialog) {}

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

    this.authService.login(form.value.email, form.value.password);
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

    this.authService.forgetPassword(form.value.forgetPasswordEmail);
    this.authService.getLoginListener().subscribe((res) => {
      this.newPasswordSent = res;
    });

    this.modalService.dismissAll();
    this.dialog.open(ForgetPasswordDialog);
  }

  closeNotification() {
    this.newPasswordSent = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
