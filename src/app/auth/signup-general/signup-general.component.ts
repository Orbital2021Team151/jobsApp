import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppliedBeforeDialog } from 'src/app/dialogs/applied-before-dialog/applied-before-dialog.component';
import { WrongStudentEmailDialog } from 'src/app/dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component';
import { AuthService } from '../auth.service';
import { SignupAlertComponent } from '../signup-alert/signup-alert.component';

@Component({
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupGeneralComponent implements OnInit, OnDestroy {
  signedUp: boolean;
  private authStatusSub: Subscription;

  /* FormGroup version */
  public form: FormGroup;
  public nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
  ]);
  public emailControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(10),
  ]);
  public passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
  ]);
  public showPasswordControl = new FormControl(false);

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {

    this.form = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      password: this.passwordControl,
      showPassword: this.showPasswordControl,
    });
  }

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatusObject) => {
        if (!authStatusObject.auth) {
          this.signedUp = false;
        }
      });
  }

  //could throw an error if email is used before
  onSignupReactive() {

    if (this.form.invalid) {
      console.log("Reactive Form is invalid! It is:");
      return;
    }

    this.authService.createUser(
       this.form.value.name,
       this.form.value.email,
       this.form.value.password,
     );

    this.authService.getSignupListener().subscribe((resultBoolean) => {
      this.nameControl.reset();
      this.emailControl.reset();
      this.passwordControl.reset();
      this.showPasswordControl.reset();

      this.form = new FormGroup({
        name: this.nameControl,
        email: this.emailControl,
        password: this.passwordControl,
        showPassword: this.showPasswordControl,
      });

      this.openSignupSuccessSnackBar();
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);
    });
  }

  openSignupSuccessSnackBar() {
    this._snackBar.openFromComponent(SignupAlertComponent, {
      duration: 3 * 1000,
    });
  }

  closeNotification() {
    this.signedUp = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
