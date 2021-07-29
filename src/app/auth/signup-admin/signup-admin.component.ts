import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { WrongStudentEmailDialog } from "src/app/dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component";
import { AuthService } from "../auth.service";
import { SignupAlertComponent } from "../signup-alert/signup-alert.component";

@Component({
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupAdminComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: any = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
  hidePassword = true;
  //private authStatusObject;
  private authStatusSub: Subscription;

  /* FormGroup version */
  public form: FormGroup;
  public roleControl = new FormControl(null);
  public orgNameControl = new FormControl(null);
  public emailControl = new FormControl(null);
  public uenControl = new FormControl(null);
  public passwordControl = new FormControl(null);

  constructor(public authService: AuthService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.form = new FormGroup({
      //hideRequired: this.hideRequiredControl,
      //floatLabel: this.floatLabelControl,
      role: this.roleControl,
      orgName: this.orgNameControl,
      email: this.emailControl,
      uen: this.uenControl,
      password: this.passwordControl,
    });
  }

  ngOnInit() {
    //this.authStatusObject = this.authService.getAuthStatusObject();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authObject => {
        if (!authObject.auth) {
          this.isLoading = false;
        }
      }
    );
  }


  onSignupReactive() {

    console.log("Reactive form is:");
    console.log(this.form);

    if (this.form.value.role === "Student / NUS Alumni") {
      if (this.form.value.email.indexOf("@u.nus.edu") == -1) {
        this.dialog.open(WrongStudentEmailDialog);
        return;
      }
    }

    if (this.form.invalid) {
      //console.log("Reactive Form is invalid! It is:");
      //console.log(this.form);
      return;
    }

    // this.authService.createUser(
    //   this.form.value.name,
    //   this.form.value.email,
    //   this.form.value.password,
    // );

    this.authService.getSignupListener().subscribe(result => {
      this.openSignupSuccessSnackBar();
      this.form.reset();
      Object.keys(this.form.controls).forEach(key =>{
        this.form.controls[key].setErrors(null)
     });
    });
  }

  openSignupSuccessSnackBar() {
    this._snackBar.openFromComponent(SignupAlertComponent, {
      duration: 3 * 1000,
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
