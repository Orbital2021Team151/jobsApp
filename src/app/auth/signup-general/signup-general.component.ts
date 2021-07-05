import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { AppliedBeforeDialog } from "src/app/dialogs/applied-before-dialog/applied-before-dialog.component";
import { WrongStudentEmailDialog } from "src/app/dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupGeneralComponent implements OnInit, OnDestroy {
  roles: any = ["External Organisation", "Student Organisation", "Student / NUS Alumni"];
  hidePassword = true;
  signedUp: boolean;
  private authStatusSub: Subscription;

  /* FormGroup version */
  public form: FormGroup;
  //public hideRequiredControl = new FormControl(false);
  //public floatLabelControl = new FormControl('auto');
  public roleControl = new FormControl('External / Student Organisation');
  public orgNameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public emailControl = new FormControl(null, [Validators.required, Validators.minLength(10)]);
  public uenControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public hideUenControl = new FormControl(false);
  public passwordControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    fb: FormBuilder,
    public dialog: MatDialog) {

    /*
    this.form = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      userType: this.userTypeControl,
      orgName: this.orgNameControl,
      email: this.emailControl,
      uen: this.uenControl,
      hideUen: this.hideUenControl,
      password: this.passwordControl,
    });
    */

    this.form = new FormGroup({
      //hideRequired: this.hideRequiredControl,
      //floatLabel: this.floatLabelControl,
      role: this.roleControl,
      orgName: this.orgNameControl,
      email: this.emailControl,
      uen: this.uenControl,
      hideUen: this.hideUenControl,
      password: this.passwordControl,
    });
  }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatusObject => {
        if (!authStatusObject.auth) {
          this.signedUp = false;
        }
      }
    );
  }

  onSignupTemplate(form: NgForm) {
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

  onSignupReactive() {

    console.log("Reactive form is:");
    console.log(this.form);

    if (this.form.value.role === "Student / NUS Alumni") {
      if (this.form.value.email.indexOf("@u.nus.edu") == -1) {
        this.dialog.open(WrongStudentEmailDialog);
        return;
      }
      this.form.setValue({
        role: this.form.value.role,
        orgName: this.form.value.orgName,
        email: this.form.value.email,
        uen: "NA",
        hideUen: this.form.value.hideUen,
        password: this.form.value.password,
      });
    }

    else if (this.form.value.hideUen) {
      this.form.setValue({
        role: "Student Organisation",
        orgName: this.form.value.orgName,
        email: this.form.value.email,
        uen: "NA",
        hideUen: this.form.value.hideUen,
        password: this.form.value.password,
      });
    } else {
      this.form.setValue({
        role: "External Organisation",
        orgName: this.form.value.orgName,
        email: this.form.value.email,
        uen: "NA",
        hideUen: this.form.value.hideUen,
        password: this.form.value.password,
      });
    }

    if (this.form.invalid) {
      //console.log("Reactive Form is invalid! It is:");
      //console.log(this.form);
      return;
    }


    this.authService.createUser(
      this.form.value.email,
      this.form.value.password,
      this.form.value.role,
      this.form.value.orgName,
      this.form.value.uen
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
