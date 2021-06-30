import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupGeneralComponent implements OnInit, OnDestroy {
  isLoading = false;
  roles: any = ["External Organisation", "Student Organisation", "Student / NUS Alumni"];
  hidePassword = true;
  signedUp: boolean;
  private authStatusSub: Subscription;

  /* FormGroup version */
  public options: FormGroup;
  public hideRequiredControl = new FormControl(false);
  public floatLabelControl = new FormControl('auto');
  public userTypeControl = new FormControl('Student / NUS Alumni');
  public orgNameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public emailControl = new FormControl(null, [Validators.required, Validators.minLength(10)]);
  public uenControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public hideUenControl = new FormControl(false);
  public passwordControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);

  constructor(public authService: AuthService, private http: HttpClient, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      userType: this.userTypeControl,
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
