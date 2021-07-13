(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/O4B":
/*!*****************************************************************!*\
  !*** ./src/app/auth/signup-general/signup-general.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupGeneralComponent", function() { return SignupGeneralComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dialogs_wrong_student_email_dialog_wrong_student_email_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component */ "xuOZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");















function SignupGeneralComponent_div_14_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter your name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_14_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter your NUS student / Alumni email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Student Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SignupGeneralComponent_div_14_mat_error_5_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SignupGeneralComponent_div_14_mat_error_10_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.orgNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.orgNameControl.errors == null ? null : ctx_r1.orgNameControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.emailControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.emailControl.errors == null ? null : ctx_r1.emailControl.errors.required);
} }
function SignupGeneralComponent_div_15_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter your organisation's name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_15_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter your work email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_15_mat_form_field_13_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter your organisation's UEN Number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_15_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Organisation UEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SignupGeneralComponent_div_15_mat_form_field_13_mat_error_4_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r9.uenControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.uenControl.errors == null ? null : ctx_r9.uenControl.errors.required);
} }
function SignupGeneralComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Organisation Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SignupGeneralComponent_div_15_mat_error_5_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SignupGeneralComponent_div_15_mat_error_10_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "We are a Student Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SignupGeneralComponent_div_15_mat_form_field_13_Template, 5, 3, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.orgNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.orgNameControl.errors == null ? null : ctx_r2.orgNameControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.emailControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.emailControl.errors == null ? null : ctx_r2.emailControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.hideUenControl.value);
} }
function SignupGeneralComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupGeneralComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You have signed up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Please check your email for the verification link. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupGeneralComponent_div_27_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SignupGeneralComponent {
    constructor(authService, http, fb, dialog) {
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
        this.authService = authService;
        this.http = http;
        this.dialog = dialog;
        this.roles = ["External Organisation", "Student Organisation", "Student / NUS Alumni"];
        this.hidePassword = true;
        //public hideRequiredControl = new FormControl(false);
        //public floatLabelControl = new FormControl('auto');
        this.roleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('External / Student Organisation');
        this.orgNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]);
        this.uenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.hideUenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
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
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatusObject => {
            if (!authStatusObject.auth) {
                this.signedUp = false;
            }
        });
    }
    onSignupTemplate(form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.password, form.value.role, form.value.orgName, form.value.uen);
        this.authService.getSignupListener().subscribe(result => {
            this.signedUp = result;
        });
    }
    onSignupReactive() {
        console.log("Reactive form is:");
        console.log(this.form);
        if (this.form.value.role === "Student / NUS Alumni") {
            if (this.form.value.email.indexOf("@u.nus.edu") == -1) {
                this.dialog.open(src_app_dialogs_wrong_student_email_dialog_wrong_student_email_dialog_component__WEBPACK_IMPORTED_MODULE_1__["WrongStudentEmailDialog"]);
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
        }
        else {
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
        this.authService.createUser(this.form.value.email, this.form.value.password, this.form.value.role, this.form.value.orgName, this.form.value.uen);
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
SignupGeneralComponent.ɵfac = function SignupGeneralComponent_Factory(t) { return new (t || SignupGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
SignupGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupGeneralComponent, selectors: [["ng-component"]], decls: 28, vars: 11, consts: [[1, "grid-container"], [1, "card"], [1, "logo"], ["src", "assets/Orbital-Logo-Design.png", "alt", "Logo of CCSGP"], [3, "formGroup"], ["signupForm", "ngForm"], [3, "formControl"], ["value", "External / Student Organisation"], [1, "radio-spacer"], ["value", "Student / NUS Alumni"], [4, "ngIf"], ["appearance", "outline"], ["matInput", "", "name", "password", "required", "", "placeholder", "Enter Password Here", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["appearance", "outline", 3, "hideRequiredMarker"], ["matInput", "", "name", "orgName", "required", "", "placeholder", "Mary Antoinette", 3, "formControl"], ["matInput", "", "type", "email", "name", "email", "required", "", "placeholder", "e1234567@u.nus.edu", 3, "formControl"], ["matInput", "", "name", "orgName", "required", "", "placeholder", "Standard Oil Co.", 3, "formControl"], ["matInput", "", "type", "email", "name", "email", "required", "", "placeholder", "jeff@amazon.com", 3, "formControl"], ["formControlName", "hideUen"], ["appearance", "outline", 3, "hideRequiredMarker", 4, "ngIf"], ["matInput", "", "name", "uen", "required", "", "placeholder", "UEN1234567", 3, "formControl"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function SignupGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " External / Student Organisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Student / NUS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SignupGeneralComponent_div_14_Template, 11, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SignupGeneralComponent_div_15_Template, 14, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupGeneralComponent_Template_button_click_21_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SignupGeneralComponent_mat_error_24_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupGeneralComponent_Template_button_click_25_listener() { return ctx.onSignupReactive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SignupGeneralComponent_div_27_Template, 7, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.roleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roleControl.value === "Student / NUS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roleControl.value === "External / Student Organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text")("formControl", ctx.passwordControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordControl.errors == null ? null : ctx.passwordControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signedUp);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["div[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin-top: 5rem;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  grid-area: card;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-bottom: 5rem;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  background-position: center;\r\n  display:flex;\r\n\tflex-wrap:wrap;\r\n\ttext-align:center;\r\n  justify-content: center;\r\n}\r\n.radio-spacer[_ngcontent-%COMP%] {\r\n  height: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EO0FBQ3BEO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO29EQUNvRDtBQUVwRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFHQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtFQUNoQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBOztDQUVDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdCQztBQU9EOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyIsImZpbGUiOiJzaWdudXAtZ2VuZXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU0lHTlVQIEdFTkVSQUwgR0xPQkFMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qIFNJR05VUCBHRU5FUkFMIENBUkRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBncmlkLWFyZWE6IGNhcmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LXdyYXA6d3JhcDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJhZGlvLXNwYWNlciB7XHJcbiAgaGVpZ2h0OiAyJTtcclxufVxyXG5cclxuLypcclxuICogRm9yIHRoZSByb2xlIHNlbGVjdGlvbiBmb3IgdXNlciBjcmVhdGlvbi4gU3RpbGwgbmVlZCB0byBjb21iaW5lIHcgc3R5bGluZyBhdCBodG1sIGxldmVsXHJcbiovXHJcblxyXG4vKlxyXG4ubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNvbG9yOiAjRUVGQkZCO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzdEN0Q3RDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICBjb2xvcjogIzRkYThkYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjRUVGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXZhbHVlOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNFRUZCRkIgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGNvbG9yOiAjNGRhOGRhO1xyXG59XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIGltZyB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHksIC5ncmlkLWNvbnRhaW5lciB7IGhlaWdodDogMTAwJTsgbWFyZ2luOiAwOyB9XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdhcDogMHB4IDBweDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJwaWN0dXJlIGNhcmRcIjtcclxufVxyXG5cclxuLnBpY3R1cmUgeyBncmlkLWFyZWE6IHBpY3R1cmU7fVxyXG4qL1xyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wilbu\Documents\orbital\jobsApp\src\main.ts */"zUnb");


/***/ }),

/***/ "03Cq":
/*!****************************************************************!*\
  !*** ./src/app/dark-mode-toggle/dark-mode-toggle.component.ts ***!
  \****************************************************************/
/*! exports provided: DarkModeToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeToggleComponent", function() { return DarkModeToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_dark_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-dark-mode */ "VE24");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DarkModeToggleComponent {
    constructor(darkModeService) {
        this.darkModeService = darkModeService;
        this.darkMode$ = this.darkModeService.darkMode$;
    }
    onToggle() {
        this.darkModeService.toggle();
    }
}
DarkModeToggleComponent.ɵfac = function DarkModeToggleComponent_Factory(t) { return new (t || DarkModeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_dark_mode__WEBPACK_IMPORTED_MODULE_1__["DarkModeService"])); };
DarkModeToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DarkModeToggleComponent, selectors: [["app-dark-mode-toggle"]], decls: 5, vars: 3, consts: [["id", "darkMode", "type", "checkbox", 1, "toggle", 3, "checked", "change"], ["for", "darkMode", 1, "toggle-label"], ["src", "https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/moon.svg", 1, "moon"], ["src", "https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/sun.svg", 1, "sun"]], template: function DarkModeToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DarkModeToggleComponent_Template_input_change_0_listener() { return ctx.onToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.darkMode$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.toggle-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.sun[_ngcontent-%COMP%], .moon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: top 0.3s;\r\n}\r\n\r\n.sun[_ngcontent-%COMP%] {\r\n  top: 0;\r\n}\r\n\r\n.moon[_ngcontent-%COMP%] {\r\n  top: -150%;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%] {\r\n  top: 150%;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%] {\r\n  top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmstbW9kZS10b2dnbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE1BQU07QUFDUjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE1BQU07QUFDUiIsImZpbGUiOiJkYXJrLW1vZGUtdG9nZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9nZ2xlLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3VuLFxyXG4ubW9vbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjNzO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5tb29uIHtcclxuICB0b3A6IC0xNTAlO1xyXG59XHJcblxyXG4udG9nZ2xlOmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsIC5zdW4ge1xyXG4gIHRvcDogMTUwJTtcclxufVxyXG5cclxuLnRvZ2dsZTpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbCAubW9vbiB7XHJcbiAgdG9wOiAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "0q4w":
/*!*****************************************************************************!*\
  !*** ./src/app/errors/login-general-error/login-general-error.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginGeneralErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGeneralErrorComponent", function() { return LoginGeneralErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginGeneralErrorComponent {
    constructor() {
        this.message = "Your Email, Password, or Role may be wrong. Please try again.";
    }
}
LoginGeneralErrorComponent.ɵfac = function LoginGeneralErrorComponent_Factory(t) { return new (t || LoginGeneralErrorComponent)(); };
LoginGeneralErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginGeneralErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function LoginGeneralErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post.service */ "69F6");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dark-mode-toggle/dark-mode-toggle.component */ "03Cq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








function ToolbarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_li_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_13_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_13_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.authStatusObject.orgName, " Dashboard");
} }
function ToolbarComponent_li_13_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Student / Alumni Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_li_13_a_3_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_li_13_a_4_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_li_13_a_5_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userIsAuthenticated && ctx_r2.authStatusObject.role === "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userIsAuthenticated && (ctx_r2.authStatusObject.role === "External Organisation" || ctx_r2.authStatusObject.role === "Student Organisation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userIsAuthenticated && (ctx_r2.authStatusObject.role === "Student" || ctx_r2.authStatusObject.role === "Student / NUS Alumni"));
} }
function ToolbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Signup for others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Job Posting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Job Posting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create A Highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(authService, postsService) {
        this.authService = authService;
        this.postsService = postsService;
        this.posts = [];
        this.userIsAuthenticated = false;
    }
    ;
    onLogout() {
        this.authService.logout();
    }
    ngOnInit() {
        //this.userIsAuthenticated = this.authService.getIsAuth();
        //this.authService.autoAuthUser();
        if (localStorage.getItem('token')) {
            //console.log("This localStorage line is called!");
            this.userIsAuthenticated = true;
            this.authService.autoAuthUser();
            this.authStatusObject = this.authService.getAuthStatusObject();
        }
        else {
            localStorage.clear();
            this.userIsAuthenticated = false;
        }
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(authObject => {
            //console.log("Toolbar's auth sub observable working!");
            console.log("Retrieved user in toolbar is: ");
            console.log(authObject);
            this.userIsAuthenticated = authObject.auth;
            this.authStatusObject = authObject;
        });
        this.postSub = this.postsService.getPostsUpdatedListener().subscribe((posts) => {
            //console.log("Toolbar's post sub observable working!");    ok working
            this.posts = posts;
        });
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
        this.postSub.unsubscribe();
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 19, vars: 7, consts: [[1, "logo"], ["href", "http://ccsgp-portal.s3-website-ap-southeast-1.amazonaws.com/", "title", "homepage", 1, "logo"], ["src", "assets/Orbital-Logo-Design-Toolbar.png", "alt", "Logo of CCSGP"], [1, "spacer-row-1"], [4, "ngIf"], [1, "spacer-row-2"], ["mat-stroked-button", "", "routerLink", "/login", "routerLinkActive", "mat-primary", 1, "light-button"], ["mat-stroked-button", "", "routerLink", "/signup", "routerLinkActive", "mat-primary", 1, "light-button"], ["mat-stroked-button", "", 1, "light-button", 3, "click"], ["mat-button", "", "routerLink", "/feed", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/admin", "routerLinkActive", "mat-primary", 4, "ngIf"], ["mat-button", "", "routerLink", "/organisation", "routerLinkActive", "mat-primary", 4, "ngIf"], ["mat-button", "", "routerLink", "/student-alumni", "routerLinkActive", "mat-primary", 4, "ngIf"], ["mat-button", "", "routerLink", "/admin", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/organisation", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/student-alumni", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/signupAdmin", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/createAdmin", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/create", "routerLinkActive", "mat-primary"], ["mat-button", "", "routerLink", "/createHighlight", "routerLinkActive", "mat-primary"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-dark-mode-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_li_8_Template, 5, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_li_9_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToolbarComponent_li_13_Template, 6, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToolbarComponent_li_14_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ToolbarComponent_li_15_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ToolbarComponent_li_16_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ToolbarComponent_li_17_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.authStatusObject.role === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.authStatusObject.role === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && (ctx.authStatusObject.role === "External Organisation" || ctx.authStatusObject.role === "Student Organisation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.authStatusObject.role === "Admin");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_4__["DarkModeToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\r\n  background-color:#F2545B;\r\n  color: white;\r\n  padding-top: 2rem;\r\n  margin-top: 0rem;\r\n  border: none;\r\n}\r\nmat-stroked-button[_ngcontent-%COMP%] {\r\n  line-height: 0px !important;\r\n  padding: 12px 10px 10px 10px !important;\r\n  margin-left: .5rem;\r\n  margin-right: .5rem;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  margin-left: 2rem;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n\r\n.light-button[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 150px;\r\n  font-size: 110%;\r\n  border: 2px solid #f8f8ff6e;\r\n\r\n  \r\n\r\n  margin-left: .5rem;\r\n  margin-right: .5rem;\r\n}\r\n.light-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #F2545B;\r\n\r\n  transition: all .4s ease;\r\n  -webkit-transition: all .4s ease;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n\r\n  \r\n  color: inherit;\r\n  font-size: 100%;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  \r\n}\r\na[_ngcontent-%COMP%] {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400;\r\n  font-size: large;\r\n}\r\n.spacer-row-1[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.spacer-row-2[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n  display: inline-block;\r\n  width: 100%;\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQ7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBR0E7b0RBQ29EO0FBQ3BEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCOztFQUUzQjs7R0FFQzs7RUFFRCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7QUFDbEM7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSxxQkFBcUI7O0VBRXJCOztHQUVDO0VBQ0QsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUT09MQkFSIEdMT0JBTFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRjI1NDVCO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweCAxMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuXHJcbi8qIFRPT0xCQVIgTE9HSU4gLyBMT0dPVVQgLyBTSUdOVVBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmxpZ2h0LWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y4ZjhmZjZlO1xyXG5cclxuICAvKlxyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzI2KTtcclxuICAqL1xyXG5cclxuICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG5cclxuLmxpZ2h0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNTQ1QjtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG59XHJcblxyXG5cclxuLyogVE9PTEJBUiBVU0VSIE9QVElPTlNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuYnV0dG9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIC8qXHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjEpO1xyXG4gICovXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNkYmU5ZjQ7ICovXHJcbn1cclxuXHJcbmEge1xyXG5cclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLnNwYWNlci1yb3ctMSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5zcGFjZXItcm93LTIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5Hur":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard-landing/dashboard-landing.component.ts ***!
  \************************************************************************/
/*! exports provided: DashBoardLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardLandingComponent", function() { return DashBoardLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashBoardLandingComponent {
}
DashBoardLandingComponent.ɵfac = function DashBoardLandingComponent_Factory(t) { return new (t || DashBoardLandingComponent)(); };
DashBoardLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashBoardLandingComponent, selectors: [["dashboard-landing"]], decls: 2, vars: 0, template: function DashBoardLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is assumed to be the dashboard landing page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "69F6":
/*!***************************************!*\
  !*** ./src/app/posts/post.service.ts ***!
  \***************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl; //change this in the environment folder
class PostsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getPosts() {
        this.http.get(BACKEND_URL + 'api/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(postData => {
            return postData.posts.map(post => {
                return {
                    id: post._id,
                    orgName: post.orgName,
                    uen: post.uen,
                    POC: post.POC,
                    phoneNumber: post.phoneNumber,
                    email: post.email,
                    title: post.title,
                    content: post.content,
                    opportunity: post.opportunity,
                    skills: post.skills,
                    startDate: post.startDate,
                    endDate: post.endDate,
                    hoursRequired: post.hoursRequired,
                    location: post.location,
                    beneficiaries: post.beneficiaries,
                    approved: post.approved,
                    creator: post.creator,
                    creationDate: post.creationDate,
                    publishDate: post.publishDate,
                    removed: post.removed,
                    reason: post.reason,
                    students: post.students,
                    reports: post.reports,
                    studentsAccepted: post.studentsAccepted,
                    imagePath: post.imagePath,
                };
            });
        })) //to change from _id from database to id
            .subscribe((mappedPosts) => {
            //console.log(mappedPosts);
            this.posts = mappedPosts;
            this.postsUpdated.next([...this.posts]);
        });
    }
    getPost(postId) {
        return Object.assign({}, this.posts.find(post => post.id === postId));
    }
    getPostsUpdatedListener() {
        return this.postsUpdated.asObservable();
    }
    addPost(post) {
        //Because JSON cannot pass files.
        const postData = new FormData();
        postData.append("id", post.id),
            postData.append("orgName", post.orgName);
        postData.append("uen", post.uen);
        postData.append("POC", post.POC);
        postData.append("phoneNumber", post.phoneNumber);
        postData.append("email", post.email);
        postData.append("title", post.title);
        postData.append("opportunity", post.opportunity);
        postData.append("content", post.content);
        postData.append("skills", JSON.stringify(post.skills));
        postData.append("startDate", JSON.stringify(post.startDate));
        postData.append("endDate", JSON.stringify(post.endDate));
        postData.append("hoursRequired", post.hoursRequired);
        postData.append("location", JSON.stringify(post.location));
        postData.append("beneficiaries", post.beneficiaries);
        postData.append("approved", JSON.stringify(post.approved));
        postData.append("creationDate", JSON.stringify(post.creationDate));
        postData.append("publishDate", JSON.stringify(post.publishDate));
        postData.append("creator", post.creator);
        /*
        postData.append("removed", JSON.stringify(post.removed));
        postData.append("reason", JSON.stringify(post.reason));
        */
        postData.append("students", JSON.stringify(post.students));
        postData.append("reports", JSON.stringify(post.reports));
        postData.append("studentsAccepted", JSON.stringify(post.studentsAccepted));
        postData.append("image", post.image, post.title);
        //console.log("At front end, postService is tring to send this over via addPost: ");
        //console.log(postData);
        this.http.post(BACKEND_URL + 'api/posts', postData)
            .subscribe(responseData => {
            const postId = responseData.postId;
            post.id = postId;
            this.posts.push(post);
            this.postsUpdated.next([...this.posts]);
            console.log(post.opportunity);
        });
    }
    addPostNoImage(post) {
        //console.log("At front end, postService is tring to send this over via addPostNoImage: ");
        //console.log(post);
        this.http.post(BACKEND_URL + 'api/posts/requestPostNoImage', post)
            .subscribe(responseData => {
            const postId = responseData.postId;
            post.id = postId;
            this.posts.push(post);
            this.postsUpdated.next([...this.posts]);
            console.log(post.opportunity);
        });
    }
    publishPost(postId) {
        const postToBePublished = this.getPost(postId);
        postToBePublished.publishDate = new Date(Date.now());
        console.log("At postsService now. Post to be published is: ");
        console.log(postToBePublished);
        this.http
            .put(BACKEND_URL + 'api/posts/publish' + "/" + postToBePublished.id, postToBePublished)
            .subscribe((response) => {
            //this.router.navigate(['/']);
            console.log("post successfully published!");
            this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    rejectPost(postId, reason) {
        const postToBeRejected = this.getPost(postId);
        if (reason) {
            postToBeRejected.reason = reason;
        }
        //console.log("At postsService now. Post to be rejected is: ");
        //console.log(postToBeRejected);
        this.http
            .put(BACKEND_URL + 'api/posts/reject' + "/" + postToBeRejected.id, postToBeRejected)
            .subscribe((response) => {
            //this.router.navigate(['/']);
            console.log("post successfully rejected!");
            this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    completePost(postId, reason) {
        const postToBeCompleted = this.getPost(postId);
        if (reason) {
            postToBeCompleted.reason = reason;
        }
        //console.log("At postsService now. Post to be rejected is: ");
        //console.log(postToBeRejected);
        this.http
            .put(BACKEND_URL + 'api/posts/complete' + "/" + postToBeCompleted.id, postToBeCompleted)
            .subscribe((response) => {
            //this.router.navigate(['/']);
            console.log("post successfully completed! (As in the request has been fulfilled)");
            this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    deletePost(postId) {
        this.http
            .delete(BACKEND_URL + 'api/posts' + "/" + postId)
            .subscribe((response) => {
            this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    applyPost(postId, student) {
        const postToBePublished = this.getPost(postId);
        postToBePublished.students.push(student);
        let post_student_pair = { post: postToBePublished, student: student };
        this.http
            .put(BACKEND_URL + 'api/posts/apply' + "/" + postToBePublished.id, post_student_pair)
            .subscribe((response) => {
            console.log("apply post successful!");
            //this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    reportPost(postId, student) {
        const postToBePublished = this.getPost(postId);
        postToBePublished.reports.push(student);
        let post_student_pair = { post: postToBePublished, student: student };
        this.http
            .put(BACKEND_URL + 'api/posts/report' + "/" + postToBePublished.id, post_student_pair)
            .subscribe((response) => {
            console.log("post reported successfully!");
            this.postsUpdated.next([...this.posts]);
        });
    }
    acceptStudent(postId, studentEmail) {
        const postToAcceptStudent = this.getPost(postId);
        postToAcceptStudent.studentsAccepted.push(studentEmail);
        let post_studentEmail_pair = { post: postToAcceptStudent, studentEmail: studentEmail };
        this.http
            .put(BACKEND_URL + 'api/posts/accept' + "/" + postToAcceptStudent.id, post_studentEmail_pair)
            .subscribe((response) => {
            console.log("apply post successful!");
            //this.posts = this.posts.filter(post => post.id !== postId);
            this.postsUpdated.next([...this.posts]);
        });
    }
    downloadPosts(startDate, endDate) {
        this.http.get(BACKEND_URL + 'api/posts/download')
            .subscribe(response => {
            /*
            console.log("Post service's download CSV function called. The response is: ");
            console.log(response);
            console.log(response.data);
            console.log("The start date is: ");
            console.log(startDate);
            console.log("The end date is: ");
            console.log(endDate);
            */
            let pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US'); // Use your own locale
            let dataArray = response.data;
            if (startDate && endDate) {
                console.log("Both Start and End dates are present!");
                dataArray = dataArray.filter(obj => {
                    return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime() && new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //within search range
                        || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()) //endDate of job is after start date of search range
                        || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //startDate of job is before end date of search range
                });
            }
            else if (startDate) {
                console.log("Start Date's clause activated!");
                dataArray = dataArray.filter(obj => {
                    return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime()) //start date of job is after start date of range
                        || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()); //end date of job is after start date of range
                });
            }
            else if (endDate) {
                console.log("end Date's clause activated!");
                dataArray = dataArray.filter(obj => {
                    return (new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //end date of job is before end date of range
                        || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //start date of job is before end date of range
                });
            }
            dataArray = dataArray.map(obj => {
                return {
                    location: obj.location,
                    beneficiaries: obj.beneficiaries,
                    orgName: obj.orgName,
                    uen: obj.uen,
                    point_of_contact: obj.POC,
                    phoneNumber: obj.phoneNumber,
                    email: obj.email,
                    title: obj.title,
                    content: obj.content,
                    opportunity: obj.opportunity,
                    skills: obj.skills,
                    startDate: pipe.transform(obj.startDate, 'longDate'),
                    endDate: pipe.transform(obj.endDate, 'longDate'),
                    commitment: obj.hoursRequired,
                    studentsInterested: obj.students,
                    reports: obj.reports,
                    approved: obj.approved,
                    removed: obj.removed,
                    reason: obj.reason,
                };
            });
            const Json2csvParser = __webpack_require__(/*! json2csv */ "9Z/g").Parser;
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(dataArray);
            let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
            let dwldLink = document.createElement("a");
            let url = URL.createObjectURL(blob);
            let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
            if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
                dwldLink.setAttribute("target", "_blank");
            }
            dwldLink.setAttribute("href", url);
            dwldLink.setAttribute("download", "all posts" + ".csv");
            dwldLink.style.visibility = "hidden";
            document.body.appendChild(dwldLink);
            dwldLink.click();
            document.body.removeChild(dwldLink);
        });
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7TP8":
/*!********************************************************************************************************!*\
  !*** ./src/app/dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AppliedPostNotificationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedPostNotificationDialog", function() { return AppliedPostNotificationDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//import { MatDialog } from "@angular/material/dialog";
class AppliedPostNotificationDialog {
}
AppliedPostNotificationDialog.ɵfac = function AppliedPostNotificationDialog_Factory(t) { return new (t || AppliedPostNotificationDialog)(); };
AppliedPostNotificationDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppliedPostNotificationDialog, selectors: [["applied-post-notification-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function AppliedPostNotificationDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Applied!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait while the organisation takes a look at your application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "7Ubm":
/*!****************************************************************!*\
  !*** ./src/app/admin/student-board/student-board.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBoardComponent", function() { return StudentBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../posts/post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function StudentBoardComponent_ng_template_6_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardComponent_ng_template_6_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide us with your new password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardComponent_ng_template_6_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_6_div_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hideCurrentPassword = !ctx_r13.hideCurrentPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentBoardComponent_ng_template_6_mat_error_12_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.hideNewPassword = !ctx_r15.hideNewPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentBoardComponent_ng_template_6_mat_error_19_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onChangePassword(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StudentBoardComponent_ng_template_6_div_22_Template, 6, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hideCurrentPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideCurrentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hideCurrentPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hideNewPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideNewPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hideNewPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.requestedNewPassword);
} }
function StudentBoardComponent_ng_template_10_div_0_section_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} }
function StudentBoardComponent_ng_template_10_div_0_section_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r18.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function StudentBoardComponent_ng_template_10_div_0_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentBoardComponent_ng_template_10_div_0_section_1_img_2_Template, 1, 0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentBoardComponent_ng_template_10_div_0_section_1_img_3_Template, 1, 1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-footer", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_10_div_0_section_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onMoreInfo(_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !post_r18.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r18.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r18.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, post_r18.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, post_r18.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r18.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r18.location || "No Location Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Skillsets: ", post_r18.skills, " ");
} }
function StudentBoardComponent_ng_template_10_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_10_div_0_ng_template_2_Template_button_click_3_listener() { const modal_r28 = ctx.$implicit; return modal_r28.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_10_div_0_ng_template_2_Template_button_click_32_listener() { const modal_r28 = ctx.$implicit; return modal_r28.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Organization Name: ", post_r18.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UEN: ", post_r18.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r18.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r18.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("POC's email: ", post_r18.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r18.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r18.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 12, post_r18.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, post_r18.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r18.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r18.beneficiaries, "");
} }
function StudentBoardComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentBoardComponent_ng_template_10_div_0_section_1_Template, 33, 13, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentBoardComponent_ng_template_10_div_0_ng_template_2_Template, 34, 16, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r18.students.length > 0);
} }
function StudentBoardComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentBoardComponent_ng_template_10_div_0_Template, 4, 1, "div", 29);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.appliedPosts);
} }
function StudentBoardComponent_ng_template_14_div_1_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-footer", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_14_div_1_section_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.onMoreInfo(_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r34.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, post_r34.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, post_r34.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r34.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r34.location || "No Location Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Skillsets: ", post_r34.skills, " ");
} }
function StudentBoardComponent_ng_template_14_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_14_div_1_ng_template_2_Template_button_click_3_listener() { const modal_r41 = ctx.$implicit; return modal_r41.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_14_div_1_ng_template_2_Template_button_click_32_listener() { const modal_r41 = ctx.$implicit; return modal_r41.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Organization Name: ", post_r34.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UEN: ", post_r34.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r34.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r34.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("POC's email: ", post_r34.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r34.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r34.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 12, post_r34.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, post_r34.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r34.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r34.beneficiaries, "");
} }
function StudentBoardComponent_ng_template_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentBoardComponent_ng_template_14_div_1_section_1_Template, 32, 11, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentBoardComponent_ng_template_14_div_1_ng_template_2_Template, 34, 16, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r34.reports.length > 0);
} }
function StudentBoardComponent_ng_template_14_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No post with reports! :D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentBoardComponent_ng_template_14_div_1_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentBoardComponent_ng_template_14_p_2_Template, 2, 0, "p", 51);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.reportedPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasReport === false);
} }
function StudentBoardComponent_ng_template_18_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", beneficiary_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](beneficiary_r47);
} }
function StudentBoardComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Update interested beneficiaries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beneficiaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentBoardComponent_ng_template_18_Template_mat_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.beneficiariesSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentBoardComponent_ng_template_18_mat_option_9_Template, 2, 2, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardComponent_ng_template_18_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.updateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update Interested Beneficiaries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.beneficiariesSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.beneficiaries);
} }
class StudentBoardComponent {
    constructor(postsService, modalService, authService) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.beneficiariesSelected = [];
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.requestedNewPassword = false;
        this.active = "changePassword";
        this.beneficiaries = [
            "Animal Welfare",
            "Arts & Heritage",
            "Children & Youth",
            "Community",
            "Disability",
            "Education",
            "Elderly",
            "Environment",
            "Families",
            "Health",
            "Humanitarian",
            "Social Service",
            "Sports",
            "Women & Girls",
        ];
        this.posts = [];
        this.appliedPosts = [];
        this.reportedPosts = [];
        this.hasReport = false;
    }
    ngOnInit() {
        this.authStatusObject = this.authService.getAuthStatusObject();
        //console.log(this.authStatusObject);
        for (var beneficiary of this.authStatusObject.beneficiaries) {
            this.beneficiariesSelected.push(beneficiary);
        }
        this.hasRequest = false;
        this.postsService.getPosts();
        this.postSub = this.postsService.getPostsUpdatedListener()
            .subscribe((posts) => {
            //console.log(posts);
            this.posts = posts.filter(post => !post.removed);
            this.posts = this.posts
                .filter(post => post.students.length > 0 || post.reports.length > 0);
            this.appliedPosts = this.posts.filter(posts => {
                for (let i = 0; i < posts.students.length; i++) {
                    if (posts.students[i].email === this.authStatusObject.email) {
                        return true;
                    }
                }
            });
            // console.log("this.appliedPosts");
            // console.log(this.appliedPosts);
            this.reportedPosts = this.posts.filter(posts => {
                for (let i = 0; i < posts.reports.length; i++) {
                    if (posts.reports[i].email === this.authStatusObject.email) {
                        this.hasReport = true;
                        return true;
                    }
                }
            });
            //console.log("this.reportedPosts");
            //console.log(this.reportedPosts);
        });
        // console.log("this.appliedPosts");
        // console.log(this.appliedPosts);
        // console.log(this.posts);
        /*
         * Probably do not need this because there are no changes to authStatusObject once user is logged in.
         * Might have to be revised in the future for chat function.
    
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
          console.log("student dashboard's authStatus observable!");
          this.authStatusObject = authObject;
        });
        */
    }
    updateUser() {
        //console.log("At student-board updateUser method now");
        //console.log(this.beneficiariesSelected);
        this.authService.update(this.beneficiariesSelected);
    }
    onChangePassword(form) {
        if (form.invalid) {
            return;
        }
        this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
        this.authService.getChangedPasswordListener().subscribe(res => {
            this.requestedNewPassword = res;
        });
    }
    onMoreInfo(content) {
        //console.log("Checking this page's posts! ");
        console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    closeNotification() {
        this.requestedNewPassword = false;
    }
    ngOnDestroy() {
        //this.authStatusSub.unsubscribe();
    }
}
StudentBoardComponent.ɵfac = function StudentBoardComponent_Factory(t) { return new (t || StudentBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_post_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
StudentBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentBoardComponent, selectors: [["app-admin-board"]], decls: 25, vars: 2, consts: [[1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "changePassword", 1, "nav-item"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "appliedPosts", 1, "nav-item"], ["ngbNavItem", "reportedPosts", 1, "nav-item"], ["ngbNavItem", "updateBeneficiaries", 1, "nav-item"], [1, "ml-4", 3, "ngbNavOutlet"], [1, "container"], [1, "copyright"], [1, "change-password-card"], [1, "mat-elevation-z0", "change-password-body"], [1, "change-password-title"], [1, "changePasswordForm"], ["changePasswordForm", "ngForm"], ["appearance", "outline", 1, "change-password-form-field"], ["matInput", "", "ngModel", "", "name", "currentPassword", "required", "", "placeholder", "Current Password", 1, "change-password-form-input", 3, "type"], ["currentPassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "ngModel", "", "name", "newPassword", "required", "", "placeholder", "New Password", 1, "change-password-form-input", 3, "type"], ["newPassword", "ngModel"], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "centered", 4, "ngFor", "ngForOf"], [1, "centered"], ["class", "cards", 4, "ngIf"], ["content", ""], [1, "cards"], [1, "application-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Placeholder image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image", 1, "card-image"], ["mat-card-image", "", "alt", "Placeholder image", 1, "card-image", 3, "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "report-posts-div"], ["class", "info-text mat-body-1", 4, "ngIf"], [1, "report-post-card"], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image", 1, "card-image"], [1, "info-text", "mat-body-1"], [1, "update-beneficiaries-card"], ["appearance", "outline", "text-center", "", 1, "change-password-form-field"], ["multiple", "", "ngModel", "", "name", "beneficiariesSelected", 3, "ngModel", "ngModelChange"], ["beneficiariesInput", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function StudentBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function StudentBoardComponent_Template_ul_activeIdChange_1_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentBoardComponent_ng_template_6_Template, 23, 11, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Posts that you have applied to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StudentBoardComponent_ng_template_10_Template, 1, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Posts that you have reported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentBoardComponent_ng_template_14_Template, 3, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update Beneficiaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StudentBoardComponent_ng_template_18_Template, 12, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".d-flex[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  \r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%] {\r\n  padding-left: 14rem;\r\n  padding-top: 10px;\r\n}\r\n\r\nng-template[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n}\r\n\r\n.post-card-title[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 1.7rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.post-card-subtitle[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 120%;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 2rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: rgb(88, 88, 88);\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n\r\n.post-card-content[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 8rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n\r\n.post-card-footer[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n  max-width: 20rem;\r\n  font-family: 'Lato', sans-serif;\r\n  align-items: center;\r\n  flex: auto;\r\n  margin: auto;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n\r\n\r\n\r\n.change-password-card[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.change-password-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.change-password-body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 10px;\r\n  text-align: center;\r\n\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #4da8da;\r\n  box-shadow: none;\r\n}\r\n\r\n.change-password-form-input[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin: auto;\r\n}\r\n\r\n.change-password-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.change-password-button[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.change-password-footer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  flex: auto\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  background-color: #94f1a2 !important;\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n.update-beneficiaries-card[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\n.request-post-card[_ngcontent-%COMP%] {\r\n  width: 25rem;\r\n  height: 15rem;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #ffd000;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n.application-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n.application-post-card[_ngcontent-%COMP%] {\r\n\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n\r\n.application-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #34df25e0;\r\n}\r\n\r\n.application-post-card-button-view-applicants[_ngcontent-%COMP%] {\r\n  background-color: #b810da;\r\n  color: white;\r\n}\r\n\r\n.application-post-card-button-complete[_ngcontent-%COMP%] {\r\n  background-color: #00b167;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.report-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n.report-post-card[_ngcontent-%COMP%] {\r\n\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n\r\n.report-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #f2545ca6;\r\n}\r\n\r\n\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  color: black !important;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  color: black !important;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  color: black !important;\r\n}\r\n\r\n.modal-body-report[_ngcontent-%COMP%] {\r\n  border: thin solid black;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: black !important;\r\n  margin-top: 5rem;\r\n}\r\n\r\n\r\n\r\n@media screen {\r\n  .cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7O0VBRXZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTs7RUFFZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUdBO29EQUNvRDs7QUFDcEQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFHQTtvREFDb0Q7O0FBQ3BEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUU7OztHQUdDOztFQUVELFlBQVk7RUFDWixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCOzs7OztHQUtDO0FBQ0g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtvREFDb0Q7O0FBQ3BEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUU7OztHQUdDOztFQUVELFlBQVk7RUFDWixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCOzs7OztHQUtDO0FBQ0g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtvREFDb0Q7O0FBQ3BEO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO29EQUNvRDs7QUFDcEQ7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBR0E7b0RBQ29EOztBQUNwRDtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoic3R1ZGVudC1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9yIHRoZSBuYXZiYXIgKi9cclxuXHJcbi5kLWZsZXgge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDE0cmVtOyAqL1xyXG59XHJcblxyXG5hIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMge1xyXG4gIHBhZGRpbmctbGVmdDogMTRyZW07XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbm5nLXRlbXBsYXRlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEdMT0JBTFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2FyZC1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5wb3N0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG5cclxuICB3aWR0aDogMjJyZW07XHJcbiAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNnB4O1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWZvb3RlciB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG59XHJcblxyXG4vKiBDSEFOR0UgUEFTU1dPUkRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmNoYW5nZS1wYXNzd29yZC1jYXJkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQtZm9ybS1pbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IGF1dG9cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGYxYTIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi8qIENIQU5HRSBQQVNTV09SRFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udXBkYXRlLWJlbmVmaWNpYXJpZXMtY2FyZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLyogSk9CUyBQRU5ESU5HIEFQUFJPVkFMIENBUkRTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5yZXF1ZXN0LXBvc3QtY2FyZCB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIGhlaWdodDogMTVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZkMDAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBKT0JTIFdJVEggQVBQTElDQVRJT05TIENBUkRTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5hcHBsaWNhdGlvbi1wb3N0cy1kaXYge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1wb3N0LWNhcmQge1xyXG5cclxuICAvKlxyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG4gICovXHJcblxyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDM1cmVtO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgLypcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICNmZjAwMDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAqL1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tcG9zdC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTFweCAjMzRkZjI1ZTA7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1wb3N0LWNhcmQtYnV0dG9uLXZpZXctYXBwbGljYW50cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MTBkYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1wb3N0LWNhcmQtYnV0dG9uLWNvbXBsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMTY3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogSk9CUyBXSVRIIFJFUE9SVFMgQ0FSRFNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnJlcG9ydC1wb3N0cy1kaXYge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5yZXBvcnQtcG9zdC1jYXJkIHtcclxuXHJcbiAgLypcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICAqL1xyXG5cclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gIC8qXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgKi9cclxufVxyXG5cclxuLnJlcG9ydC1wb3N0LWNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4ICNmMjU0NWNhNjtcclxufVxyXG5cclxuLyogRk9PVEVSXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jb3B5cmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIEZPT1RFUlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY29weXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBNT0RBTCBXSU5ET1dcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5LXJlcG9ydCB7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogTUlTQ0VMTEFORU9VU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uaW5mby10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG5cclxuLyogU01BTEwgU0NSRUVOIFNJWkUgLy9UT0RPOiBOT1QgRE9ORSBZRVRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7VJF":
/*!*********************************************************************************!*\
  !*** ./src/app/errors/update-password-error/update-password-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdatePasswordErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordErrorComponent", function() { return UpdatePasswordErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpdatePasswordErrorComponent {
    constructor() {
        this.message = "You may have entered the wrong current password. Please try again.";
    }
}
UpdatePasswordErrorComponent.ɵfac = function UpdatePasswordErrorComponent_Factory(t) { return new (t || UpdatePasswordErrorComponent)(); };
UpdatePasswordErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePasswordErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function UpdatePasswordErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "9l3C":
/*!*************************************************************************************!*\
  !*** ./src/app/errors/user-not-verified-error/user-not-verified-error.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NotVerifiedErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotVerifiedErrorComponent", function() { return NotVerifiedErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotVerifiedErrorComponent {
    constructor() {
        this.message = 'Your account is not verified yet. Please go to your email and click on the verification link!';
    }
}
NotVerifiedErrorComponent.ɵfac = function NotVerifiedErrorComponent_Factory(t) { return new (t || NotVerifiedErrorComponent)(); };
NotVerifiedErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotVerifiedErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function NotVerifiedErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H2Te":
/*!*************************************************************!*\
  !*** ./src/app/auth/signup-admin/signup-admin.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAdminComponent", function() { return SignupAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function SignupAdminComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function SignupAdminComponent_form_5_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your name / your organisation's name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r15, " ");
} }
function SignupAdminComponent_form_5_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select the user's role.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Unique Entity Number (UEN).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have signed up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please check your email for the verification link. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupAdminComponent_form_5_div_38_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupAdminComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Student / Organisation Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupAdminComponent_form_5_mat_error_7_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupAdminComponent_form_5_mat_error_13_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupAdminComponent_form_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.hidePassword = !ctx_r18.hidePassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupAdminComponent_form_5_mat_error_22_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupAdminComponent_form_5_mat_option_30_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupAdminComponent_form_5_mat_error_31_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Unique Entity Number (UEN)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupAdminComponent_form_5_mat_error_37_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SignupAdminComponent_form_5_div_38_Template, 7, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupAdminComponent_form_5_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onSignup(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hidePassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hidePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hidePassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signedUp);
} }
class SignupAdminComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.roles = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
        this.hidePassword = true;
    }
    ngOnInit() {
        //this.authStatusObject = this.authService.getAuthStatusObject();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
            if (!authObject.auth) {
                this.isLoading = false;
                this.signedUp = false;
            }
        });
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUserAdmin(form.value.email, form.value.password, form.value.role, form.value.orgName, form.value.uen);
        //IDK IF THIS FIXES IT BUT I THINK IT IS WORKING?
        this.authService.getSignupListener().subscribe(result => {
            this.signedUp = result;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
SignupAdminComponent.ɵfac = function SignupAdminComponent_Factory(t) { return new (t || SignupAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignupAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupAdminComponent, selectors: [["ng-component"]], decls: 11, vars: 2, consts: [[4, "ngIf"], [1, "container"], [1, "copyright"], ["signupForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "type", "orgName", "name", "orgName", "ngModel", "", "required", "", "placeholder", "Enter Student / Organisation's name Here"], ["orgNameInput", "ngModel"], ["matInput", "", "type", "email", "name", "email", "ngModel", "", "required", "", "placeholder", "Enter your Email Address", "email", ""], ["emailInput", "ngModel"], ["matInput", "", "name", "password", "ngModel", "", "required", "", "placeholder", "Enter Password Here", 3, "type"], ["passwordInput", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["ngModel", "", "required", "", "name", "role"], ["roleInput", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "uen", "name", "uen", "ngModel", "", "required", "", "placeholder", "eg UEN1234567. If you are a Student Organisation, just put NA"], ["uenInput", "ngModel"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "value"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function SignupAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Signup Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupAdminComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupAdminComponent_form_5_Template, 41, 11, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["div[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: auto;\r\n  padding: 10px;\r\n\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #4da8da;\r\n  box-shadow: none;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5QkMiLCJmaWxlIjoic2lnbnVwLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICM0ZGE4ZGE7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLypcclxuICogRm9yIHRoZSByb2xlIHNlbGVjdGlvbiBmb3IgdXNlciBjcmVhdGlvbi4gU3RpbGwgbmVlZCB0byBjb21iaW5lIHcgc3R5bGluZyBhdCBodG1sIGxldmVsXHJcbi5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY29sb3I6ICNFRUZCRkI7XHJcbn1cclxuXHJcbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjN0Q3RDdEO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gIGNvbG9yOiAjNGRhOGRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICNFRUZCRkIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1zZWxlY3QtdmFsdWU6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI0VFRkJGQiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY29sb3I6ICM0ZGE4ZGE7XHJcbn1cclxuKi9cclxuIl19 */"] });


/***/ }),

/***/ "HgG0":
/*!**********************************************************************!*\
  !*** ./src/app/posts/posts-create-org/posts-create-org.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostCreateOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateOrgComponent", function() { return PostCreateOrgComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");

















function PostCreateOrgComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter provide us the name of your Point-Of-Contact.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide us your Point-Of-Contact's phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide us the job's title.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please give us a description of the job (minimum 100 words).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opportunity_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", opportunity_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opportunity_r22);
} }
function PostCreateOrgComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please indicate the frequency of this job.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please give a brief description on the preferred skills for the job (minimum 10 words).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please pick a start date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please pick an end date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide the details on the commitment required of the student.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", beneficiary_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r23);
} }
function PostCreateOrgComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide us the main beneficiaries of this opportunity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", location_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r24);
} }
function PostCreateOrgComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r17.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r17.form.value.titleControl);
} }
function PostCreateOrgComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted for approval!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please wait while our administrators vet your post. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_div_77_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_div_82_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 48);
} }
function PostCreateOrgComponent_div_82_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r28.postPreview.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PostCreateOrgComponent_div_82_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_div_82_ng_template_35_Template_button_click_3_listener() { const modal_r31 = ctx.$implicit; return modal_r31.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_div_82_ng_template_35_Template_button_click_32_listener() { const modal_r31 = ctx.$implicit; return modal_r31.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Organization Name: ", ctx_r30.post.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" UEN: ", ctx_r30.post.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Point of Contact (POC): ", ctx_r30.post.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" POC's phoneNumber: ", ctx_r30.post.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" POC's email: ", ctx_r30.post.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Brief Description for gig: ", ctx_r30.post.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Frequency/Type of volunteer opportunity: ", ctx_r30.post.opportunity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Preferred Skills: ", ctx_r30.post.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 13, ctx_r30.post.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 15, ctx_r30.post.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Commitment Hours: ", ctx_r30.post.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Beneficiaries: ", ctx_r30.post.beneficiaries, " ");
} }
function PostCreateOrgComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostCreateOrgComponent_div_82_img_4_Template, 1, 0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PostCreateOrgComponent_div_82_img_5_Template, 1, 1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-title", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-subtitle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card-footer", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_div_82_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onMoreInfo(_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PostCreateOrgComponent_div_82_ng_template_35_Template, 34, 17, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r19.postPreview.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.postPreview.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.postPreview.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.postPreview.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 9, ctx_r19.postPreview.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 11, ctx_r19.postPreview.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.postPreview.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.postPreview.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", ctx_r19.postPreview.skills, " ");
} }
function PostCreateOrgComponent_ng_template_83_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required fields before submitting your request.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_ng_template_83_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please click on the checkbox at the end of the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostCreateOrgComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_ng_template_83_Template_button_click_3_listener() { const modal_r36 = ctx.$implicit; return modal_r36.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Terms and Conditions of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "1. Agreement to Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " All access of any area of INSERT URL HERE ONCE DONE (\"The Website\") is governed by the terms and conditions below (\"Terms\"). If you do not accept any of these Terms, exit immediately. Continue only if you accept these Terms. In these Terms, the words \"we\", \"our\" and \"us\" refers to the Government of Singapore. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2. Access To The Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " The accessibility and operation of The Website relies on technologies outside our control. We do not guarantee continuous accessibility or uninterrupted operation of The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "3. Relying On Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " We provide The Website as a general information source only and we are not involved in giving professional advice here. The Website may not cover all information available on a particular issue. Before relying on the Website, you should do your own checks or obtain professional advice relevant to your particular circumstances. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "4. Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Where appropriate, we use available technology to protect the security of communications made through The Website. However, we do not accept liability for the security, authenticity, integrity or confidentiality of any transactions and other communications made through The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Internet communications may be susceptible to interference or interception by third parties. Despite our best efforts, we make no warranties that The Website is free of infection by computer viruses or other unauthorised software. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "5. Hyperlinks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " We are not responsible or liable for the availability or content of any other Internet site (not provided by us) linked to or from The Website. Access to any other Internet site is at your own risk. If you create a link or frame to The Website, you do so at your own risk. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " We reserve the right to object or disable any link or frame to or from The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "We reserve the right to change the URL of The Website.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "6. Intellectual Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Materials, including source code, pages, documents and online graphics, audio and video in The Website are protected by law. The intellectual property rights in the materials is owned by or licensed to us. All rights reserved. (Government of Singapore \u00A9 2018). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Apart from any fair dealings for the purposes of private study, research, criticism or review, as permitted in law, no part of The Website may be reproduced or reused for any commercial purposes whatsoever without our prior written permission. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "7. General Disclaimer And Limitation Of Liability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "We will not be liable for any loss or damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " 1. That you may incur on account of using, visiting or relying on any statements, opinion, representation or information in The Website; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " 2. Resulting from any delay in operation or transmission, communications failure, Internet access difficulties or malfunctions in equipment or software; or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " 3. Resulting from the conduct or the views of any person who accesses or uses The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "8. Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " There are currently no fees for using any part of The Website. We reserve the right to introduce new fees from time to time. We are not responsible for any fees charged by any other Internet site (not provided by us). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "9. Applicable Laws");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Use of The Website and these Terms are governed by the laws of Singapore. Any claim relating to use of The Website shall be heard by Singapore Courts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "10. Variation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " We may revise these Terms at any time by updating this page. You should visit this page from time to time and review the then current Terms because they are binding on you. We may modify or discontinue any information or features that form part of The Website at any time, with or without notice to you, and without liability. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-checkbox", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "I have read the above Terms and Conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_ng_template_83_Template_button_click_80_listener() { const modal_r36 = ctx.$implicit; return modal_r36.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_ng_template_83_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _r37.valid && ctx_r42.onAddPostReactive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, PostCreateOrgComponent_ng_template_83_mat_error_84_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, PostCreateOrgComponent_ng_template_83_mat_error_85_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r37.invalid);
} }
class PostCreateOrgComponent {
    constructor(postsService, modalService, authService, route) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.route = route;
        this.pendingApproval = false;
        this.isLoading = true;
        this.mode = 'create';
        this.imagePreview = null;
        this.showPreview = false;
        this.beneficiaries = [
            'Animal Welfare',
            'Arts & Heritage',
            'Children & Youth',
            'Community',
            'Disability',
            'Education',
            'Elderly',
            'Environment',
            'Families',
            'Health',
            'Humanitarian',
            'Social Service',
            'Sports',
            'Women & Girls',
        ];
        this.locations = [
            'Ang Mo Kio',
            'Bedok',
            'Bishan',
            'Boon Lay',
            'Bukit Batok',
            'Bukit Merah',
            'Bukit Panjang',
            'Bukit Timah',
            'Central Water Catchment',
            'Changi',
            'Changi Bay',
            'Choa Chu Kang',
            'Clementi',
            'Downtown Core',
            'Geylang',
            'Hougang',
            'Islandwide',
            'Jurong East',
            'Jurong West',
            'Kallang',
            'Lim Chu Kang',
            'Mandai',
            'Marina East',
            'Marina South',
            'Marine Parade',
            'Museum',
            'Newton',
            'North-Eastern Islands',
            'Novena',
            'Orchard',
            'Outram',
            'Overseas',
            'Pasir Ris',
            'Paya Lebar',
            'Pioneer',
            'Punggol',
            'Queenstown',
            'River Valley',
            'Rochor',
            'Seletar',
            'Sembawang',
            'Sengkang',
            'Serangoon',
            'Simpang',
            'Singapore River',
            'Southern Islands',
            'Straits View',
            'Sungei Kadut',
            'Tampines',
            'Tanglin',
            'Tengah',
            'Toa Payoh',
            'Tuas',
            'Virtual',
            'Western Islands',
            'Western Water Catchment',
            'Woodlands',
            'Yishun',
        ];
        this.opportunities = ['One-off', 'Recurring'];
        this.skills = [
            ' Accounting & Finance',
            ' Arts & Music',
            ' Business Development',
            ' Coaching & Training',
            ' Counselling & Mentoring',
            ' Fundraising',
            ' Human Resource',
            ' Information Technology',
            ' Leadership Development',
            ' Legal',
            ' Marketing & Communications',
            ' Medical & Health',
            ' Volunteer Management',
            ' Other Skills (elaborate in description)',
            ' No Specific Skills Required',
        ];
        this.termsAndConditions = false;
        this.pocControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
        ]);
        this.phoneNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(10000000),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99999999),
        ]);
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(100),
        ]);
        this.opportunitySelectedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.skillsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.startDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.endDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.hoursRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.locationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        this.beneficiariesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
        ]);
        this.imageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
        /*
        validators: [Validators.required],
        asyncValidators: [mimeType]
        */
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            POC: this.pocControl,
            phoneNumber: this.phoneNumberControl,
            title: this.titleControl,
            opportunity: this.opportunitySelectedControl,
            content: this.contentControl,
            skills: this.skillsControl,
            startDate: this.startDateControl,
            endDate: this.endDateControl,
            hoursRequired: this.hoursRequiredControl,
            location: this.locationControl,
            beneficiaries: this.beneficiariesControl,
            image: this.imageControl,
        });
    }
    ngOnInit() {
        /*
         * To edit posts. But not done up yet.
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          if (paramMap.has('postId')) {
            this.mode = "edit";
            this.postId = paramMap.get('postId');
            this.post = this.postsService.getPost(this.postId);
          } else {
            this.mode = "create";
            this.postId = null;
            this.post = null;
          }
        });
        */
        this.authStatusObject = this.authService.getAuthStatusObject(); //this is required to avoid the "Cannot read property 'orgName' of undefined" error. but it violates async
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe((authObject) => {
            this.authStatusObject = authObject;
            //console.log("At create page");
            //console.log(authObject);
        });
    }
    generatePreview() {
        if (this.form.invalid)
            return;
        this.postPreview = null;
        const post = {
            id: null,
            orgName: this.form.value.orgName,
            uen: this.form.value.uen,
            POC: this.form.value.POC,
            phoneNumber: this.form.value.phoneNumber,
            email: this.form.value.email,
            title: this.form.value.title,
            opportunity: this.form.value.opportunity,
            content: this.form.value.content,
            skills: this.form.value.skills,
            startDate: this.form.value.startDate,
            endDate: this.form.value.endDate,
            hoursRequired: this.form.value.hoursRequired,
            location: this.form.value.location,
            beneficiaries: this.form.value.beneficiaries,
            approved: false,
            creationDate: new Date(),
            publishDate: null,
            creator: null,
            removed: null,
            reason: null,
            students: [],
            reports: [],
            studentsAccepted: [],
            image: this.form.value.image,
            imagePath: this.imagePreview,
        };
        this.postPreview = post;
        this.showPreview = true;
    }
    onMoreInfo(content) {
        //console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    onAddPostReactive() {
        //console.log("Beneficiaries Selected: ");
        //console.log(this.beneficiariesSelected);
        //console.log("add post fired!");
        if (this.form.invalid) {
            return;
        }
        let imageAdd = null;
        if (this.form.value.image) {
            imageAdd = this.form.value.image;
        }
        const post = {
            id: null,
            orgName: this.authStatusObject.orgName,
            uen: this.authStatusObject.uen,
            POC: this.form.value.POC,
            phoneNumber: this.form.value.phoneNumber,
            email: this.authStatusObject.email,
            title: this.form.value.title,
            opportunity: this.form.value.opportunity,
            content: this.form.value.content,
            skills: this.form.value.skills,
            startDate: this.form.value.startDate,
            endDate: this.form.value.endDate,
            hoursRequired: this.form.value.hoursRequired,
            location: this.form.value.location,
            beneficiaries: this.form.value.beneficiaries,
            approved: false,
            creationDate: new Date(),
            publishDate: null,
            creator: null,
            removed: null,
            reason: null,
            students: [],
            reports: [],
            studentsAccepted: [],
            image: this.form.value.image,
            imagePath: null,
        };
        this.pendingApproval = true;
        //console.log("Form to be submitted is: ");
        //console.log(this.form.value);
        if (this.form.value.image) {
            this.postsService.addPost(post);
        }
        else {
            this.postsService.addPostNoImage(post);
        }
        this.modalService.dismissAll();
        this.form.reset();
        this.imagePreview = '';
    }
    closeNotification() {
        this.pendingApproval = false;
    }
    openTermsAndConditions(longContent) {
        //console.log(this.form)
        this.modalService.open(longContent, { scrollable: true });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        if (file) {
            this.form.patchValue({ image: file });
            //this.form.get('image').updateValueAndValidity();
            // console.log(file);
            // console.log(this.form);
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            this.form.patchValue({ image: null });
            this.imagePreview = null;
        }
    }
}
PostCreateOrgComponent.ɵfac = function PostCreateOrgComponent_Factory(t) { return new (t || PostCreateOrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PostCreateOrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostCreateOrgComponent, selectors: [["app-post-create"]], decls: 90, vars: 32, consts: [[1, "post-create-card"], [1, "post-create-body"], ["enctype", "multipart/form-data", 3, "formGroup"], ["postForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "POC", "required", "", "placeholder", "eg Wilfred Gatsby", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "number", "name", "phoneNumber", "required", "", "placeholder", "eg 12345678", "maxlength", "8", "oninput", "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", 3, "formControl"], ["matInput", "", "type", "text", "name", "title", "required", "", "placeholder", "eg Weekend Underprivileged Teacher", 3, "formControl"], ["matInput", "", "name", "content", "rows", "10", "required", "", "minlength", "100", "placeholder", "Please give a short description of the volunteer opportunity (minimum 100 words).", 3, "formControl"], ["required", "", "name", "opportunitySelected", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "skills", "rows", "10", "required", "", "minlength", "1", "placeholder", "eg Leadership, Open-mindedness, etc", 3, "formControl"], ["matInput", "", "placeholder", "Start date", "name", "startDate", "required", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startDatePicker", ""], ["matInput", "", "ngModel", "", "name", "endDate", "required", "", 3, "matDatepicker", "formControl"], ["endDatePicker", ""], ["matInput", "", "type", "text", "name", "hoursRequired", "required", "", "placeholder", "eg 1hr per week", 3, "formControl"], ["required", "", "name", "beneficiariesSelected", 3, "formControl"], ["name", "locationSelected", 3, "formControl"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], ["class", "post-preview", 4, "ngIf"], ["TermsAndConditions", ""], [1, "container-footer"], [1, "copyright"], [3, "value"], [1, "image-preview"], [3, "src", "alt"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "post-preview"], [1, "cards"], [1, "published-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post's image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-button", "", "color", "primary", 1, "post-card-footer-button", 3, "click"], ["content", ""], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 1, "card-image"], ["mat-card-image", "", "alt", "Post's image", 1, "card-image", 3, "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["ngModel", "", "name", "checkbox", "required", ""], ["checkbox", "ngModel"]], template: function PostCreateOrgComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Create Post Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Point-Of-Contact (POC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PostCreateOrgComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "POC's Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PostCreateOrgComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Volunteer Opportunity Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PostCreateOrgComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Volunteer Opportunity Description (minimum 100 words)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PostCreateOrgComponent_mat_error_25_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Type of opportunity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PostCreateOrgComponent_mat_option_30_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PostCreateOrgComponent_mat_error_31_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Volunteer Opportunity Preferred Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PostCreateOrgComponent_mat_error_36_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Choose a start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, PostCreateOrgComponent_mat_error_44_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Choose an end date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, PostCreateOrgComponent_mat_error_52_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Commitment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PostCreateOrgComponent_mat_error_57_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Beneficiaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, PostCreateOrgComponent_mat_option_62_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, PostCreateOrgComponent_mat_error_63_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, PostCreateOrgComponent_mat_option_70_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return _r16.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Upload an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PostCreateOrgComponent_Template_input_change_74_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, PostCreateOrgComponent_div_76_Template, 2, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, PostCreateOrgComponent_div_77_Template, 7, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_Template_button_click_78_listener() { return ctx.generatePreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Generate a preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateOrgComponent_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](84); return ctx.openTermsAndConditions(_r20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, PostCreateOrgComponent_div_82_Template, 37, 13, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, PostCreateOrgComponent_ng_template_83_Template, 86, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " \u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.pocControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pocControl.errors == null ? null : ctx.pocControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.phoneNumberControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("phoneNumber").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleControl.errors == null ? null : ctx.titleControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contentControl.errors == null ? null : ctx.contentControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.opportunitySelectedControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.opportunities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opportunitySelectedControl.errors == null ? null : ctx.opportunitySelectedControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.skillsControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.skillsControl.errors == null ? null : ctx.skillsControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8)("formControl", ctx.startDateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startDateControl.errors == null ? null : ctx.startDateControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r10)("formControl", ctx.endDateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endDateControl.errors == null ? null : ctx.endDateControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.hoursRequiredControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hoursRequiredControl.errors == null ? null : ctx.hoursRequiredControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.beneficiariesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.beneficiaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.beneficiariesControl.errors == null ? null : ctx.beneficiariesControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.locationControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pendingApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPreview);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".post-create-card[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.post-create-body[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: auto;\r\n  padding: 10px;\r\n\r\n  \r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.container-footer[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.modal-body[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n.image-preview[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n.published-post-card[_ngcontent-%COMP%] {\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n.published-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #394dffda;\r\n}\r\n.card-image[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n}\r\n.post-card-title[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 1.7rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 1.5rem;\r\n}\r\n.post-card-subtitle[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 120%;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 2rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: rgb(88, 88, 88);\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n.post-card-content[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 8rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n.post-card-footer[_ngcontent-%COMP%] {\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  font-family: 'Lato', sans-serif;\r\n  align-items: center;\r\n  flex: auto;\r\n  margin: auto;\r\n}\r\n.post-card-footer-button[_ngcontent-%COMP%] {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n.post-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n  justify-content: center;\r\n}\r\n.post-button[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWNyZWF0ZS1vcmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQ7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztFQUViOzs7OztHQUtDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUdBO29EQUNvRDtBQUNwRDtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0E7b0RBQ29EO0FBQ3BEO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUdBO29EQUNvRDtBQUNwRDtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUdBO29EQUNvRDtBQUNwRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCOztFQUV2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTs7RUFFZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoicG9zdHMtY3JlYXRlLW9yZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5wb3N0LWNyZWF0ZS1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3N0LWNyZWF0ZS1ib2R5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAvKlxyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1jb2xvcjogIzRkYThkYTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gICovXHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIEZPT1RFUlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY29udGFpbmVyLWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogTU9EQUwgV0lORE9XXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogRklMRSBQSUNLRVJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcge1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiBQT1NUIFBSRVZJRVdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnBvc3QtcHJldmlldyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnB1Ymxpc2hlZC1wb3N0LWNhcmQge1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDM1cmVtO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnB1Ymxpc2hlZC1wb3N0LWNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4ICMzOTRkZmZkYTtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ucG9zdC1jYXJkLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICB3aWR0aDogMjJyZW07XHJcbiAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLXN1YnRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuXHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1mb290ZXIge1xyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBvc3QtY2FyZC1mb290ZXItYnV0dG9uIHtcclxuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XHJcbn1cclxuXHJcbi5wb3N0LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Kdn7":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/student-board-change-password/student-board-change-password.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StudentBoardChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBoardChangePasswordComponent", function() { return StudentBoardChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_posts_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/posts/post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











function StudentBoardChangePasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardChangePasswordComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide us with your new password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentBoardChangePasswordComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardChangePasswordComponent_div_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentBoardChangePasswordComponent {
    constructor(postsService, modalService, authService) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.requestedNewPassword = false;
    }
    onChangePassword(form) {
        if (form.invalid) {
            return;
        }
        this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
        this.authService.getChangedPasswordListener().subscribe(res => {
            this.requestedNewPassword = res;
        });
    }
}
StudentBoardChangePasswordComponent.ɵfac = function StudentBoardChangePasswordComponent_Factory(t) { return new (t || StudentBoardChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_posts_post_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
StudentBoardChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentBoardChangePasswordComponent, selectors: [["student-change-password"]], decls: 23, vars: 11, consts: [[1, "change-password-card"], [1, "mat-elevation-z0", "change-password-body"], [1, "change-password-title"], [1, "changePasswordForm"], ["changePasswordForm", "ngForm"], ["appearance", "outline", 1, "change-password-form-field"], ["matInput", "", "ngModel", "", "name", "currentPassword", "required", "", "placeholder", "Current Password", 1, "change-password-form-input", 3, "type"], ["currentPassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "ngModel", "", "name", "newPassword", "required", "", "placeholder", "New Password", 1, "change-password-form-input", 3, "type"], ["newPassword", "ngModel"], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function StudentBoardChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardChangePasswordComponent_Template_button_click_9_listener() { return ctx.hideCurrentPassword = !ctx.hideCurrentPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentBoardChangePasswordComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardChangePasswordComponent_Template_button_click_16_listener() { return ctx.hideNewPassword = !ctx.hideNewPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentBoardChangePasswordComponent_mat_error_19_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentBoardChangePasswordComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onChangePassword(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StudentBoardChangePasswordComponent_div_22_Template, 6, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideCurrentPassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hideCurrentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hideCurrentPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideNewPassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hideNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hideNewPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestedNewPassword);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWJvYXJkLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "LLsA":
/*!********************************************!*\
  !*** ./src/app/admin/highlight.service.ts ***!
  \********************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl; //change this in the environment folder
class HighlightService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.highlights = [];
        this.highlightsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getHighlights() {
        this.http.get(BACKEND_URL + 'api/highlights')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(highlightData => {
            return highlightData.highlights.map(highlight => {
                console.log(highlight._id);
                return {
                    id: highlight._id,
                    title: highlight.title,
                    summary: highlight.summary,
                    content: highlight.content,
                    imagePath: highlight.imagePath,
                };
            });
        }))
            .subscribe(mappedHighlights => {
            this.highlights = mappedHighlights;
            this.highlightsUpdated.next([...this.highlights]);
        });
    }
    getHighlight(title) {
        return Object.assign({}, this.highlights.find(highlight => highlight.title === title));
    }
    getHighlightsUpdatedListener() {
        return this.highlightsUpdated.asObservable();
    }
    addHighlight(highlight) {
        const highlightData = new FormData();
        highlightData.append("title", highlight.title);
        highlightData.append("summary", highlight.summary);
        highlightData.append("content", highlight.content);
        highlightData.append("image", highlight.image);
        this.http.post(BACKEND_URL + 'api/highlights', highlightData)
            .subscribe(res => {
            if (this.highlights.length === 3) {
                this.highlights.pop();
            }
            console.log("somehow your highlight went through wilbur! here it is below");
            console.log(highlight);
            this.highlights.push(highlight);
            this.highlightsUpdated.next([...this.highlights]);
        });
    }
    deleteHighlight(id) {
        this.http
            .delete(BACKEND_URL + 'api/highlights/' + id)
            .subscribe((response) => {
            this.highlights = this.highlights.filter(highlight => {
                return highlight.id !== id;
            });
            console.log("successfully deleted post!");
            this.highlightsUpdated.next([...this.highlights]);
        });
    }
}
HighlightService.ɵfac = function HighlightService_Factory(t) { return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HighlightService, factory: HighlightService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LnS8":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-board/admin-board.component.ts ***!
  \************************************************************/
/*! exports provided: AdminBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardComponent", function() { return AdminBoardComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../posts/post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function AdminBoardComponent_ng_template_6_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_6_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide us with your new password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_6_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_6_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.hideCurrentPassword = !ctx_r17.hideCurrentPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminBoardComponent_ng_template_6_mat_error_13_Template, 2, 0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.hideNewPassword = !ctx_r19.hideNewPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdminBoardComponent_ng_template_6_mat_error_21_Template, 2, 0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-footer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_6_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onChangePassword(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminBoardComponent_ng_template_6_div_25_Template, 6, 0, "div", 27);
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.hideCurrentPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideCurrentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.hideCurrentPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.hideNewPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideNewPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.hideNewPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.requestedNewPassword);
} }
function AdminBoardComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CSV File download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " click on the button below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Choose a start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-datepicker-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-datepicker", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Choose an end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-datepicker-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-datepicker", null, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_10_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.onDownloadCSV(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Download CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r25);
} }
function AdminBoardComponent_ng_template_14_div_1_section_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 63);
} }
function AdminBoardComponent_ng_template_14_div_1_section_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 64);
} if (rf & 2) {
    const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r31.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AdminBoardComponent_ng_template_14_div_1_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_14_div_1_section_1_img_2_Template, 1, 0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminBoardComponent_ng_template_14_div_1_section_1_img_3_Template, 1, 1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card-footer", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_section_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx_r42.onPublish(post_r31.id, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_section_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r45.onDeletePrompt(_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_section_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.onRejectPrompt(_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_section_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r47.onMoreInfo(_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r31.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r31.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r31.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, post_r31.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, post_r31.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r31.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r31.location || "No Specific Location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", post_r31.skills, " ");
} }
function AdminBoardComponent_ng_template_14_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_2_Template_button_click_3_listener() { const modal_r49 = ctx.$implicit; return modal_r49.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_2_Template_button_click_34_listener() { const modal_r49 = ctx.$implicit; return modal_r49.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization Name: ", post_r31.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UEN: ", post_r31.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r31.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r31.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's email: ", post_r31.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r31.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frequency/Type of volunteer opportunity: ", post_r31.opportunity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r31.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 13, post_r31.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 15, post_r31.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r31.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r31.beneficiaries, "");
} }
function AdminBoardComponent_ng_template_14_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_4_Template_button_click_3_listener() { const modal_r53 = ctx.$implicit; return modal_r53.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const modal_r53 = ctx.$implicit; const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r55.onDelete(post_r31.id) && modal_r53.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_4_Template_button_click_12_listener() { const modal_r53 = ctx.$implicit; return modal_r53.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_14_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reject Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_6_Template_button_click_3_listener() { const modal_r59 = ctx.$implicit; return modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to reject the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reason for rejecting post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const modal_r59 = ctx.$implicit; const post_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r61.onReject(post_r31.id) && modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Confirm Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_14_div_1_ng_template_6_Template_button_click_19_listener() { const modal_r59 = ctx.$implicit; return modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r38.rejectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r38.rejectReasonControl);
} }
function AdminBoardComponent_ng_template_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminBoardComponent_ng_template_14_div_1_section_1_Template, 39, 13, "section", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_14_div_1_ng_template_2_Template, 36, 17, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminBoardComponent_ng_template_14_div_1_ng_template_4_Template, 14, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminBoardComponent_ng_template_14_div_1_ng_template_6_Template, 21, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r31.approved);
} }
function AdminBoardComponent_ng_template_14_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No post request!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_14_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 75);
} }
function AdminBoardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminBoardComponent_ng_template_14_div_1_Template, 8, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_14_p_2_Template, 3, 0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminBoardComponent_ng_template_14_mat_spinner_3_Template, 1, 0, "mat-spinner", 46);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasRequest === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasRequest === null);
} }
function AdminBoardComponent_ng_template_18_div_2_section_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 84);
} }
function AdminBoardComponent_ng_template_18_div_2_section_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 85);
} if (rf & 2) {
    const post_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r68.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AdminBoardComponent_ng_template_18_div_2_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_18_div_2_section_1_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminBoardComponent_ng_template_18_div_2_section_1_img_3_Template, 1, 1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-footer", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_section_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r79.onMoreInfo(_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Read Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_section_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r81.onRejectPrompt(_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_section_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r82.onMoreInfo(_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r68.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r68.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r68.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r68.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, post_r68.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, post_r68.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r68.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r68.location || "No Specific Location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", post_r68.skills, " ");
} }
function AdminBoardComponent_ng_template_18_div_2_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student's Email: ", report_r86.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student's Contact: ", report_r86.contact, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student's Report: ", report_r86.content, "");
} }
function AdminBoardComponent_ng_template_18_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_2_Template_button_click_3_listener() { const modal_r84 = ctx.$implicit; return modal_r84.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminBoardComponent_ng_template_18_div_2_ng_template_2_div_7_Template, 8, 3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_2_Template_button_click_9_listener() { const modal_r84 = ctx.$implicit; return modal_r84.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r68.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", post_r68.reports);
} }
function AdminBoardComponent_ng_template_18_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_4_Template_button_click_3_listener() { const modal_r90 = ctx.$implicit; return modal_r90.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_4_Template_button_click_32_listener() { const modal_r90 = ctx.$implicit; return modal_r90.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r68.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization Name: ", post_r68.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UEN: ", post_r68.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r68.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r68.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's email: ", post_r68.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r68.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r68.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 12, post_r68.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 14, post_r68.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r68.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r68.beneficiaries, "");
} }
function AdminBoardComponent_ng_template_18_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reject Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_6_Template_button_click_3_listener() { const modal_r94 = ctx.$implicit; return modal_r94.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to reject the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const modal_r94 = ctx.$implicit; const post_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r96.onRejectReportedPost(post_r68.id) && modal_r94.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_18_div_2_ng_template_6_Template_button_click_12_listener() { const modal_r94 = ctx.$implicit; return modal_r94.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminBoardComponent_ng_template_18_div_2_section_1_Template, 37, 13, "section", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_18_div_2_ng_template_2_Template, 11, 2, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminBoardComponent_ng_template_18_div_2_ng_template_4_Template, 34, 16, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminBoardComponent_ng_template_18_div_2_ng_template_6_Template, 14, 0, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r68.reports.length > 0);
} }
function AdminBoardComponent_ng_template_18_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No post with reports! :D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_18_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function AdminBoardComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBoardComponent_ng_template_18_div_2_Template, 8, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminBoardComponent_ng_template_18_p_3_Template, 2, 0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminBoardComponent_ng_template_18_mat_spinner_4_Template, 1, 0, "mat-spinner", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.hasReport === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.hasReport === null);
} }
function AdminBoardComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Publish Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_25_Template_button_click_3_listener() { const modal_r100 = ctx.$implicit; return modal_r100.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Post Published Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_25_Template_button_click_10_listener() { const modal_r100 = ctx.$implicit; return modal_r100.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminBoardComponent_ng_template_27_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", report_r105.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Contact Number: ", report_r105.contact, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reason for Reporting: ", report_r105.content, "");
} }
function AdminBoardComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_27_Template_button_click_3_listener() { const modal_r103 = ctx.$implicit; return modal_r103.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminBoardComponent_ng_template_27_div_7_Template, 7, 3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBoardComponent_ng_template_27_Template_button_click_9_listener() { const modal_r103 = ctx.$implicit; return modal_r103.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.post.reports);
} }
class AdminBoardComponent {
    constructor(postsService, modalService, authService) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.posts = [];
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.hasRequest = null;
        this.hasReport = null;
        this.requestedNewPassword = false;
        this.rejectReasonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        //navbar stuff
        this.active = "changePassword";
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            reason: this.rejectReasonControl,
        });
    }
    ngOnInit() {
        /*
        if (!null) {
          console.log("This prints for some reason...");
          //so !null is treated as true in typescript. cool.
        }
        */
        this.postsService.getPosts();
        this.authStatusObject = this.authService.getAuthStatusObject();
        /*
         * Probably do not need this because there are no changes to authStatusObject once user is logged in.
         * Might have to be revised in the future for chat function.
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
          console.log("Admin dashboard's authStatus observable!");
          this.authStatusObject = authObject;
          this.hasRequest = false;
    
        });
        */
        this.postSub = this.postsService.getPostsUpdatedListener()
            .subscribe((posts) => {
            //console.log(posts);
            //console.log("Admin dashboard's postService observable!");
            this.posts = posts.filter(post => !post.removed);
            if (this.posts.filter(post => !post.approved).length > 0) {
                this.hasRequest = true;
                this.postsNumber = this.posts.filter(post => !post.approved).length;
            }
            else {
                this.hasRequest = false;
            }
            if (this.posts.filter(post => post.reports.length > 0).length > 0) {
                this.hasReport = true;
                this.reportedPostsNumber = this.posts.filter(post => post.reports.length > 0).length;
            }
            else {
                this.hasReport = false;
            }
        });
    }
    onDeletePrompt(content) {
        this.modalService.open(content, { size: 'lg' });
        console.log(this.posts);
    }
    onDelete(postId) {
        this.postsService.deletePost(postId);
        this.postsNumber--;
        if (this.postsNumber === 0) {
            this.hasRequest = false;
        }
        if (this.reportedPostsNumber === 0) {
            this.hasReport = false;
        }
        return true;
    }
    onDeleteReportedPost(postId) {
        this.postsService.deletePost(postId);
        this.reportedPostsNumber--;
        if (this.reportedPostsNumber === 0) {
            this.hasReport = false;
        }
        return true;
    }
    onRejectPrompt(reportPrompt) {
        this.modalService.open(reportPrompt, { size: 'lg' });
    }
    onReject(postId) {
        this.postsService.rejectPost(postId, this.rejectForm.value.reason);
        this.postsNumber--;
        if (this.postsNumber === 0) {
            this.hasRequest = false;
        }
        if (this.reportedPostsNumber === 0) {
            this.hasReport = false;
        }
        this.rejectForm.reset();
        return true;
    }
    onRejectReportedPost(postId) {
        this.postsService.rejectPost(postId, this.rejectForm.value.reason);
        this.reportedPostsNumber--;
        if (this.reportedPostsNumber === 0) {
            this.hasReport = false;
        }
        this.rejectForm.reset();
        return true;
    }
    onPublish(postId, publishContent) {
        this.postsService.publishPost(postId);
        this.modalService.open(publishContent, { scrollable: true });
        this.postsNumber--;
        if (this.postsNumber === 0) {
            this.hasRequest = false;
        }
    }
    onMoreInfo(content) {
        //console.log("Checking this page's posts! ");
        console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    onMoreInfoReport(reportedContent) {
        this.modalService.open(reportedContent, { size: 'lg' });
    }
    onChangePassword(form) {
        if (form.invalid) {
            return;
        }
        this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
        this.authService.getChangedPasswordListener().subscribe(res => {
            this.requestedNewPassword = res;
        });
    }
    onDownloadCSV(form) {
        if (form.invalid) {
            return;
        }
        this.postsService.downloadPosts(form.value.startDate, form.value.endDate);
    }
    closeNotification() {
        this.requestedNewPassword = false;
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
        //this.authStatusSub.unsubscribe();
    }
}
AdminBoardComponent.ɵfac = function AdminBoardComponent_Factory(t) { return new (t || AdminBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AdminBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminBoardComponent, selectors: [["app-admin-board"]], decls: 29, vars: 2, consts: [[1, "page-container"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "changePassword", 1, "nav-item"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "downloadCSV", 1, "nav-item"], ["ngbNavItem", "postsPendingApproval", 1, "nav-item"], ["ngbNavItem", "postsWithReports", 1, "nav-item"], [1, "ml-4", 3, "ngbNavOutlet"], [1, "container"], [1, "copyright"], ["publishContent", ""], ["studentsReport", ""], [1, "change-password-card"], [1, "change-password-body"], [1, "change-password-title"], ["changePasswordForm", "ngForm"], ["appearance", "outline", 1, "change-password-form-field"], ["matInput", "", "ngModel", "", "name", "currentPassword", "required", "", "placeholder", "Current Password", 1, "change-password-form-input", 3, "type"], ["currentPassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "ngModel", "", "name", "newPassword", "required", "", "placeholder", "New Password", 1, "change-password-form-input", 3, "type"], ["newPassword", "ngModel"], [1, "change-password-footer"], ["mat-stroked-button", "", "color", "primary", 1, "change-password-form-button", 3, "click"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "mat-elevation-z0", "change-password-body"], [1, "download-csv-title"], ["csvDateFilterForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "placeholder", "Start date", "ngModel", "", "name", "startDate", 3, "matDatepicker"], ["startDate", "ngModel"], ["matSuffix", "", 3, "for"], ["startDatePicker", ""], ["matInput", "", "placeholder", "End date", "ngModel", "", "name", "endDate", 3, "matDatepicker"], ["endDate", "ngModel"], ["endDatePicker", ""], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", "change-password-button", 3, "click"], [1, "request-posts-div"], ["class", "centered", 4, "ngFor", "ngForOf"], ["class", "info-text mat-body-1", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "centered"], ["class", "cards", 4, "ngIf"], ["content", ""], ["deleteUnapprovedContent", ""], ["rejectUnapprovedContent", ""], [1, "cards"], [1, "request-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post's image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-raised-button", "", 1, "publish-button", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post", 1, "card-image"], ["mat-card-image", "", "alt", "Post's image", 1, "card-image", 3, "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "aria-label", "apply", 1, "submit", 3, "click"], [3, "formGroup"], ["matInput", "", "type", "text", "rows", "10", "placeholder", "Please record down the reason for rejecting this approved post.", 3, "formControl"], [1, "info-text", "mat-body-1"], [1, "spinner"], [1, "info-text"], [1, "report-posts-div"], ["reportContent", ""], ["rejectReportedContent", ""], [1, "report-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post's Image", 3, "src", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 1, "card-image"], ["mat-card-image", "", "alt", "Post's Image", 1, "card-image", 3, "src"], ["class", "modal-body-report", 4, "ngFor", "ngForOf"], [1, "modal-body-report"], [4, "ngFor", "ngForOf"]], template: function AdminBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function AdminBoardComponent_Template_ul_activeIdChange_1_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminBoardComponent_ng_template_6_Template, 26, 11, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Download CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminBoardComponent_ng_template_10_Template, 27, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Posts that are pending your approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminBoardComponent_ng_template_14_Template, 4, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Posts with reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminBoardComponent_ng_template_18_Template, 5, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminBoardComponent_ng_template_25_Template, 12, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdminBoardComponent_ng_template_27_Template, 11, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".card-image[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n}\r\n\r\n.post-card-title[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  text-overflow: ellipsis;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 1.7rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.post-card-subtitle[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size: 120%;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 2rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: rgb(88, 88, 88);\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n\r\n.post-card-content[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  text-overflow: ellipsis;\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 8rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n\r\n.post-card-footer[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n  max-width: 20rem;\r\n  font-family: \"Lato\", sans-serif;\r\n  align-items: center;\r\n  flex: auto;\r\n  margin: auto;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n\r\n\r\n\r\n.change-password-card[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.change-password-title[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.change-password-body[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  width: 100%;\r\n  padding: 10px;\r\n  text-align: center;\r\n\r\n  \r\n}\r\n\r\n.change-password-form-input[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin: auto;\r\n}\r\n\r\n.change-password-form-field[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.change-password-button[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  margin: 0 auto;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.change-password-footer[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  text-align: center;\r\n  width: 100%;\r\n  flex: auto;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  padding: 20px;\r\n  background-color: #94f1a2 !important;\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n.request-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n.request-post-card[_ngcontent-%COMP%] {\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n\r\n.request-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #54f2e5a6;\r\n}\r\n\r\n.publish-button[_ngcontent-%COMP%] {\r\n  background-color: #00b167;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.report-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n.report-post-card[_ngcontent-%COMP%] {\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n\r\n.report-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #f2545ca6;\r\n}\r\n\r\n\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  color: black;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  color: black;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  color: black;\r\n}\r\n\r\n.modal-body-report[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  border: thin solid black;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-align: center;\r\n  color: inherit;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: left;\r\n  align-content: space-around;\r\n\r\n}\r\n\r\n.nav-content[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n\r\n\r\n@media screen {\r\n  .cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EOztBQUVwRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1Qjs7RUFFdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlOztFQUVmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtvREFDb0Q7O0FBQ3BEO0VBQ0U7Ozs7OztHQU1DO0VBQ0QsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztBQUNIOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7OztHQUdDOztFQUVELFlBQVk7RUFDWixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCOzs7OztHQUtDO0FBQ0g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFOzs7R0FHQzs7RUFFRCxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQjs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBR0E7b0RBQ29EOztBQUNwRDtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzs7Ozs7O0dBT0M7QUFDSDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMkJBQTJCOztBQUU3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUdBO29EQUNvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoiYWRtaW4tYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuXHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWZvb3RlciB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XHJcbn1cclxuXHJcbi8qIENIQU5HRSBQQVNTV09SRFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2hhbmdlLXBhc3N3b3JkLWNhcmQge1xyXG4gIC8qIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLypcclxuXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAqL1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWZvcm0taW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWZvcm0tZmllbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC1mb290ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogYXV0bztcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmMWEyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi8qIEpPQlMgUEVORElORyBBUFBST1ZBTCBDQVJEU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ucmVxdWVzdC1wb3N0cy1kaXYge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LXBvc3QtY2FyZCB7XHJcbiAgLypcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICAqL1xyXG5cclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gIC8qXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTdmZjU3O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgKi9cclxufVxyXG5cclxuLnJlcXVlc3QtcG9zdC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTFweCAjNTRmMmU1YTY7XHJcbn1cclxuXHJcbi5wdWJsaXNoLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE2NztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEpPQlMgV0lUSCBSRVBPUlRTIENBUkRTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5yZXBvcnQtcG9zdHMtZGl2IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucmVwb3J0LXBvc3QtY2FyZCB7XHJcbiAgLypcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICAqL1xyXG5cclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gIC8qXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgKi9cclxufVxyXG5cclxuLnJlcG9ydC1wb3N0LWNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4ICNmMjU0NWNhNjtcclxufVxyXG5cclxuLyogRk9PVEVSXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jb3B5cmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTU9EQUwgV0lORE9XXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS1yZXBvcnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBNSVNDRUxMQU5FT1VTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5pbmZvLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgLypcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICovXHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxufVxyXG5cclxuLm5hdi1jb250ZW50IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5cclxuLyogU01BTEwgU0NSRUVOIFNJWkUgLy9UT0RPOiBOT1QgRE9ORSBZRVRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "O/5P":
/*!********************************************************!*\
  !*** ./src/app/admin/org-board/org-board.component.ts ***!
  \********************************************************/
/*! exports provided: OrgBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgBoardComponent", function() { return OrgBoardComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../posts/post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function OrgBoardComponent_ng_template_14_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_14_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please provide us with your new password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_14_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_14_div_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.hideCurrentPassword = !ctx_r13.hideCurrentPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OrgBoardComponent_ng_template_14_mat_error_12_Template, 2, 0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_14_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.hideNewPassword = !ctx_r15.hideNewPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrgBoardComponent_ng_template_14_mat_error_19_Template, 2, 0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_14_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onChangePassword(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrgBoardComponent_ng_template_14_div_22_Template, 6, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.hideCurrentPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideCurrentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.hideCurrentPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.hideNewPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideNewPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.hideNewPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.requestedNewPassword);
} }
function OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 48);
} }
function OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const post_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r20.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_img_1_Template, 1, 0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_img_2_Template, 1, 1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-footer", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.onDeletePrompt(_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Delete Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.onMoreInfo(_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r20.imagePath === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r20.imagePath !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r20.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, post_r20.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, post_r20.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r20.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r20.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", post_r20.skills, " ");
} }
function OrgBoardComponent_ng_template_18_div_1_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_18_div_1_section_1_mat_card_1_Template, 34, 13, "mat-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r20.approved);
} }
function OrgBoardComponent_ng_template_18_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_ng_template_2_Template_button_click_3_listener() { const modal_r35 = ctx.$implicit; return modal_r35.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_ng_template_2_Template_button_click_36_listener() { const modal_r35 = ctx.$implicit; return modal_r35.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization Name: ", post_r20.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UEN: ", post_r20.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student Group Name: ", post_r20.studentGroupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r20.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r20.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's email: ", post_r20.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r20.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frequency/Type of volunteer opportunity: ", post_r20.opportunityType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r20.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 14, post_r20.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 16, post_r20.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r20.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r20.beneficiaries, "");
} }
function OrgBoardComponent_ng_template_18_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_ng_template_4_Template_button_click_3_listener() { const modal_r39 = ctx.$implicit; return modal_r39.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_ng_template_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const modal_r39 = ctx.$implicit; const post_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.onDelete(post_r20.id) && modal_r39.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_18_div_1_ng_template_4_Template_button_click_12_listener() { const modal_r39 = ctx.$implicit; return modal_r39.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_18_div_1_section_1_Template, 2, 1, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_18_div_1_ng_template_2_Template, 38, 18, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrgBoardComponent_ng_template_18_div_1_ng_template_4_Template, 14, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r20.approved);
} }
function OrgBoardComponent_ng_template_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No post requests or all posts have already been approved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_18_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function OrgBoardComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_18_div_1_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_18_p_2_Template, 3, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrgBoardComponent_ng_template_18_mat_spinner_3_Template, 1, 0, "mat-spinner", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hasRequest === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hasRequest === null);
} }
function OrgBoardComponent_ng_template_22_div_1_section_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 68);
} }
function OrgBoardComponent_ng_template_22_div_1_section_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 69);
} if (rf & 2) {
    const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r48.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OrgBoardComponent_ng_template_22_div_1_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_22_div_1_section_1_img_2_Template, 1, 0, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrgBoardComponent_ng_template_22_div_1_section_1_img_3_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-footer", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_section_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r61.onMoreInfo(_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " View Applicants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_section_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.onCompletePrompt(_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_section_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r64.onMoreInfo(_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r48.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r48.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r48.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r48.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, post_r48.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, post_r48.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r48.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r48.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", post_r48.skills, " ");
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const student_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r71.acceptApplicant(post_r48.id, student_r68.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Accept Applicant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_button_9_Template, 2, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_button_10_Template, 2, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r68 = ctx.$implicit;
    const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Email: ", student_r68.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Contact: ", student_r68.contact, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Application: ", student_r68.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r67.acceptedBefore(post_r48.id, student_r68.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.acceptedBefore(post_r48.id, student_r68.email));
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_2_Template_button_click_3_listener() { const modal_r66 = ctx.$implicit; return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrgBoardComponent_ng_template_22_div_1_ng_template_2_div_7_Template, 11, 5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_2_Template_button_click_9_listener() { const modal_r66 = ctx.$implicit; return modal_r66.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r48.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", post_r48.students);
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_4_Template_button_click_3_listener() { const modal_r79 = ctx.$implicit; return modal_r79.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_4_Template_button_click_32_listener() { const modal_r79 = ctx.$implicit; return modal_r79.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r48.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization Name: ", post_r48.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UEN: ", post_r48.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r48.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r48.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's email: ", post_r48.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r48.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r48.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 12, post_r48.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 14, post_r48.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r48.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r48.beneficiaries, "");
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_6_Template_button_click_3_listener() { const modal_r83 = ctx.$implicit; return modal_r83.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const modal_r83 = ctx.$implicit; const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r85.onDeleteAppliedPost(post_r48.id) && modal_r83.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_6_Template_button_click_12_listener() { const modal_r83 = ctx.$implicit; return modal_r83.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_22_div_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Completion Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_8_Template_button_click_3_listener() { const modal_r89 = ctx.$implicit; return modal_r89.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to mark the Post as completed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const modal_r89 = ctx.$implicit; const post_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r91.onCompleteAppliedPost(post_r48.id) && modal_r89.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_22_div_1_ng_template_8_Template_button_click_12_listener() { const modal_r89 = ctx.$implicit; return modal_r89.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_22_div_1_section_1_Template, 37, 13, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_22_div_1_ng_template_2_Template, 11, 2, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrgBoardComponent_ng_template_22_div_1_ng_template_4_Template, 34, 16, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrgBoardComponent_ng_template_22_div_1_ng_template_6_Template, 14, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrgBoardComponent_ng_template_22_div_1_ng_template_8_Template, 14, 0, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r48.students.length > 0);
} }
function OrgBoardComponent_ng_template_22_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No applications yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_22_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function OrgBoardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_22_div_1_Template, 10, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_22_p_2_Template, 3, 0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrgBoardComponent_ng_template_22_mat_spinner_3_Template, 1, 0, "mat-spinner", 22);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.approvedPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasApplication === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasApplication === null);
} }
function OrgBoardComponent_ng_template_26_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 85);
} }
function OrgBoardComponent_ng_template_26_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 86);
} if (rf & 2) {
    const post_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r98.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OrgBoardComponent_ng_template_26_div_1_ng_template_36_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Email: ", student_r112.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Contact: ", student_r112.contact, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Student's Application: ", student_r112.content, " ");
} }
function OrgBoardComponent_ng_template_26_div_1_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_36_Template_button_click_3_listener() { const modal_r110 = ctx.$implicit; return modal_r110.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrgBoardComponent_ng_template_26_div_1_ng_template_36_div_7_Template, 8, 3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_36_Template_button_click_9_listener() { const modal_r110 = ctx.$implicit; return modal_r110.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r98.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", post_r98.students);
} }
function OrgBoardComponent_ng_template_26_div_1_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_38_Template_button_click_3_listener() { const modal_r116 = ctx.$implicit; return modal_r116.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_38_Template_button_click_32_listener() { const modal_r116 = ctx.$implicit; return modal_r116.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r98.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization Name: ", post_r98.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UEN: ", post_r98.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Point of Contact (POC): ", post_r98.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's phoneNumber: ", post_r98.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("POC's email: ", post_r98.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brief Description for gig: ", post_r98.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preferred Skills: ", post_r98.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 12, post_r98.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 14, post_r98.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Commitment Hours: ", post_r98.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Beneficiaries: ", post_r98.beneficiaries, "");
} }
function OrgBoardComponent_ng_template_26_div_1_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_40_Template_button_click_3_listener() { const modal_r120 = ctx.$implicit; return modal_r120.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to delete the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_40_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const modal_r120 = ctx.$implicit; const post_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r122.onDeleteAppliedPost(post_r98.id) && modal_r120.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_40_Template_button_click_12_listener() { const modal_r120 = ctx.$implicit; return modal_r120.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_26_div_1_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Completion Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_42_Template_button_click_3_listener() { const modal_r126 = ctx.$implicit; return modal_r126.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Are you sure you want to mark the Post as completed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "If you are removing the post not because it is completed, please fill in the reason here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_42_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const modal_r126 = ctx.$implicit; const post_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r128.onComplete(post_r98.id) && modal_r126.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Confirm Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_ng_template_42_Template_button_click_17_listener() { const modal_r126 = ctx.$implicit; return modal_r126.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r108.removeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r108.removeReasonControl);
} }
function OrgBoardComponent_ng_template_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrgBoardComponent_ng_template_26_div_1_img_3_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrgBoardComponent_ng_template_26_div_1_img_4_Template, 1, 1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-subtitle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-footer", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r132.onCompletePrompt(_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Complete / Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgBoardComponent_ng_template_26_div_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r134.onMoreInfo(_r103); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, OrgBoardComponent_ng_template_26_div_1_ng_template_36_Template, 11, 2, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, OrgBoardComponent_ng_template_26_div_1_ng_template_38_Template, 34, 16, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, OrgBoardComponent_ng_template_26_div_1_ng_template_40_Template, 14, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, OrgBoardComponent_ng_template_26_div_1_ng_template_42_Template, 19, 2, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !post_r98.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r98.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r98.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r98.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 9, post_r98.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, post_r98.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r98.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r98.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Skillsets: ", post_r98.skills, " ");
} }
function OrgBoardComponent_ng_template_26_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No approved posts yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgBoardComponent_ng_template_26_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function OrgBoardComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgBoardComponent_ng_template_26_div_1_Template, 44, 13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgBoardComponent_ng_template_26_p_2_Template, 3, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrgBoardComponent_ng_template_26_mat_spinner_3_Template, 1, 0, "mat-spinner", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.approvedPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.hasNoApprovedPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.hasNoApprovedPosts === null);
} }
class OrgBoardComponent {
    constructor(postsService, modalService, authService) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.posts = [];
        this.approvedPosts = [];
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.hasNoApprovedPosts = null;
        this.hasRequest = null;
        this.hasApplication = null;
        this.requestedNewPassword = false;
        this.removeReasonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        //for the navbar
        this.active = "changePassword";
        this.removeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            reason: this.removeReasonControl,
        });
    }
    ngOnInit() {
        this.authStatusObject = this.authService.getAuthStatusObject(); //another one that violates the async
        /*
         * Probably do not need this because there are no changes to authStatusObject once user is logged in.
         * Might have to be revised in the future for chat function.
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
          console.log("organisation dashboard's authStatus observable!");
          this.authStatusObject = authObject;
          this.hasRequest = false;
    
        });
        */
        this.postsService.getPosts(); //NEED THIS? To push the posts to the subscription for the getPostsUpdatedListener to work
        this.postSub = this.postsService.getPostsUpdatedListener()
            .subscribe((posts) => {
            //console.log("organisation dashboard's postService observable!");
            //console.log(posts);
            this.posts = [];
            this.approvedPosts = [];
            this.posts = posts.filter(post => !post.removed);
            //console.log("organisation dashboard's postService observable! After filtering posts removed,");
            //console.log(this.posts);
            this.posts = this.posts
                .filter(post => post.email === this.authStatusObject.email);
            this.approvedPosts = this.posts
                .filter(post => {
                return (post.approved === true);
            });
            if (this.approvedPosts.length === 0) {
                this.hasNoApprovedPosts = true;
            }
            else {
                this.hasNoApprovedPosts = false;
            }
            if (this.posts.filter(post => !post.approved).length > 0) {
                this.hasRequest = true;
                this.postsNumber = this.posts.filter(post => !post.approved).length;
            }
            else {
                this.hasRequest = false;
            }
            if (this.posts.filter(post => post.students.length > 0).length > 0) {
                this.hasApplication = true;
                this.appliedPostsNumber = this.posts.filter(post => post.students.length > 0).length;
            }
            else {
                this.hasApplication = false;
            }
        });
    }
    onDelete(postId) {
        this.postsService.deletePost(postId);
        this.postsNumber--;
        if (this.postsNumber === 0) {
            this.hasRequest = false;
        }
        if (this.appliedPostsNumber === 0) {
            this.hasApplication = false;
        }
        return true;
    }
    onDeletePrompt(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    //function should not be available since after a post is approved, it can either only be
    //rejected by admin or mark as complete
    onDeleteAppliedPost(postId) {
        this.postsService.deletePost(postId);
        this.appliedPostsNumber--;
        if (this.appliedPostsNumber === 0) {
            this.hasApplication = false;
        }
    }
    //testing needed
    onComplete(postId) {
        this.postsService.completePost(postId, this.removeForm.value.reason);
        this.postsNumber--;
        if (this.postsNumber === 0) {
            this.hasRequest = false;
        }
        if (this.appliedPostsNumber === 0) {
            this.hasApplication = false;
        }
        this.removeForm.reset();
        return true;
    }
    onCompletePrompt(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    onCompleteAppliedPost(postId) {
        this.postsService.completePost(postId, this.removeForm.value.reason);
        this.appliedPostsNumber--;
        if (this.appliedPostsNumber === 0) {
            this.hasApplication = false;
        }
        this.removeForm.reset();
        return true;
    }
    onMoreInfo(content) {
        //console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    //need to build
    acceptApplicant(postId, userEmail) {
        this.postsService.acceptStudent(postId, userEmail);
    }
    //need to build up
    acceptedBefore(postId, userEmail) {
        const post = this.postsService.getPost(postId);
        return post.studentsAccepted.includes(userEmail);
    }
    onChangePassword(form) {
        if (form.invalid) {
            return;
        }
        this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
        this.authService.getChangedPasswordListener().subscribe(res => {
            this.requestedNewPassword = res;
        });
    }
    closeNotification() {
        this.requestedNewPassword = false;
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
        //this.authStatusSub.unsubscribe();
    }
}
OrgBoardComponent.ɵfac = function OrgBoardComponent_Factory(t) { return new (t || OrgBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
OrgBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrgBoardComponent, selectors: [["app-org-board"]], decls: 35, vars: 3, consts: [[1, "page-container"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "changePassword", 1, "nav-item"], ["ngbNavLink", ""], ["ngbNavContent", "", "class", "nav-content"], ["ngbNavItem", "pendingPosts"], ["ngbNavContent", ""], ["ngbNavItem", "postsWithApplications"], ["ngbNavItem", "Approved posts"], [1, "ml-4", 3, "ngbNavOutlet"], [1, "container-footer"], [1, "copyright"], [1, "change-password-container"], [1, "mat-elevation-z0", "change-password-body"], [1, "change-password-title"], [1, "changePasswordForm"], ["changePasswordForm", "ngForm"], ["appearance", "outline", 1, "change-password-form-field"], ["matInput", "", "ngModel", "", "name", "currentPassword", "required", "", "placeholder", "Current Password", 1, "change-password-form-input", 3, "type"], ["currentPassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "ngModel", "", "name", "newPassword", "required", "", "placeholder", "New Password", 1, "change-password-form-input", 3, "type"], ["newPassword", "ngModel"], ["mat-stroked-button", "", "color", "primary", 1, "change-password-form-button", 3, "click"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "request-posts-div"], ["class", "centered", 4, "ngFor", "ngForOf"], ["class", "info-text", 4, "ngIf"], [1, "centered"], ["class", "cards", 4, "ngIf"], ["content", ""], ["deleteUnapprovedContent", ""], [1, "cards"], ["class", "request-post-card", 4, "ngIf"], [1, "request-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Placeholder image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image", 1, "card-image"], ["mat-card-image", "", "alt", "Placeholder image", 1, "card-image", 3, "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "aria-label", "apply", 1, "submit", 3, "click"], [1, "info-text"], [1, "application-posts-div"], ["class", "info-text-2", 4, "ngIf"], ["applicantContent", ""], ["deleteAppliedContent", ""], ["completeContentWithApplicants", ""], [1, "application-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post request", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post request's image", 3, "src", 4, "ngIf"], ["mat-raised-button", "", 1, "application-post-card-button-view-applicants", 3, "click"], ["mat-raised-button", "", 1, "application-post-card-button-complete", 3, "click"], ["mat-card-image", "", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post request", 1, "card-image"], ["mat-card-image", "", "alt", "Post request's image", 1, "card-image", 3, "src"], ["class", "modal-body-content", 4, "ngFor", "ngForOf"], [1, "modal-body-content"], [1, "modal-body-content-student"], [1, "modal-body-content-button"], ["mat-stroked-button", "", "color", "primary", "class", "modal-body-content-button-accept", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "disabled", "", "color", "primary", "class", "modal-body-content-button-accept", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "modal-body-content-button-accept", 3, "click"], ["mat-stroked-button", "", "disabled", "", "color", "primary", 1, "modal-body-content-button-accept"], [1, "info-text-2"], [1, "approved-posts-div"], [1, "approved-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post with applications", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "post with application's image", 3, "src", 4, "ngIf"], ["mat-raised-button", "", 1, "approved-post-card-button-complete", 3, "click"], ["completeContent", ""], ["mat-card-image", "", "src", "../../../assets/light-background-placeholder.png", "alt", "Placeholder image for post with applications", 1, "card-image"], ["mat-card-image", "", "alt", "post with application's image", 1, "card-image", 3, "src"], [4, "ngFor", "ngForOf"], [2, "border", "thin solid black", "margin-top", "0.5rem", "margin-bottom", "0.5rem"], [2, "text-align", "center"], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "text", "rows", "10", "placeholder", "Please tell us why you are removing the post. (eg lack of interest in job, job expired, etc)", 3, "formControl"]], template: function OrgBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You should use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "class=\"nav-pills\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " if you need pills and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "[orientation]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " input to change nav orientation\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function OrgBoardComponent_Template_ul_activeIdChange_9_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OrgBoardComponent_ng_template_14_Template, 23, 11, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Posts pending approval from admins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OrgBoardComponent_ng_template_18_Template, 4, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Posts with applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrgBoardComponent_ng_template_22_Template, 4, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Approved posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OrgBoardComponent_ng_template_26_Template, 4, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Active: ", ctx.active, "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".card-image[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n}\r\n.post-card-title[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 1.7rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 1.5rem;\r\n}\r\n.post-card-subtitle[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 120%;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 2rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: rgb(88, 88, 88);\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n.post-card-content[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 8rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n.post-card-footer[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n  max-width: 20rem;\r\n  font-family: 'Lato', sans-serif;\r\n  align-items: center;\r\n  flex: auto;\r\n  margin: auto;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: flex;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n\r\n.change-password-container[_ngcontent-%COMP%] {\r\n\r\n  width: 100%;\r\n  padding: 10px;\r\n\r\n  \r\n}\r\n.change-password-title[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-align: center;\r\n}\r\n.change-password-body[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  width: 100%;\r\n  padding: 10px;\r\n  text-align: center;\r\n\r\n  \r\n}\r\n.change-password-form-input[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin: auto;\r\n}\r\n\r\n.change-password-form-field[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.change-password-button[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0 auto;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n.change-password-footer[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-align: center;\r\n  width: 100%;\r\n  flex: auto\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  padding: 20px;\r\n  background-color: #94f1a2 !important;\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.request-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n.request-post-card[_ngcontent-%COMP%] {\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n.request-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #d7e23cdc;\r\n}\r\n.publish-button[_ngcontent-%COMP%] {\r\n  background-color: #00b167;\r\n  color: white;\r\n}\r\n\r\n.application-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n.application-post-card[_ngcontent-%COMP%] {\r\n\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n.application-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #db2bc4e0;\r\n}\r\n.application-post-card-button-view-applicants[_ngcontent-%COMP%] {\r\n  background-color: #b810da;\r\n  color: white;\r\n}\r\n.application-post-card-button-complete[_ngcontent-%COMP%] {\r\n  background-color: #00b167;\r\n  color: white;\r\n}\r\n\r\n.approved-posts-div[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n.approved-post-card[_ngcontent-%COMP%] {\r\n\r\n  \r\n\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n\r\n  \r\n}\r\n.approved-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #34df25e0;\r\n}\r\n.approved-post-card-button-complete[_ngcontent-%COMP%] {\r\n  background-color: #00b167;\r\n  color: white;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  color: black;\r\n}\r\n.modal-body[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  color: black;\r\n}\r\n.modal-body-content[_ngcontent-%COMP%] {\r\n  border: thin solid black;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.modal-body-content-student[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.modal-body-content-button[_ngcontent-%COMP%] {\r\n  justify-content:flex-end;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-content: space-around;\r\n}\r\n.modal-body-content-button-accept[_ngcontent-%COMP%] {\r\n  color: #00b167;\r\n  margin-left: 2rem;\r\n}\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  color: black;\r\n}\r\n.modal-body-report[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  border: thin solid black;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-align: center;\r\n  color: inherit;\r\n  margin-top: 5rem;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.page-container[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: left;\r\n  align-content: space-around;\r\n\r\n}\r\n.nav-content[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n\r\n@media screen {\r\n  .cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQUNvRDtBQUNwRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCOztFQUV2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTs7RUFFZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7b0RBQ29EO0FBQ3BEOztFQUVFLFdBQVc7RUFDWCxhQUFhOztFQUViOzs7Ozs7Ozs7R0FTQztBQUNIO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztBQUNIO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTs7OztDQUlDO0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0Y7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0U7OztHQUdDOztFQUVELFlBQVk7RUFDWixhQUFhOzs7RUFHYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFOzs7R0FHQzs7RUFFRCxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtvREFDb0Q7QUFDcEQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFOzs7R0FHQzs7RUFFRCxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtvREFDb0Q7QUFDcEQ7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBR0E7b0RBQ29EO0FBQ3BEO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTs7Ozs7OztHQU9DO0FBQ0g7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMkJBQTJCOztBQUU3QjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFFQTtvREFDb0Q7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoib3JnLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHTE9CQUxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG5cclxuICB3aWR0aDogMjJyZW07XHJcbiAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNnB4O1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWZvb3RlciB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG59XHJcblxyXG5cclxuLyogQ0hBTkdFIFBBU1NXT1JEXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyIHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLypcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgKi9cclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQtYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLypcclxuXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAqL1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWZvcm0taW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLypcclxuLmNoYW5nZS1wYXNzd29yZC1mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMGIxNjc7XHJcbn1cclxuKi9cclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQtZm9vdGVyIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiBhdXRvXHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGYxYTIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi8qIEpPQlMgUEVORElORyBBUFBST1ZBTCBDQVJEU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ucmVxdWVzdC1wb3N0cy1kaXYge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LXBvc3QtY2FyZCB7XHJcbiAgLypcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICAqL1xyXG5cclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuXHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAvKlxyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1jb2xvcjogIzU3ZmY1NztcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gICovXHJcbn1cclxuXHJcbi5yZXF1ZXN0LXBvc3QtY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDExcHggI2Q3ZTIzY2RjO1xyXG59XHJcblxyXG4ucHVibGlzaC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogSk9CUyBXSVRIIEFQUExJQ0FUSU9OUyBDQVJEU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uYXBwbGljYXRpb24tcG9zdHMtZGl2IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tcG9zdC1jYXJkIHtcclxuXHJcbiAgLypcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICAqL1xyXG5cclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gIC8qXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgKi9cclxufVxyXG5cclxuLmFwcGxpY2F0aW9uLXBvc3QtY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDExcHggI2RiMmJjNGUwO1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tcG9zdC1jYXJkLWJ1dHRvbi12aWV3LWFwcGxpY2FudHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiODEwZGE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tcG9zdC1jYXJkLWJ1dHRvbi1jb21wbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE2NztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEFQUFJPVkVEIFBPU1RTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5hcHByb3ZlZC1wb3N0cy1kaXYge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5hcHByb3ZlZC1wb3N0LWNhcmQge1xyXG5cclxuICAvKlxyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG4gICovXHJcblxyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDM1cmVtO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgLypcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICNmZjAwMDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAqL1xyXG59XHJcblxyXG4uYXBwcm92ZWQtcG9zdC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTFweCAjMzRkZjI1ZTA7XHJcbn1cclxuXHJcbi5hcHByb3ZlZC1wb3N0LWNhcmQtYnV0dG9uLWNvbXBsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMTY3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIEZPT1RFUlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY29weXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIE1PREFMIFdJTkRPV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS1jb250ZW50IHtcclxuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHktY29udGVudC1zdHVkZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5LWNvbnRlbnQtYnV0dG9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5LWNvbnRlbnQtYnV0dG9uLWFjY2VwdCB7XHJcbiAgY29sb3I6ICMwMGIxNjc7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS1yZXBvcnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogTUlTQ0VMTEFORU9VU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uaW5mby10ZXh0IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIC8qXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAqL1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLyogU01BTEwgU0NSRUVOIFNJWkUgLy9UT0RPOiBOT1QgRE9ORSBZRVRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const role = this.authService.getAuthStatusObject().role;
        const isAuth = this.authService.getIsAuth();
        if (isAuth) {
            if (route.data.roles && route.data.roles.indexOf(role) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "SJn0":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _errors_forget_password_error_forget_password_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/forget-password-error/forget-password-error.component */ "nfz1");
/* harmony import */ var _errors_login_general_error_login_general_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/login-general-error/login-general-error.component */ "0q4w");
/* harmony import */ var _errors_login_wrong_password_error_login_wrong_password_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/login-wrong-password-error/login-wrong-password-error.component */ "nf0l");
/* harmony import */ var _errors_signup_before_error_signup_before_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/signup-before-error/signup-before-error.component */ "qlg4");
/* harmony import */ var _errors_update_password_error_update_password_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/update-password-error/update-password-error.component */ "7VJF");
/* harmony import */ var _errors_user_not_verified_error_user_not_verified_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/user-not-verified-error/user-not-verified-error.component */ "9l3C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");










class ErrorInterceptor {
    //public errorListener = new Subject<any>();
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = "Check your email to verify your account!";
            if (error.error.errorCode === 1) {
                this.dialog.open(_errors_forget_password_error_forget_password_error_component__WEBPACK_IMPORTED_MODULE_2__["ForgetPasswordErrorComponent"]);
            }
            else if (error.error.errorCode === 2) {
                this.dialog.open(_errors_login_wrong_password_error_login_wrong_password_error_component__WEBPACK_IMPORTED_MODULE_4__["LoginWrongPasswordErrorComponent"]);
            }
            else if (error.error.errorCode == 3) {
                this.dialog.open(_errors_login_general_error_login_general_error_component__WEBPACK_IMPORTED_MODULE_3__["LoginGeneralErrorComponent"]);
            }
            else if (error.error.errorCode == 4) {
                this.dialog.open(_errors_update_password_error_update_password_error_component__WEBPACK_IMPORTED_MODULE_6__["UpdatePasswordErrorComponent"]);
            }
            else if (error.error.errorCode == 5) {
                this.dialog.open(_errors_signup_before_error_signup_before_error_component__WEBPACK_IMPORTED_MODULE_5__["SignupBeforeErrorComponent"]);
            }
            else if (error.error.errorCode == 11) {
                this.dialog.open(_errors_user_not_verified_error_user_not_verified_error_component__WEBPACK_IMPORTED_MODULE_7__["NotVerifiedErrorComponent"]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'jobsApp';
        this.showOverlay = true;
        if (localStorage.getItem('expiration')) {
            const expiryDate = new Date(localStorage.getItem('expiration'));
            const rightNow = new Date();
            const diff = expiryDate.getTime() - rightNow.getTime();
            if (diff <= 0) {
                localStorage.clear();
            }
        }
        if (localStorage.getItem('token')) {
            this.authService.autoAuthUser();
        }
        this.router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    ngOnInit() {
        //this.authService.autoAuthUser();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
            //console.log("inside app-component's ngOnInit here!");
            //console.log(authObject);
            this.authStatusObject = authObject;
            //this.authService.autoAuthUser();
            //console.log("PAGE REFRESHED!!!!!!");
        });
        //console.log("This line acTiVated!!!!!!");
        //this.authService.autoAuthUser();
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    prepareRoute(outlet) {
        if (outlet.isActivated)
            return outlet.activatedRoute.snapshot.url;
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.showOverlay = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[1, "white-block"], [1, "content"], ["class", "loading-icon", 4, "ngIf"], ["outlet", "outlet"], [1, "loading-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: ["mat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztDQWFDOztBQUVEO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcCA6IDVyZW07XHJcbn1cclxuXHJcbmFwcC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wIDogMHB4O1xyXG4gIGhlaWdodDogMTByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuKi9cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        position: 'relative'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%'
                        })
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0
                        })
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            display: 'block'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                        }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                            display: 'block',
                            height: '100%'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 1,
                        }))
                    ], { optional: true })
                ])
            ])
        ] } });


/***/ }),

/***/ "VUEF":
/*!**************************************************************************!*\
  !*** ./src/app/posts/posts-create-admin/posts-create-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostCreateAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateAdminComponent", function() { return PostCreateAdminComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dialogs_start_date_error_dialog_start_date_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/start-date-error-dialog/start-date-error-dialog.component */ "sKRj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function PostCreateAdminComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter provide us the name of the Organisation you are helping to create the post for.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter provide us the name of your Point-Of-Contact.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter provide us the name of your Point-Of-Contact.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide us your Point-Of-Contact's phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide us your email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide us the job's title.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please give us a description of the job (minimum 100 words).");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", skill_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r27);
} }
function PostCreateAdminComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select the skill(s) an applicant require for the job.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please pick a start date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please pick an end date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your start date cannot be later than the end date! If so, your post will be rejected! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opportunity_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opportunity_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opportunity_r28);
} }
function PostCreateAdminComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please indicate the frequency of this job.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide the details on the commitment required of the student.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", beneficiary_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](beneficiary_r29);
} }
function PostCreateAdminComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide us the main beneficiaries of this opportunity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_mat_option_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", location_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r30);
} }
function PostCreateAdminComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r22.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r22.form.value.titleControl);
} }
function PostCreateAdminComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Submitted for approval!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Please wait while our administrators vet your post. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_div_96_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_ng_template_101_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please fill all required fields before submitting your request.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_ng_template_101_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please click on the checkbox at the end of the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PostCreateAdminComponent_ng_template_101_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_ng_template_101_Template_button_click_3_listener() { const modal_r33 = ctx.$implicit; return modal_r33.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Terms and Conditions of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "1. Agreement to Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " All access of any area of INSERT URL HERE ONCE DONE (\"The Website\") is governed by the terms and conditions below (\"Terms\"). If you do not accept any of these Terms, exit immediately. Continue only if you accept these Terms. In these Terms, the words \"we\", \"our\" and \"us\" refers to the Government of Singapore. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "2. Access To The Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " The accessibility and operation of The Website relies on technologies outside our control. We do not guarantee continuous accessibility or uninterrupted operation of The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "3. Relying On Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " We provide The Website as a general information source only and we are not involved in giving professional advice here. The Website may not cover all information available on a particular issue. Before relying on the Website, you should do your own checks or obtain professional advice relevant to your particular circumstances. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "4. Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Where appropriate, we use available technology to protect the security of communications made through The Website. However, we do not accept liability for the security, authenticity, integrity or confidentiality of any transactions and other communications made through The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Internet communications may be susceptible to interference or interception by third parties. Despite our best efforts, we make no warranties that The Website is free of infection by computer viruses or other unauthorised software. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "5. Hyperlinks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " We are not responsible or liable for the availability or content of any other Internet site (not provided by us) linked to or from The Website. Access to any other Internet site is at your own risk. If you create a link or frame to The Website, you do so at your own risk. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " We reserve the right to object or disable any link or frame to or from The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "We reserve the right to change the URL of The Website.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "6. Intellectual Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Materials, including source code, pages, documents and online graphics, audio and video in The Website are protected by law. The intellectual property rights in the materials is owned by or licensed to us. All rights reserved. (Government of Singapore \u00A9 2018). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Apart from any fair dealings for the purposes of private study, research, criticism or review, as permitted in law, no part of The Website may be reproduced or reused for any commercial purposes whatsoever without our prior written permission. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "7. General Disclaimer And Limitation Of Liability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "We will not be liable for any loss or damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " 1. That you may incur on account of using, visiting or relying on any statements, opinion, representation or information in The Website; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " 2. Resulting from any delay in operation or transmission, communications failure, Internet access difficulties or malfunctions in equipment or software; or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " 3. Resulting from the conduct or the views of any person who accesses or uses The Website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "8. Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " There are currently no fees for using any part of The Website. We reserve the right to introduce new fees from time to time. We are not responsible for any fees charged by any other Internet site (not provided by us). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "9. Applicable Laws");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Use of The Website and these Terms are governed by the laws of Singapore. Any claim relating to use of The Website shall be heard by Singapore Courts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "10. Variation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " We may revise these Terms at any time by updating this page. You should visit this page from time to time and review the then current Terms because they are binding on you. We may modify or discontinue any information or features that form part of The Website at any time, with or without notice to you, and without liability. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-checkbox", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "I have read the above Terms and Conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_ng_template_101_Template_button_click_80_listener() { const modal_r33 = ctx.$implicit; return modal_r33.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_ng_template_101_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](77); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _r34.valid && ctx_r39.onAddPostReactive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, PostCreateAdminComponent_ng_template_101_mat_error_84_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, PostCreateAdminComponent_ng_template_101_mat_error_85_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r34.invalid);
} }
function PostCreateAdminComponent_div_103_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 60);
} }
function PostCreateAdminComponent_div_103_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r42.postPreview.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PostCreateAdminComponent_div_103_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_div_103_ng_template_35_Template_button_click_3_listener() { const modal_r45 = ctx.$implicit; return modal_r45.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_div_103_ng_template_35_Template_button_click_32_listener() { const modal_r45 = ctx.$implicit; return modal_r45.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r44.postPreview.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Organization Name: ", ctx_r44.postPreview.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" UEN: ", ctx_r44.postPreview.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Point of Contact (POC): ", ctx_r44.postPreview.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" POC's phoneNumber: ", ctx_r44.postPreview.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" POC's email: ", ctx_r44.postPreview.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Brief Description for gig: ", ctx_r44.postPreview.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Frequency/Type of volunteer opportunity: ", ctx_r44.postPreview.opportunity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Preferred Skills: ", ctx_r44.postPreview.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 13, ctx_r44.postPreview.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 15, ctx_r44.postPreview.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Commitment Hours: ", ctx_r44.postPreview.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Beneficiaries: ", ctx_r44.postPreview.beneficiaries, " ");
} }
function PostCreateAdminComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PostCreateAdminComponent_div_103_img_4_Template, 1, 0, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PostCreateAdminComponent_div_103_img_5_Template, 1, 1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-title", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-subtitle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-content", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-card-footer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_div_103_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.onMoreInfo(_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, PostCreateAdminComponent_div_103_ng_template_35_Template, 34, 17, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r26.postPreview.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r26.postPreview.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r26.postPreview.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r26.postPreview.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 9, ctx_r26.postPreview.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, ctx_r26.postPreview.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r26.postPreview.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r26.postPreview.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Skillsets: ", ctx_r26.postPreview.skills, " ");
} }
class PostCreateAdminComponent {
    constructor(postsService, modalService, authService, dialog) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.dialog = dialog;
        this.pendingApproval = false;
        this.isLoading = true;
        this.beneficiaries = [
            "Animal Welfare",
            "Arts & Heritage",
            "Children & Youth",
            "Community",
            "Disability",
            "Education",
            "Elderly",
            "Environment",
            "Families",
            "Health",
            "Humanitarian",
            "Social Service",
            "Sports",
            "Women & Girls",
        ];
        this.locations = [
            "Ang Mo Kio",
            "Bedok",
            "Bishan",
            "Boon Lay",
            "Bukit Batok",
            "Bukit Merah",
            "Bukit Panjang",
            "Bukit Timah",
            "Central Water Catchment",
            "Changi",
            "Changi Bay",
            "Choa Chu Kang",
            "Clementi",
            "Downtown Core",
            "Geylang",
            "Hougang",
            "Islandwide",
            "Jurong East",
            "Jurong West",
            "Kallang",
            "Lim Chu Kang",
            "Mandai",
            "Marina East",
            "Marina South",
            "Marine Parade",
            "Museum",
            "Newton",
            "North-Eastern Islands",
            "Novena",
            "Orchard",
            "Outram",
            "Overseas",
            "Pasir Ris",
            "Paya Lebar",
            "Pioneer",
            "Punggol",
            "Queenstown",
            "River Valley",
            "Rochor",
            "Seletar",
            "Sembawang",
            "Sengkang",
            "Serangoon",
            "Simpang",
            "Singapore River",
            "Southern Islands",
            "Straits View",
            "Sungei Kadut",
            "Tampines",
            "Tanglin",
            "Tengah",
            "Toa Payoh",
            "Tuas",
            "Virtual",
            "Western Islands",
            "Western Water Catchment",
            "Woodlands",
            "Yishun",
        ];
        this.opportunities = [
            "One-off",
            "Recurring",
        ];
        this.skills = [
            " Accounting & Finance",
            " Arts & Music",
            " Business Development",
            " Coaching & Training",
            " Counselling & Mentoring",
            " Fundraising",
            " Human Resource",
            " Information Technology",
            " Leadership Development",
            " Legal",
            " Marketing & Communications",
            " Medical & Health",
            " Volunteer Management",
            " Other Skills (elaborate in description)",
            " No Specific Skills Required",
        ];
        this.termsAndConditions = false;
        this.pocEmail = "";
        this.imagePreview = null;
        this.showPreview = false;
        this.orgNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]);
        this.uenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.pocControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]);
        this.phoneNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99999999)]);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]);
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(100)]);
        this.opportunitySelectedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.skillsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.startDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.endDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.hoursRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.locationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        this.beneficiariesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.imageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
        /*
        validators: [Validators.required],
        asyncValidators: [mimeType]
        */
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            orgName: this.orgNameControl,
            uen: this.uenControl,
            POC: this.pocControl,
            phoneNumber: this.phoneNumberControl,
            email: this.emailControl,
            title: this.titleControl,
            opportunity: this.opportunitySelectedControl,
            content: this.contentControl,
            skills: this.skillsControl,
            startDate: this.startDateControl,
            endDate: this.endDateControl,
            hoursRequired: this.hoursRequiredControl,
            location: this.locationControl,
            beneficiaries: this.beneficiariesControl,
            image: this.imageControl,
        });
    }
    ngOnInit() {
        this.authStatusObject = this.authService.getAuthStatusObject(); //this is required to avoid the "Cannot read property 'orgName' of undefined" error. but it violates async
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
            this.authStatusObject = authObject;
            //console.log("At create page");
            //console.log(authObject);
        });
    }
    generatePreview() {
        if (this.form.invalid)
            return;
        this.postPreview = null;
        const post = {
            id: null,
            orgName: this.form.value.orgName,
            uen: this.form.value.uen,
            POC: this.form.value.POC,
            phoneNumber: this.form.value.phoneNumber,
            email: this.form.value.email,
            title: this.form.value.title,
            opportunity: this.form.value.opportunity,
            content: this.form.value.content,
            skills: this.form.value.skills,
            startDate: this.form.value.startDate,
            endDate: this.form.value.endDate,
            hoursRequired: this.form.value.hoursRequired,
            location: this.form.value.location,
            beneficiaries: this.form.value.beneficiaries,
            approved: false,
            creationDate: new Date(),
            publishDate: null,
            creator: null,
            removed: null,
            reason: null,
            students: [],
            reports: [],
            studentsAccepted: [],
            image: this.form.value.image,
            imagePath: this.imagePreview,
        };
        this.postPreview = post;
        this.showPreview = true;
    }
    onMoreInfo(content) {
        //console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    onAddPostReactive() {
        if (this.form.invalid) {
            console.log("Please fill up form first.");
            return;
        }
        if (this.form.value.startDate > this.form.value.endDate) {
            this.modalService.dismissAll();
            this.dialog.open(src_app_dialogs_start_date_error_dialog_start_date_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__["StartDateErrorDialog"]);
            return;
        }
        const post = {
            id: null,
            orgName: this.form.value.orgName,
            uen: this.form.value.uen,
            POC: this.form.value.POC,
            phoneNumber: this.form.value.phoneNumber,
            email: this.form.value.email,
            title: this.form.value.title,
            opportunity: this.form.value.opportunity,
            content: this.form.value.content,
            skills: this.form.value.skills,
            startDate: this.form.value.startDate,
            endDate: this.form.value.endDate,
            hoursRequired: this.form.value.hoursRequired,
            location: this.form.value.location,
            beneficiaries: this.form.value.beneficiaries,
            approved: false,
            creationDate: new Date(),
            publishDate: null,
            creator: null,
            removed: null,
            reason: null,
            students: [],
            reports: [],
            studentsAccepted: [],
            image: this.form.value.image,
            imagePath: null,
        };
        console.log("Form to be submitted is: ");
        console.log(this.form.value);
        this.pendingApproval = true;
        if (this.form.value.image) {
            this.postsService.addPost(post);
        }
        else {
            this.postsService.addPostNoImage(post);
        }
        //this.postsService.addPost(post);
        this.modalService.dismissAll();
        this.form.reset();
        this.imagePreview = '';
    }
    closeNotification() {
        this.pendingApproval = false;
    }
    openTermsAndConditions(longContent) {
        //console.log(this.form);
        this.modalService.open(longContent, { scrollable: true });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        if (file) {
            this.form.patchValue({ image: file });
            //this.form.get('image').updateValueAndValidity();
            // console.log(file);
            // console.log(this.form);
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            this.form.patchValue({ image: null });
            this.imagePreview = null;
        }
    }
}
PostCreateAdminComponent.ɵfac = function PostCreateAdminComponent_Factory(t) { return new (t || PostCreateAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
PostCreateAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostCreateAdminComponent, selectors: [["app-post-create"]], decls: 109, vars: 40, consts: [[1, "post-create-card"], [1, "post-create-body"], [3, "formGroup"], ["postForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "orgName", "required", "", "placeholder", "Standard Oil Co.", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "text", "name", "uen", "required", "", "placeholder", "eg UEN7654321", 3, "formControl"], ["matInput", "", "type", "text", "name", "POC", "required", "", "placeholder", "eg Wilfred Gatsby", 3, "formControl"], ["matInput", "", "type", "number", "name", "phoneNumber", "required", "", "placeholder", "eg 12345678", "oninput", "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", "maxlength", "8", 3, "formControl"], ["matInput", "", "type", "email", "name", "email", "required", "", "placeholder", "eg test@test.com", "email", "", 3, "formControl"], ["href", "https://verify-email.org/", "target", "_blank", 2, "margin-top", "0rem"], ["matInput", "", "type", "text", "name", "title", "required", "", "placeholder", "eg Weekend Underprivileged Teacher", 3, "formControl"], ["matInput", "", "name", "content", "rows", "10", "required", "", "minlength", "100", "placeholder", "Please give a short description of the volunteer opportunity (minimum 100 words).", 3, "formControl"], ["required", "", "multiple", "", "name", "skillsSelected", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Start date", "name", "startDate", "required", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startDatePicker", ""], ["matInput", "", "name", "endDate", "required", "", 3, "matDatepicker", "formControl"], ["endDatePicker", ""], ["required", "", "name", "opportunitySelected", 3, "formControl"], ["matInput", "", "type", "text", "name", "hoursRequired", "required", "", "placeholder", "eg 1hr per week, Monday to Friday, anytime between 8am - 3pm", 3, "formControl"], ["required", "", "name", "beneficiariesSelected", 3, "formControl"], ["name", "locationSelected", 3, "formControl"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], ["TermsAndConditions", ""], ["class", "post-preview", 4, "ngIf"], [1, "container"], [1, "copyright"], [3, "value"], [1, "image-preview"], [3, "src", "alt"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["ngModel", "", "name", "checkbox", "required", ""], ["checkbox", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "post-preview"], [1, "cards"], [1, "published-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post's image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-button", "", "color", "primary", 1, "post-card-footer-button", 3, "click"], ["content", ""], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 1, "card-image"], ["mat-card-image", "", "alt", "Post's image", 1, "card-image", 3, "src"]], template: function PostCreateAdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Create Post Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "POC's Organization Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PostCreateAdminComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "POC's UEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PostCreateAdminComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Point-Of-Contact (POC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PostCreateAdminComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "POC's Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PostCreateAdminComponent_mat_error_25_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "POC's Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PostCreateAdminComponent_mat_error_30_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Check if email exists (might not be accurate)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Volunteer Opportunity Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, PostCreateAdminComponent_mat_error_37_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Volunteer Opportunity Description (minimum 100 words)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, PostCreateAdminComponent_mat_error_42_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Preferred Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, PostCreateAdminComponent_mat_option_47_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, PostCreateAdminComponent_mat_error_48_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Choose a start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, PostCreateAdminComponent_mat_error_56_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Choose an end date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, PostCreateAdminComponent_mat_error_64_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, PostCreateAdminComponent_mat_error_65_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Volunteer Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, PostCreateAdminComponent_mat_option_70_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, PostCreateAdminComponent_mat_error_71_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Commitment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, PostCreateAdminComponent_mat_error_76_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Beneficiaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, PostCreateAdminComponent_mat_option_81_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, PostCreateAdminComponent_mat_error_82_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, PostCreateAdminComponent_mat_option_89_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](94); return _r21.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Upload an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PostCreateAdminComponent_Template_input_change_93_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, PostCreateAdminComponent_div_95_Template, 2, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, PostCreateAdminComponent_div_96_Template, 7, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_Template_button_click_97_listener() { return ctx.generatePreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Generate a preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateAdminComponent_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](102); return ctx.openTermsAndConditions(_r24); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, PostCreateAdminComponent_ng_template_101_Template, 86, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, PostCreateAdminComponent_div_103_Template, 37, 13, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "footer", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](55);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.orgNameControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orgNameControl.errors == null ? null : ctx.orgNameControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.uenControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uenControl.errors == null ? null : ctx.uenControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.pocControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pocControl.errors == null ? null : ctx.pocControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.phoneNumberControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.phoneNumberControl.errors == null ? null : ctx.phoneNumberControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.emailControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailControl.errors == null ? null : ctx.emailControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.titleControl.errors == null ? null : ctx.titleControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentControl.errors == null ? null : ctx.contentControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.skillsControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skillsControl.errors == null ? null : ctx.skillsControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r10)("formControl", ctx.startDateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.startDateControl.errors == null ? null : ctx.startDateControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r12)("formControl", ctx.endDateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.endDateControl.errors == null ? null : ctx.endDateControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.startDateControl.value && ctx.endDateControl.value && ctx.startDateControl.value > ctx.endDateControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.opportunitySelectedControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.opportunities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.opportunitySelectedControl.errors == null ? null : ctx.opportunitySelectedControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.hoursRequiredControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hoursRequiredControl.errors == null ? null : ctx.hoursRequiredControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.beneficiariesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.beneficiaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.beneficiariesControl.errors == null ? null : ctx.beneficiariesControl.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.locationControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pendingApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPreview);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".post-create-card[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.post-create-body[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: auto;\r\n  padding: 10px;\r\n\r\n  \r\n}\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-error[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.modal-body[_ngcontent-%COMP%] {\r\n  color: black;\r\n  margin: none;\r\n}\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n.image-preview[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  align-content: space-around;\r\n}\r\n.published-post-card[_ngcontent-%COMP%] {\r\n  width: 25rem;\r\n  height: 35rem;\r\n\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n.published-post-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 11px #394dffda;\r\n}\r\n.card-image[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n}\r\n.post-card-title[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 1.7rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 1.5rem;\r\n}\r\n.post-card-subtitle[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 120%;\r\n\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 2rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: rgb(88, 88, 88);\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n.post-card-content[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  text-overflow: ellipsis;\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  height: 8rem;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n.post-card-footer[_ngcontent-%COMP%] {\r\n  width: 22rem;\r\n  max-width: 22rem;\r\n  font-family: 'Lato', sans-serif;\r\n  align-items: center;\r\n  flex: auto;\r\n  margin: auto;\r\n}\r\n.post-card-footer-button[_ngcontent-%COMP%] {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n.post-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n  justify-content: center;\r\n}\r\n.post-button[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWNyZWF0ZS1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQUNvRDtBQUNwRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztFQUViOzs7OztHQUtDO0FBQ0g7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO29EQUNvRDtBQUNwRDtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUdBO29EQUNvRDtBQUNwRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCOztFQUV2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTs7RUFFZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoicG9zdHMtY3JlYXRlLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHTE9CQUxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnBvc3QtY3JlYXRlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY3JlYXRlLWJvZHkge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIC8qXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgKi9cclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1lcnJvciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4vKiBNT0RBTCBXSU5ET1dcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBGSUxFIFBJQ0tFUlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIFBPU1QgUFJFVklFV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ucG9zdC1wcmV2aWV3IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucHVibGlzaGVkLXBvc3QtY2FyZCB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIGhlaWdodDogMzVyZW07XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ucHVibGlzaGVkLXBvc3QtY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDExcHggIzM5NGRmZmRhO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5wb3N0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG5cclxuICB3aWR0aDogMjJyZW07XHJcbiAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNnB4O1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWZvb3RlciB7XHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLWZvb3Rlci1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4IDVweCA1cHggMDtcclxufVxyXG5cclxuLnBvc3QtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Xorl":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReportedPostNotificationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedPostNotificationDialog", function() { return ReportedPostNotificationDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//import { MatDialog } from "@angular/material/dialog";
class ReportedPostNotificationDialog {
}
ReportedPostNotificationDialog.ɵfac = function ReportedPostNotificationDialog_Factory(t) { return new (t || ReportedPostNotificationDialog)(); };
ReportedPostNotificationDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportedPostNotificationDialog, selectors: [["reported-before-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ReportedPostNotificationDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post reported!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait while our administrators review the post. If the post is still up after a while, the admins have most likely considered to still be an approved post.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _posts_posts_create_admin_posts_create_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/posts-create-admin/posts-create-admin.component */ "VUEF");
/* harmony import */ var _posts_posts_feed_posts_feed_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./posts/posts-feed/posts-feed.component */ "sqC4");
/* harmony import */ var _admin_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-board/admin-board.component */ "LnS8");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_admin_signup_admin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/signup-admin/signup-admin.component */ "H2Te");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth/auth-interceptor */ "kuTz");
/* harmony import */ var _auth_signup_general_signup_general_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth/signup-general/signup-general.component */ "/O4B");
/* harmony import */ var _admin_student_board_student_board_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/student-board/student-board.component */ "7Ubm");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./error-interceptor */ "SJn0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _errors_forget_password_error_forget_password_error_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./errors/forget-password-error/forget-password-error.component */ "nfz1");
/* harmony import */ var _admin_org_board_org_board_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/org-board/org-board.component */ "O/5P");
/* harmony import */ var _posts_posts_create_org_posts_create_org_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./posts/posts-create-org/posts-create-org.component */ "HgG0");
/* harmony import */ var _errors_login_wrong_password_error_login_wrong_password_error_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./errors/login-wrong-password-error/login-wrong-password-error.component */ "nf0l");
/* harmony import */ var _errors_update_password_error_update_password_error_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./errors/update-password-error/update-password-error.component */ "7VJF");
/* harmony import */ var _errors_login_general_error_login_general_error_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./errors/login-general-error/login-general-error.component */ "0q4w");
/* harmony import */ var _errors_signup_before_error_signup_before_error_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./errors/signup-before-error/signup-before-error.component */ "qlg4");
/* harmony import */ var _homepage_hompage_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./homepage/hompage.component */ "aVNK");
/* harmony import */ var _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dark-mode-toggle/dark-mode-toggle.component */ "03Cq");
/* harmony import */ var _dialogs_applied_before_dialog_applied_before_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dialogs/applied-before-dialog/applied-before-dialog.component */ "uqOH");
/* harmony import */ var _dialogs_reported_before_dialog_reported_before_dialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dialogs/reported-before-dialog/reported-before-dialog.component */ "cCMv");
/* harmony import */ var _dialogs_reported_post_notification_dialog_reported_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component */ "Xorl");
/* harmony import */ var angular_dark_mode__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular-dark-mode */ "VE24");
/* harmony import */ var _dialogs_applied_post_notification_dialog_applied_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component */ "7TP8");
/* harmony import */ var _admin_dashboard_landing_dashboard_landing_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/dashboard-landing/dashboard-landing.component */ "5Hur");
/* harmony import */ var _admin_student_board_change_password_student_board_change_password_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/student-board-change-password/student-board-change-password.component */ "Kdn7");
/* harmony import */ var _dialogs_start_date_error_dialog_start_date_error_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./dialogs/start-date-error-dialog/start-date-error-dialog.component */ "sKRj");
/* harmony import */ var _dialogs_wrong_student_email_dialog_wrong_student_email_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component */ "xuOZ");
/* harmony import */ var _admin_highlight_create_highlight_create_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/highlight-create/highlight-create.component */ "kBis");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/core */ "fXoL");























//import { AdsenseModule } from 'ng2-adsense';
//If these causes issue in the future, revert to angular material version "^8.0.0" in package-json
//by doing npm install --save @angular/material@8 --save-exact


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_34__["ErrorInterceptor"], multi: true },
        {
            provide: angular_dark_mode__WEBPACK_IMPORTED_MODULE_48__["DARK_MODE_OPTIONS"],
            useValue: {
                darkModeClass: 'dark-mode',
                lightModeClass: 'light-mode'
            }
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_21__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlertModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__["ToolbarComponent"],
        _posts_posts_create_admin_posts_create_admin_component__WEBPACK_IMPORTED_MODULE_25__["PostCreateAdminComponent"],
        _posts_posts_create_org_posts_create_org_component__WEBPACK_IMPORTED_MODULE_38__["PostCreateOrgComponent"],
        _posts_posts_feed_posts_feed_component__WEBPACK_IMPORTED_MODULE_26__["PostFeedComponent"],
        _admin_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_27__["AdminBoardComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
        _auth_signup_admin_signup_admin_component__WEBPACK_IMPORTED_MODULE_30__["SignupAdminComponent"],
        _auth_signup_general_signup_general_component__WEBPACK_IMPORTED_MODULE_32__["SignupGeneralComponent"],
        _admin_student_board_student_board_component__WEBPACK_IMPORTED_MODULE_33__["StudentBoardComponent"],
        _admin_org_board_org_board_component__WEBPACK_IMPORTED_MODULE_37__["OrgBoardComponent"],
        _errors_forget_password_error_forget_password_error_component__WEBPACK_IMPORTED_MODULE_36__["ForgetPasswordErrorComponent"],
        _errors_login_wrong_password_error_login_wrong_password_error_component__WEBPACK_IMPORTED_MODULE_39__["LoginWrongPasswordErrorComponent"],
        _errors_update_password_error_update_password_error_component__WEBPACK_IMPORTED_MODULE_40__["UpdatePasswordErrorComponent"],
        _errors_login_general_error_login_general_error_component__WEBPACK_IMPORTED_MODULE_41__["LoginGeneralErrorComponent"],
        _errors_signup_before_error_signup_before_error_component__WEBPACK_IMPORTED_MODULE_42__["SignupBeforeErrorComponent"],
        _homepage_hompage_component__WEBPACK_IMPORTED_MODULE_43__["HomepageComponent"],
        _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_44__["DarkModeToggleComponent"],
        _dialogs_applied_before_dialog_applied_before_dialog_component__WEBPACK_IMPORTED_MODULE_45__["AppliedBeforeDialog"],
        _dialogs_reported_before_dialog_reported_before_dialog_component__WEBPACK_IMPORTED_MODULE_46__["ReportedBeforeDialog"],
        _dialogs_reported_post_notification_dialog_reported_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_47__["ReportedPostNotificationDialog"],
        _dialogs_applied_post_notification_dialog_applied_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_49__["AppliedPostNotificationDialog"],
        _admin_dashboard_landing_dashboard_landing_component__WEBPACK_IMPORTED_MODULE_50__["DashBoardLandingComponent"],
        _admin_student_board_change_password_student_board_change_password_component__WEBPACK_IMPORTED_MODULE_51__["StudentBoardChangePasswordComponent"],
        _dialogs_start_date_error_dialog_start_date_error_dialog_component__WEBPACK_IMPORTED_MODULE_52__["StartDateErrorDialog"],
        _dialogs_wrong_student_email_dialog_wrong_student_email_dialog_component__WEBPACK_IMPORTED_MODULE_53__["WrongStudentEmailDialog"],
        _admin_highlight_create_highlight_create_component__WEBPACK_IMPORTED_MODULE_54__["HighlightCreateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_21__["CardModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlertModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"]] }); })();


/***/ }),

/***/ "aVNK":
/*!***********************************************!*\
  !*** ./src/app/homepage/hompage.component.ts ***!
  \***********************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _homepage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.service */ "yVj2");
/* harmony import */ var _admin_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/highlight.service */ "LLsA");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function HomepageComponent_ngb_carousel_9_1_ng_template_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_ngb_carousel_9_1_ng_template_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const highlight_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteHighlight(highlight_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomepageComponent_ngb_carousel_9_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Read More (In Development) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomepageComponent_ngb_carousel_9_1_ng_template_0_button_9_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highlight_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highlight_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", highlight_r2.summary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", highlight_r2.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomepageComponent_ngb_carousel_9_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomepageComponent_ngb_carousel_9_1_ng_template_0_Template, 12, 4, "ng-template", 31);
} }
function HomepageComponent_ngb_carousel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_ngb_carousel_9_1_Template, 1, 0, undefined, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.highlights);
} }
class HomepageComponent {
    constructor(homepageService, highlightService, authService) {
        this.homepageService = homepageService;
        this.highlightService = highlightService;
        this.authService = authService;
        //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.images = [1, 2, 3].map((n) => `../../assets/sample-carousel-image-${n}.jpg`);
        this.isAuth = false;
    }
    ngOnInit() {
        this.highlightService.getHighlights();
        this.highlightSub = this.highlightService.getHighlightsUpdatedListener()
            .subscribe((highlights) => {
            this.highlights = highlights;
            console.log(highlights);
            console.log("here");
        });
        this.authStatusObject = this.authService.getAuthStatusObject;
        this.isAuth = this.authService.getIsAuth();
    }
    ngOnDestroy() {
        this.highlightSub.unsubscribe();
    }
    deleteHighlight(id) {
        this.highlightService.deleteHighlight(id);
        return true;
    }
    openPoster() { }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_homepage_service__WEBPACK_IMPORTED_MODULE_1__["HomepageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-hompage"]], decls: 84, vars: 1, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", ""], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x", "crossorigin", "anonymous"], ["href", "https://fonts.googleapis.com/css?family=Lato:400,700", "rel", "stylesheet", "type", "text/css"], ["class", "carousel", 4, "ngIf"], [1, "featurette-divider"], [1, "container", "marketing"], [1, "marketing-heading"], [1, "row"], [1, "col-lg-4"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG9S8-sc4Eq27YCO-5oWujccTSgNRuTEXEQ&usqp=CAU", "onmouseover", "this.src='https\\://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8b/8b1ca18fe3a0fed1a551dd9c73c93a7bb407a147_full.jpg';", "onmouseout", "this.src='https\\://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG9S8-sc4Eq27YCO-5oWujccTSgNRuTEXEQ&usqp=CAU';", "alt", "Picture of first reviewer", 1, "profile-pic"], [1, "marketing-content"], ["src", "https://i2.wp.com/www.animemaru.com/wp-content/uploads/2018/05/violetevergarden.png?fit=640%2C360&ssl=1", "alt", "Picture of second reviewer", 1, "profile-pic"], ["src", "https://media.giphy.com/media/133cAiXr4T1te/giphy.gif", "alt", "Picture of third reviewer", 1, "profile-pic"], [1, "row", "featurette"], [1, "col-md-7"], [1, "featurette-heading"], [1, "text-muted"], [1, "lead"], [1, "col-md-5"], ["src", "../../assets/Orbital-Logo-Design.png", "alt", "CCSGP's logo", 1, "featurette-image"], [1, "col-md-7", "order-md-2"], [1, "col-md-5", "order-md-1"], ["src", "https://www.pngkey.com/png/full/4-49790_galaxies-galaxy-png.png", "alt", "Photo of galaxies", 1, "featurette-image"], ["src", "https://www.pngarts.com/files/1/Globe-Transparent-Images.png", "alt", "Photo of the galaxy", 1, "featurette-image"], [1, "container"], [1, "copyright"], [1, "carousel"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "carousel-card"], [1, "carousel-heading"], ["mat-raised-button", "", 1, "carousel-read-more-button"], ["mat-raised-button", "", "class", "carousel-read-more-button", 3, "click", 4, "ngIf"], [1, "carousel-image", 3, "src"], ["mat-raised-button", "", 1, "carousel-read-more-button", 3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomepageComponent_ngb_carousel_9_Template, 2, 1, "ngb-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Elmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sesame Street Mascot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Elmo thinks it\u2019s important to be kind because if you\u2019re kind to somebody, then they\u2019ll be kind to somebody, and it goes on and on and on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Violet Evergarden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CH Postal Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " No letter that could be sent deserves to go undelivered. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Eevee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "NUS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "I'm May's Eevee! Bet you didn't know I studied in NUS eh? Sorry for breaking the 4th wall! \uD83E\uDD2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Oh and this website is cool!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Connecting Hearts with Minds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Inaugurated in June 2021, the Centre for Computing for Social Good and Philanthropy (CCSGP) aims to liberalise and unleash the power of the National University of Singapore's (NUS) School of Computing (SOC) students to do good for society.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Endless Possibilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Shoot for the moon and you will land upon the stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Organisations have a plethora of students to choose from that best fits their project needs. Students have a myriad of choices of organisations to volunteer for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "What's not to love? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Global Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "The world is your oyster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Tap into our network of professionals and their diverse skillsets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "footer", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["html[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-bottom: 1rem;\r\n  margin-top: 0rem;\r\n  margin-bottom: 0rem;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n.carousel-image[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  width: 550px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  bottom: 3rem;\r\n  z-index: 10;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 32rem;\r\n}\r\n\r\n.carousel-card[_ngcontent-%COMP%] {\r\n\r\n  margin-left: 15rem;\r\n  margin-right: 15rem;\r\n}\r\n.carousel-heading[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  \r\n  \r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 600 !important;\r\n  font-size: 40px !important;\r\n  text-align: left;\r\n}\r\n.carousel-lead[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400 !important;\r\n  text-align: left;\r\n}\r\n.carousel-read-more-button[_ngcontent-%COMP%] {\r\n  background-color: #F2545B;\r\n  color: #F8F8FF;\r\n}\r\n\r\n  .carousel-control-prev-icon,   .carousel-control-next-icon {\r\n\r\n  height: 100px;\r\n  width: 100px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n  background-image: none;\r\n  background-color: black;\r\n}\r\n  .carousel-indicators .active {\r\n  background-color: #F2545B;\r\n}\r\n  .carousel-indicators li {\r\n  background-color: #F2545B;\r\n}\r\n\r\n\r\n.marketing-heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 2.5rem !important;\r\n  font-weight: 300 !important;\r\n  line-height: 1;\r\n  \r\n  letter-spacing: -.05rem;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  margin-bottom: 0rem;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n.marketing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  margin-bottom: 1.5rem;\r\n  font-style: italic;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-pic[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.featurette-divider[_ngcontent-%COMP%] {\r\n  margin: 5rem 0; \r\n}\r\n\r\n.featurette-heading[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  \r\n  \r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 600 !important;\r\n  font-size: 40px !important;\r\n}\r\n.text-muted[_ngcontent-%COMP%] {\r\n  font-size: 30px !important;\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 500 !important;\r\n}\r\n.lead[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400 !important;\r\n}\r\n.featurette-image[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  width: 500px;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n  \r\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n}\r\n@media (min-width: 62em) {\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQsbURBQW1EO0FBRW5EO0VBQ0UseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUdBO29EQUNvRDtBQUVwRDtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLGlFQUFpRTtBQUNqRTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7Ozs7Q0FRQztBQUVEOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUtBLHdCQUF3QjtBQUN4Qjs7O0VBR0UsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFNQTtvREFDb0Q7QUFFcEQsc0VBQXNFO0FBQ3RFO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCO0FBQ0EsbUJBQW1CO0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUdBOzJCQUMyQjtBQUUzQjtFQUNFLGNBQWMsRUFBRSxzQ0FBc0M7QUFDeEQ7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBSUE7MkJBQzJCO0FBQzNCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0E7b0RBQ29EO0FBRXBEO0VBQ0UscUNBQXFDO0VBQ3JDO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiaG9tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbWFnZSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMzJyZW07XHJcbn1cclxuLypcclxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnJlbTtcclxufVxyXG4qL1xyXG5cclxuLmNhcm91c2VsLWNhcmQge1xyXG5cclxuICBtYXJnaW4tbGVmdDogMTVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcclxufVxyXG5cclxuLmNhcm91c2VsLWhlYWRpbmcge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC8qIHJ0bDpyZW1vdmUgKi9cclxuICAvKiBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgKi9cclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtbGVhZCB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtcmVhZC1tb3JlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNTQ1QjtcclxuICBjb2xvcjogI0Y4RjhGRjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogQ29sb3Igb2YgdGhlIGFycm93cyAqL1xyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuXHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgb3V0bGluZTogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlLCAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNTQ1QjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI1NDVCO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogTUFSS0VUSU5HIENPTlRFTlRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIENlbnRlciBhbGlnbiB0aGUgdGV4dCB3aXRoaW4gdGhlIHRocmVlIGNvbHVtbnMgYmVsb3cgdGhlIGNhcm91c2VsICovXHJcbi5tYXJrZXRpbmctaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICAvKiBydGw6cmVtb3ZlICovXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWFya2V0aW5nIC5jb2wtbGctNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFya2V0aW5nIGgyIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hcmtldGluZyBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIHJ0bDpiZWdpbjppZ25vcmUgKi9cclxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLyogcnRsOmVuZDppZ25vcmUgKi9cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4vKiBGZWF0dXJldHRlc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcclxuICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbn1cclxuXHJcbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgLyogcnRsOnJlbW92ZSAqL1xyXG4gIC8qIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWFkIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmVhdHVyZXR0ZS1pbWFnZSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZvb3RlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jb3B5cmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIFJFU1BPTlNJVkUgQ1NTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".bd-placeholder-img[_ngcontent-%COMP%] {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n          font-size: 3.5rem;\n        }\n      }"] });


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function LoginComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function LoginComponent_form_6_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_6_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_6_mat_error_7_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hidePassword = !ctx_r9.hidePassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_form_6_mat_error_16_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onLogin(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx_r12.onOpenForgetPassword(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Forget Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hidePassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hidePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hidePassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid);
} }
function LoginComponent_ng_template_7_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please check your email for the new password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Don't worry. Happens to the best of us ;) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_Template_button_click_3_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_ng_template_7_div_13_Template, 7, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const modal_r13 = ctx.$implicit; const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onForgetPassword(_r14) && modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Send new password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.newPasswordSent);
} }
class LoginComponent {
    constructor(authService, modalService) {
        this.authService = authService;
        this.modalService = modalService;
        this.isLoading = false;
        this.roles = ["Admin", "External Organisation", "Student Organisation", "Student / NUS Alumni"];
        this.hidePassword = true;
        this.newPasswordSent = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatusObject => {
            if (!authStatusObject.auth) {
                this.isLoading = false;
                this.loggedIn = false;
            }
        });
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
        this.authService.autoAuthUser();
    }
    onOpenForgetPassword(forgetPasswordContent) {
        this.modalService.open(forgetPasswordContent, { size: 'lg' });
    }
    onForgetPassword(form) {
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
    }
    closeNotification() {
        this.newPasswordSent = false;
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 9, vars: 2, consts: [[1, "card"], [1, "logo"], ["src", "assets/Orbital-Logo-Design.png", "alt", "Logo of CCSGP"], [4, "ngIf"], [1, "form"], ["class", "forgetPasswordPopup"], ["forgetPasswordContent", ""], ["loginForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "type", "email", "name", "email", "ngModel", "", "required", "", "placeholder", "Please enter your Email Address here", "email", ""], ["emailInput", "ngModel"], ["matInput", "", "name", "password", "ngModel", "", "required", "", "placeholder", "Enter Password Here", 3, "type"], ["passwordInput", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "form-footer"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["href", "javascript:;", 1, "forget-password-link", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 2, "color", "transparent", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["forgetPasswordForm", "ngForm"], ["matInput", "", "type", "text", "ngModel", "", "name", "forgetPasswordEmail", "required", "", "placeholder", "Email"], ["forgetPasswordEmail", "ngModel"], [1, "modal-footer"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_form_6_Template, 22, 6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_template_7_Template, 16, 1, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".cdk-overlay-container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 99999;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n  z-index: 99999;\r\n}\r\n\r\n\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n  border: none;\r\n  background-color: inherit;\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  background-position: center;\r\n  display:flex;\r\n\tflex-wrap:wrap;\r\n\ttext-align:center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  color: #4da8da;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n\r\n.form-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: white !important;\r\n}\r\n\r\n.forget-password-link[_ngcontent-%COMP%] {\r\n    display: -webkit-flexbox;\r\n    display: flex;\r\n    -webkit-flex-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  height: 100%;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EOztBQUVwRDtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtvREFDb0Q7O0FBQ3BEO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkM7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7Q0FDYixjQUFjO0NBQ2QsaUJBQWlCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztDQUlDOztBQUdEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUVFLGFBQWE7RUFFYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBR3hCLGFBQWE7SUFDYiwwQkFBMEI7SUFHMUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtvREFDb0Q7O0FBQ3BEO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtvREFDb0Q7O0FBQ3BEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFLQTs7Ozs7Ozs7Ozs7aUNBV2lDIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMT0dJTiBQQUdFIEdMT0JBTFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcblxyXG4vKiBMT0dJTiBDQVJEXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qXHJcbi5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY29sb3I6ICNFRUZCRkI7XHJcbn1cclxuXHJcbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjN0Q3RDdEO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gIGNvbG9yOiAjNGRhOGRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICNFRUZCRkIgIWltcG9ydGFudDtcclxufVxyXG4qL1xyXG5cclxuLmxvZ28gaW1nIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtd3JhcDp3cmFwO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKlxyXG4ubWF0LXNlbGVjdC12YWx1ZTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjRUVGQkZCICFpbXBvcnRhbnQ7XHJcbn1cclxuKi9cclxuXHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY29sb3I6ICM0ZGE4ZGE7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuLmZvcm0tZm9vdGVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcmdldC1wYXNzd29yZC1saW5rIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRk9SR0VUIFBBU1NXT1JEIE1PREFMIFdJTkRPV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzNjQ3OyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzNjQ3OyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMDM2NDc7ICovXHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzNjQ3OyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogTUlTQ0VMTEFORU9VU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5pbWcge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBodG1sLCBib2R5LCAuZ3JpZC1jb250YWluZXIgeyBoZWlnaHQ6IDEwMCU7IG1hcmdpbjogMDsgfVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBnYXA6IDBweCAwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGljdHVyZSBjYXJkXCI7XHJcbn1cclxuXHJcbi5waWN0dXJlIHsgZ3JpZC1hcmVhOiBwaWN0dXJlO30gKi9cclxuIl19 */"] });


/***/ }),

/***/ "cCMv":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/reported-before-dialog/reported-before-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReportedBeforeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedBeforeDialog", function() { return ReportedBeforeDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//import { MatDialog } from "@angular/material/dialog";
class ReportedBeforeDialog {
}
ReportedBeforeDialog.ɵfac = function ReportedBeforeDialog_Factory(t) { return new (t || ReportedBeforeDialog)(); };
ReportedBeforeDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportedBeforeDialog, selectors: [["reported-before-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ReportedBeforeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You reported this post before!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait while our administrators vet the post. If the post is still up after a while, the admins have most likely considered to still be an approved post.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "kBis":
/*!**********************************************************************!*\
  !*** ./src/app/admin/highlight-create/highlight-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: HighlightCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightCreateComponent", function() { return HighlightCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../highlight.service */ "LLsA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function HighlightCreateComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a title for the highlight. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HighlightCreateComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a summary for the highlight. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HighlightCreateComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter some content for the highlight. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HighlightCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r5.form.value.titleControl);
} }
class HighlightCreateComponent {
    constructor(modalService, authService, highlightService) {
        this.modalService = modalService;
        this.authService = authService;
        this.highlightService = highlightService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.summaryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.imageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: this.titleControl,
            summary: this.summaryControl,
            content: this.contentControl,
            image: this.imageControl,
        });
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
            this.authStatusObject = authObject;
            //console.log("At create page");
            //console.log(authObject);
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    publishHighlight() {
        if (this.form.invalid) {
            return;
        }
        const highlight = {
            id: null,
            title: this.form.value.title,
            summary: this.form.value.summary,
            content: this.form.value.content,
            image: this.form.value.image,
            imagePath: null,
        };
        console.log("this is the highlight object in highlight-create");
        console.log(highlight);
        this.highlightService.addHighlight(highlight);
        this.form.reset();
        this.modalService.dismissAll();
        this.imagePreview = '';
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        console.log(file);
        // console.log(this.form);
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
}
HighlightCreateComponent.ɵfac = function HighlightCreateComponent_Factory(t) { return new (t || HighlightCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"])); };
HighlightCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HighlightCreateComponent, selectors: [["highlight-create"]], decls: 29, vars: 8, consts: [[1, "create-highlight-card"], [1, "card-body"], [3, "formGroup"], ["highlightForm", "ngForm"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "title", "required", "", "placeholder", "Title", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "text", "name", "summary", "required", "", "placeholder", "A quick summary of the highlight", 3, "formControl"], ["matInput", "", "type", "text", "name", "content", "required", "", "placeholder", "Content", 3, "formControl"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "image-preview"], [3, "src", "alt"]], template: function HighlightCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Create Highlight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Highlight's Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HighlightCreateComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Highlight's Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HighlightCreateComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HighlightCreateComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HighlightCreateComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return _r4.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Upload an image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HighlightCreateComponent_Template_input_change_24_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HighlightCreateComponent_div_26_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HighlightCreateComponent_Template_button_click_27_listener() { return ctx.publishHighlight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleControl.errors == null ? null : ctx.titleControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.summaryControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryControl.errors == null ? null : ctx.summaryControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contentControl.errors == null ? null : ctx.contentControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["mat-card-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: auto;\r\n  padding: 10px;\r\n\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #4da8da;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztFQUViLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJoaWdobGlnaHQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "kuTz":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "nf0l":
/*!*******************************************************************************************!*\
  !*** ./src/app/errors/login-wrong-password-error/login-wrong-password-error.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoginWrongPasswordErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWrongPasswordErrorComponent", function() { return LoginWrongPasswordErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginWrongPasswordErrorComponent {
    constructor() {
        this.message = "Wrong password! Please check if there are spaces in your password.";
    }
}
LoginWrongPasswordErrorComponent.ɵfac = function LoginWrongPasswordErrorComponent_Factory(t) { return new (t || LoginWrongPasswordErrorComponent)(); };
LoginWrongPasswordErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginWrongPasswordErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function LoginWrongPasswordErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "nfz1":
/*!*********************************************************************************!*\
  !*** ./src/app/errors/forget-password-error/forget-password-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgetPasswordErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordErrorComponent", function() { return ForgetPasswordErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForgetPasswordErrorComponent {
    constructor() {
        this.message = 'You may have selected the wrong role, or entered the wrong email';
    }
}
ForgetPasswordErrorComponent.ɵfac = function ForgetPasswordErrorComponent_Factory(t) { return new (t || ForgetPasswordErrorComponent)(); };
ForgetPasswordErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPasswordErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function ForgetPasswordErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl; //change this in the environment folder
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.signupListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loginListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.changedPasswordListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isAuthenticated = false;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getToken() {
        return this.token;
    }
    getAuthStatusObject() {
        return this.authStatus;
    }
    getAuthStatusListener() {
        console.log(this.authStatusListener.asObservable());
        return this.authStatusListener.asObservable();
    }
    getSignupListener() {
        return this.signupListener.asObservable();
    }
    getLoginListener() {
        return this.loginListener.asObservable();
    }
    getChangedPasswordListener() {
        return this.changedPasswordListener.asObservable();
    }
    createUser(email, password, role, orgName, uen) {
        let userObject = {
            email: email,
            password: password,
            role: role,
            orgName: orgName,
            uen: uen,
            beneficiaries: [],
            verified: false,
        };
        return this.http
            .post(BACKEND_URL + 'api/user/signup', userObject)
            .subscribe((result) => {
            this.signupListener.next(true);
            //this.router.navigate['/signup'];
        }, (error) => {
            console.log("Failed to sign up user.");
            console.log(error);
        });
    }
    createUserAdmin(email, password, role, orgName, uen) {
        let userObject = {
            email: email,
            password: password,
            role: role,
            orgName: orgName,
            uen: uen,
            beneficiaries: [],
            verified: false,
        };
        return this.http
            .post(BACKEND_URL + 'api/user/signupAdmin', userObject)
            .subscribe((result) => {
            this.signupListener.next(true);
        }, (error) => {
            console.log(error);
        });
    }
    update(updatedBeneficiaries) {
        let userObject = {
            email: this.authStatus.email,
            role: this.authStatus.role,
            orgName: this.authStatus.orgName,
            uen: this.authStatus.uen,
            beneficiaries: updatedBeneficiaries,
            verified: true,
        };
        this.http
            .put(BACKEND_URL + 'api/user/updateBeneficiaries', userObject)
            .subscribe((response) => {
            console.log("User's beneficiaries updated! At authService.ts");
            console.log(response);
            let updatedObject = {
                auth: true,
                email: this.authStatus.email,
                role: this.authStatus.role,
                orgName: this.authStatus.orgName,
                uen: this.authStatus.uen,
                beneficiaries: updatedBeneficiaries,
                verified: true,
            };
            this.authStatus = updatedObject;
        });
    }
    login(email, password) {
        const authData = {
            email: email,
            password: password,
        };
        this.http
            .post(BACKEND_URL + 'api/user/login', authData)
            .subscribe((response) => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                const rightNow = new Date();
                const expirationDate = new Date(rightNow.getTime() + expiresInDuration * 1000);
                //console.log(response);
                this.saveAuthData(token, expirationDate, response);
                this.authStatus = {
                    auth: true,
                    email: email,
                    role: response.role,
                    orgName: response.orgName,
                    uen: response.uen,
                    beneficiaries: response.beneficiaries,
                    verified: true,
                };
                this.authStatusListener.next(this.authStatus);
                this.router.navigate(['/feed']);
            }
        }, (error) => {
            this.authStatusListener.next({
                auth: false,
                email: null,
                role: null,
                orgName: null,
                uen: null,
                beneficiaries: null,
                verified: null,
            });
        });
    }
    autoAuthUser() {
        const authInfo = this.getAuthData();
        if (!authInfo) {
            return;
        }
        const rightNow = new Date();
        const expiresIn = authInfo.expirationDate.getTime() - rightNow.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.authStatus = authInfo.authData;
            this.authStatusListener.next(this.authStatus);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next({
            auth: false,
            email: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
            verified: null,
        });
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    setAuthTimer(duration) {
        console.log("Setting timer" + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, response) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('response', JSON.stringify(response));
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("response");
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const retrievedDataObject = JSON.parse(localStorage.getItem("response"));
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            authData: retrievedDataObject
        };
    }
    changePassword(currentPassword, newPassword) {
        let userObject = {
            email: this.authStatus.email,
            role: this.authStatus.role,
            orgName: this.authStatus.orgName,
            uen: this.authStatus.uen,
            beneficiaries: this.authStatus.beneficiaries,
            verified: true,
            currentPassword: currentPassword,
            newPassword: newPassword,
        };
        this.http
            .put(BACKEND_URL + 'api/user/updatePassword', userObject)
            .subscribe((response) => {
            console.log("User's password updated! At authService.ts");
            this.changedPasswordListener.next(true);
            console.log(response);
        });
    }
    forgetPassword(email) {
        let userObject = { email: email };
        this.http
            .put(BACKEND_URL + 'api/user/forgetPassword', userObject)
            .subscribe((response) => {
            console.log("User's password reset! At authService.ts");
            console.log(response);
            this.loginListener.next(true);
        }, (error) => {
            console.log(error);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qlg4":
/*!*****************************************************************************!*\
  !*** ./src/app/errors/signup-before-error/signup-before-error.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SignupBeforeErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupBeforeErrorComponent", function() { return SignupBeforeErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SignupBeforeErrorComponent {
    constructor() {
        this.message = "You used this email to sign up before! Try resetting your password.";
    }
}
SignupBeforeErrorComponent.ɵfac = function SignupBeforeErrorComponent_Factory(t) { return new (t || SignupBeforeErrorComponent)(); };
SignupBeforeErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupBeforeErrorComponent, selectors: [["ng-component"]], decls: 4, vars: 1, template: function SignupBeforeErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An error occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ "sKRj":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/start-date-error-dialog/start-date-error-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StartDateErrorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDateErrorDialog", function() { return StartDateErrorDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//import { MatDialog } from "@angular/material/dialog";
class StartDateErrorDialog {
}
StartDateErrorDialog.ɵfac = function StartDateErrorDialog_Factory(t) { return new (t || StartDateErrorDialog)(); };
StartDateErrorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartDateErrorDialog, selectors: [["start-date-error-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function StartDateErrorDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start date cannot be later than end date!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Post was not submitted. Please amend the date fields and try again.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "sqC4":
/*!**********************************************************!*\
  !*** ./src/app/posts/posts-feed/posts-feed.component.ts ***!
  \**********************************************************/
/*! exports provided: PostFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFeedComponent", function() { return PostFeedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dialogs_applied_before_dialog_applied_before_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/applied-before-dialog/applied-before-dialog.component */ "uqOH");
/* harmony import */ var src_app_dialogs_reported_before_dialog_reported_before_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/reported-before-dialog/reported-before-dialog.component */ "cCMv");
/* harmony import */ var src_app_dialogs_reported_post_notification_dialog_reported_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component */ "Xorl");
/* harmony import */ var src_app_dialogs_applied_post_notification_dialog_applied_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component */ "7TP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post.service */ "69F6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





















function PostFeedComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", beneficiary_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](beneficiary_r9);
} }
function PostFeedComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", org_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](org_r10);
} }
function PostFeedComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No posts match your filter criteria or there are no job listings currently available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 52);
} }
function PostFeedComponent_ng_container_40_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r11.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function PostFeedComponent_ng_container_40_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.onApply(post_r11.id, "You have applied to this post before!", _r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.onReport(post_r11.id, _r30, _r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](57); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r45.onRejectPrompt(_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](55); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r47.onCompletePrompt(_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark as Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Publish Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_40_Template_button_click_3_listener() { const modal_r49 = ctx.$implicit; return modal_r49.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Post Published Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_40_Template_button_click_10_listener() { const modal_r49 = ctx.$implicit; return modal_r49.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_42_Template_button_click_3_listener() { const modal_r52 = ctx.$implicit; return modal_r52.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_42_Template_button_click_32_listener() { const modal_r52 = ctx.$implicit; return modal_r52.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Organization Name: ", post_r11.orgName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" UEN: ", post_r11.uen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Point of Contact (POC): ", post_r11.POC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" POC's phoneNumber: ", post_r11.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" POC's email: ", post_r11.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Brief Description for gig: ", post_r11.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Frequency/Type of volunteer opportunity: ", post_r11.opportunity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Preferred Skills: ", post_r11.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 13, post_r11.startDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 15, post_r11.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Commitment Hours: ", post_r11.hoursRequired, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Beneficiaries: ", post_r11.beneficiaries, " ");
} }
function PostFeedComponent_ng_container_40_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Applied Before");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_44_Template_button_click_3_listener() { const modal_r56 = ctx.$implicit; return modal_r56.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "you applied for this before");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_44_Template_button_click_8_listener() { const modal_r56 = ctx.$implicit; return modal_r56.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_46_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please ensure your contact number is correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_46_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please ensure your contact number is correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_46_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please fill all required fields before submitting your application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_46_Template_button_click_3_listener() { const modal_r59 = ctx.$implicit; return modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PostFeedComponent_ng_container_40_ng_template_46_mat_error_10_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Reason for applying");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PostFeedComponent_ng_container_40_ng_template_46_mat_error_15_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Applicant Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "NUS Alumni");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, PostFeedComponent_ng_container_40_ng_template_46_mat_error_29_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_46_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66); const modal_r59 = ctx.$implicit; const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r64.submitApplicationReactive(post_r11.id) && modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Submit Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Apply Post: ", post_r11.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r27.applicationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r27.applicationContactControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r27.applicationForm.get("contact").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r27.applicationContentControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.applicationContentControl.errors == null ? null : ctx_r27.applicationContentControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r27.applicationUserTypeControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r27.applicationUserTypeControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.applicationForm.invalid);
} }
function PostFeedComponent_ng_container_40_ng_template_48_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please ensure your contact number is correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_48_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please ensure your contact number is correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_48_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please fill all required fields before submitting your report.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_48_Template_button_click_3_listener() { const modal_r68 = ctx.$implicit; return modal_r68.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PostFeedComponent_ng_container_40_ng_template_48_mat_error_10_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Reason for reporting");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PostFeedComponent_ng_container_40_ng_template_48_mat_error_15_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PostFeedComponent_ng_container_40_ng_template_48_mat_error_17_Template, 2, 0, "mat-error", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_48_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r75); const modal_r68 = ctx.$implicit; const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r73.submitReportReactive(post_r11.id) && modal_r68.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Submit Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Report Post: ", post_r11.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r29.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r29.reportContactControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r29.reportForm.get("contact").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r29.reportContentControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.reportContentControl.errors == null ? null : ctx_r29.reportContentControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.reportForm.invalid);
} }
function PostFeedComponent_ng_container_40_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "You reported this post before!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_50_Template_button_click_3_listener() { const modal_r77 = ctx.$implicit; return modal_r77.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_52_Template_button_click_3_listener() { const modal_r79 = ctx.$implicit; return modal_r79.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Are you sure you want to delete the post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_52_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r83); const modal_r79 = ctx.$implicit; const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r81.onDelete(post_r11.id) && modal_r79.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_52_Template_button_click_12_listener() { const modal_r79 = ctx.$implicit; return modal_r79.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_ng_container_40_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Completion Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_54_Template_button_click_3_listener() { const modal_r85 = ctx.$implicit; return modal_r85.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Confirm that the post request has been completed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "If you are removing the post not because it is completed, please fill in the reason here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "textarea", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_54_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r89); const modal_r85 = ctx.$implicit; const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r87.onComplete(post_r11.id) && modal_r85.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Confirm Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_54_Template_button_click_17_listener() { const modal_r85 = ctx.$implicit; return modal_r85.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r35.removeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r35.removeReasonControl);
} }
function PostFeedComponent_ng_container_40_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Rejection Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_56_Template_button_click_3_listener() { const modal_r91 = ctx.$implicit; return modal_r91.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Confirm that the post request is rejected?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Reason for rejecting post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "textarea", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_56_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r95); const modal_r91 = ctx.$implicit; const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r93.onReject(post_r11.id) && modal_r91.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Confirm Rejection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_ng_template_56_Template_button_click_19_listener() { const modal_r91 = ctx.$implicit; return modal_r91.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r37.rejectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r37.rejectReasonControl);
} }
function PostFeedComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PostFeedComponent_ng_container_40_img_3_Template, 1, 0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PostFeedComponent_ng_container_40_img_4_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-subtitle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-card-content", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-card-footer", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, PostFeedComponent_ng_container_40_button_32_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PostFeedComponent_ng_container_40_button_33_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, PostFeedComponent_ng_container_40_button_34_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, PostFeedComponent_ng_container_40_button_35_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, PostFeedComponent_ng_container_40_button_36_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, PostFeedComponent_ng_container_40_button_37_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_ng_container_40_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r98); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r97.onMoreInfo(_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, PostFeedComponent_ng_container_40_ng_template_40_Template, 12, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PostFeedComponent_ng_container_40_ng_template_42_Template, 34, 17, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, PostFeedComponent_ng_container_40_ng_template_44_Template, 10, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, PostFeedComponent_ng_container_40_ng_template_46_Template, 32, 9, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, PostFeedComponent_ng_container_40_ng_template_48_Template, 20, 7, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, PostFeedComponent_ng_container_40_ng_template_50_Template, 6, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, PostFeedComponent_ng_container_40_ng_template_52_Template, 14, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, PostFeedComponent_ng_container_40_ng_template_54_Template, 19, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, PostFeedComponent_ng_container_40_ng_template_56_Template, 21, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !post_r11.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", post_r11.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r11.orgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 15, post_r11.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 17, post_r11.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r11.hoursRequired, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r11.location || "Not Specified", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Skillsets: ", post_r11.skills, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r6.userRole === "Student" || ctx_r6.userRole === "Student / NUS Alumni") && !ctx_r6.applyBefore(post_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.applyBefore(post_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r6.userRole === "Student" || ctx_r6.userRole === "Student / NUS Alumni") && !ctx_r6.reportBefore(post_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.reportBefore(post_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userRole === "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userRole === "Admin" || post_r11.email === ctx_r6.authStatusObject.email);
} }
function PostFeedComponent_p_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No jobs listing currently available!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostFeedComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class PostFeedComponent {
    constructor(postsService, modalService, authService, dialog) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.authService = authService;
        this.dialog = dialog;
        this.posts = [];
        this.filteredPosts = [];
        this.hasApproved = false;
        this.userIsAuthenticated = false;
        this.noFilteredPost = null;
        this.applicationContactControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99999999)]);
        this.applicationContentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,]);
        this.applicationUserTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.reportContactControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99999999)]);
        this.reportContentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,]);
        this.rejectReasonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        this.removeReasonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        this.beneficiaries = [
            'Animal Welfare',
            'Arts & Heritage',
            'Children & Youth',
            'Community',
            'Disability',
            'Education',
            'Elderly',
            'Environment',
            'Families',
            'Health',
            'Humanitarian',
            'Social Service',
            'Sports',
            'Women & Girls',
        ];
        this.beneficiariesSelected = [];
        this.keywords = "";
        this.orgs = [];
        this.orgsSelected = [];
        this.applicationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            contact: this.applicationContactControl,
            content: this.applicationContentControl,
            applicationUser: this.applicationUserTypeControl,
        });
        this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            contact: this.reportContactControl,
            content: this.reportContentControl,
        });
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            reason: this.rejectReasonControl,
        });
        this.removeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            reason: this.removeReasonControl,
        });
    }
    ngOnInit() {
        this.postsService.getPosts();
        this.authStatusObject = this.authService.getAuthStatusObject();
        this.userIsAuthenticated = this.authStatusObject.auth;
        this.userRole = this.authStatusObject.role;
        this.postSub = this.postsService
            .getPostsUpdatedListener()
            .subscribe((posts) => {
            this.posts = [];
            this.filteredPosts = [];
            //show latest requested posts at the top of the timeline
            for (var i = posts.length - 1; i >= 0; i--) {
                if (posts[i].approved && !posts[i].removed) {
                    this.posts.push(posts[i]);
                    this.filteredPosts.push(posts[i]);
                }
            }
            if (this.posts.filter((post) => post.approved).length > 0) {
                this.hasApproved = true;
            }
            else {
                this.hasApproved = false;
            }
            this.orgs = this.posts.map(post => post.orgName);
            // console.log(this.orgsSelected);
        });
    }
    onDeletePrompt(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    onDelete(postId) {
        this.postsService.deletePost(postId);
        return true;
    }
    onCompletePrompt(completePrompt) {
        this.modalService.open(completePrompt, { size: 'lg' });
    }
    onComplete(postId) {
        this.postsService.completePost(postId, this.removeForm.value.reason);
        this.removeForm.reset();
        return true;
    }
    onRejectPrompt(rejectPrompt) {
        this.modalService.open(rejectPrompt, { size: 'lg' });
    }
    onReject(postId) {
        this.postsService.rejectPost(postId, this.rejectForm.value.reason);
        return true;
    }
    onMoreInfo(content) {
        //console.log(this.posts);
        this.modalService.open(content, { size: 'lg' });
    }
    clearFilter() {
        this.beneficiariesSelected = [];
        this.orgsSelected = [];
        this.keywords = "";
        this.startDate = null;
        this.endDate = null;
        this.submitFilter();
    }
    submitFilter() {
        /*
        let weirdText: string = "Ss!@#$%^&*(){}:\"<>~`"
        let lowerWeirdText = weirdText.toLowerCase();
        console.log(weirdText);
        console.log(lowerWeirdText);
        */
        if (this.beneficiariesSelected.length !== 0) {
            this.filteredPosts = this.posts.filter((post) => {
                return this.beneficiariesSelected.includes(post.beneficiaries);
            });
        }
        else {
            this.filteredPosts = [...this.posts];
            //console.log(this.filteredPosts);
        }
        if (this.startDate) {
            //console.log("There is a startDate!");
            this.filteredPosts = this.filteredPosts
                .filter((post) => {
                return (new Date(post.startDate).getTime() >= new Date(this.startDate).getTime());
            });
        }
        if (this.endDate) {
            //console.log("There is an endDate!");
            this.filteredPosts = this.filteredPosts.filter((post) => new Date(post.endDate).getTime() <= new Date(this.endDate).getTime());
        }
        //Need to cast new Date object over it again... KIV for future me. I have no idea why javascript does this (┛ಠ_ಠ)┛彡┻━┻
        if (this.keywords !== "") {
            this.filteredPosts = this.filteredPosts.filter(post => {
                return (this.KnuthMorrisPrattSearch(this.keywords, post.content) != -1) || (this.KnuthMorrisPrattSearch(this.keywords, post.title) != -1);
            });
        }
        if (this.orgsSelected.length !== 0) {
            this.filteredPosts = this.filteredPosts.filter(post => {
                for (let i = 0; i < this.orgsSelected.length; i++) {
                    if (this.orgsSelected[i] === post.orgName) {
                        return true;
                    }
                }
            });
        }
        if (this.filteredPosts.length === 0) {
            this.noFilteredPost = true;
        }
        else {
            this.noFilteredPost = false;
        }
    }
    //credits to https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
    KnuthMorrisPrattSearch(pattern, text) {
        // Immediate match
        if (pattern.length == 0) {
            return 0;
        }
        //convert them all to lowercase first.
        let lowerPattern = pattern.toLowerCase();
        let lowerText = text.toLowerCase();
        // Compute longest suffix-prefix table
        var lsp = [0]; // Base case
        for (var i = 1; i < pattern.length; i++) {
            var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
            while (j > 0 && lowerPattern.charAt(i) != lowerPattern.charAt(j))
                j = lsp[j - 1];
            if (lowerPattern.charAt(i) == lowerPattern.charAt(j))
                j++;
            lsp.push(j);
        }
        // Walk through text string
        var j = 0; // Number of chars matched in pattern
        for (var i = 0; i < text.length; i++) {
            while (j > 0 && lowerText.charAt(i) != lowerPattern.charAt(j))
                j = lsp[j - 1]; // Fall back in the pattern
            if (lowerText.charAt(i) == lowerPattern.charAt(j)) {
                j++; // Next char matched, increment position
                if (j == lowerPattern.length)
                    return i - (j - 1);
            }
        }
        return -1; // Not found
    }
    onApply(postId, errorMessage, studentContent) {
        const currentPost = this.postsService.getPost(postId);
        if (currentPost.students.filter(student => student.email === this.authStatusObject.email).length > 0) {
            //this.modalService.open(errorMessage, { size: 'lg' });
            this.dialog.open(src_app_dialogs_applied_before_dialog_applied_before_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AppliedBeforeDialog"]);
            //console.log("YOU, NRIC RANK AND NAME, HEREBY DECLARE THAT. TODAY IS YOUR BOOKOUT DAY, BOOKOUT, BOOKOUT. TODAY IS UR BOOKOUT DAY, YOU APPLIED BEFORE. ");
            return;
        }
        else {
            //this.postsService.applyPost(postId, this.studentObject);
            this.modalService.open(studentContent, {});
            return;
        }
    }
    submitApplication(postId, appForm) {
        if (appForm.invalid) {
            return;
        }
        this.studentApplyObject = {
            email: this.authStatusObject.email,
            contact: appForm.value.contactNumber,
            content: appForm.value.message,
            applicationUser: appForm.value.applicationUser,
        };
        this.postsService.applyPost(postId, this.studentApplyObject);
        this.dialog.open(src_app_dialogs_applied_post_notification_dialog_applied_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppliedPostNotificationDialog"]);
        return true;
    }
    submitApplicationReactive(postId) {
        console.log(this.applicationForm);
        if (this.applicationForm.invalid) {
            console.log("Application Form is not filled up yet or has invalid parts!");
            return;
        }
        this.studentApplyObject = {
            email: this.authStatusObject.email,
            contact: this.applicationForm.value.contact,
            content: this.applicationForm.value.content,
            applicationUser: this.applicationForm.value.applicationUser,
        };
        this.postsService.applyPost(postId, this.studentApplyObject);
        this.dialog.open(src_app_dialogs_applied_post_notification_dialog_applied_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppliedPostNotificationDialog"]);
        this.applicationForm.reset();
        return true;
    }
    applyBefore(currentPost) {
        //console.log("Apply before line fires");
        if (currentPost.students.filter(user => user.email === this.authStatusObject.email).length > 0) {
            return true;
        }
        return false;
    }
    onReport(postId, errorMessage, reportContent) {
        const currentPost = this.postsService.getPost(postId);
        if (currentPost.reports.filter(student => student.email === this.authStatusObject.email).length > 0) {
            //this.modalService.open(errorMessage, { size: 'lg' });
            this.dialog.open(src_app_dialogs_reported_before_dialog_reported_before_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ReportedBeforeDialog"]);
            //console.log("YOU REPORTED THIS POST BEFORE BEFORE.");
            return;
        }
        else {
            this.modalService.open(reportContent, {});
            return;
        }
    }
    submitReport(postId, reportForm) {
        if (reportForm.invalid) {
            //console.log("Still need to fill in the form!");
            return;
        }
        this.studentReportObject = {
            email: this.authStatusObject.email,
            contact: reportForm.value.contactNumber,
            content: reportForm.value.message,
        };
        this.postsService.reportPost(postId, this.studentReportObject);
        this.dialog.open(src_app_dialogs_reported_post_notification_dialog_reported_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ReportedPostNotificationDialog"]);
        return true;
    }
    submitReportReactive(postId) {
        console.log(this.reportForm);
        if (this.reportForm.invalid) {
            console.log("Report Form is not filled up yet or has invalid parts!");
            return;
        }
        this.studentReportObject = {
            email: this.authStatusObject.email,
            contact: this.reportForm.value.contact,
            content: this.reportForm.value.content,
        };
        this.postsService.reportPost(postId, this.studentReportObject);
        this.dialog.open(src_app_dialogs_reported_post_notification_dialog_reported_post_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ReportedPostNotificationDialog"]);
        return true;
    }
    reportBefore(currentPost) {
        //console.log("reportBefore's line fires");
        if (currentPost.reports.filter(user => user.email === this.authStatusObject.email).length > 0) {
            return true;
        }
        return false;
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
}
PostFeedComponent.ɵfac = function PostFeedComponent_Factory(t) { return new (t || PostFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
PostFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostFeedComponent, selectors: [["app-post-feed"]], decls: 48, vars: 13, consts: [[1, "filter-card"], [1, "filter-card-body"], [1, "filter-card-title"], ["appearance", "outline"], ["matInput", "", "type", "text", "ngModel", "", "placeholder", "eg Potong Pasir", 3, "ngModel", "ngModelChange"], ["ngModel", "", "multiple", "", "name", "beneficiariesSelected", 3, "ngModel", "ngModelChange"], ["beneficiariesInput", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["ngModel", "", "multiple", "", "name", "orgsSelected", 3, "ngModel", "ngModelChange"], ["organisationsInput", "ngModel"], ["appearance", "outline", 1, "example-form-field"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "ngModel", "", "name", "startDate", 3, "ngModel", "ngModelChange"], ["matEndDate", "", "placeholder", "End date", "name", "endDate", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", "", 1, "apply"], [1, "filter-footer"], ["label", "Clear filter criteria", "icon", "pi pi-trash", 1, "filter-button", 3, "click"], ["label", "Filter Search Results", "icon", "pi pi-filter", 1, "filter-button", 3, "click"], [1, "published-posts"], ["class", "info-text", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "loader-wrapper loader-wrapper--12", 4, "ngIf"], [1, "container"], [1, "copyright"], [3, "value"], [1, "info-text"], [1, "cards"], [1, "published-post-card"], ["mat-card-image", "", "class", "card-image", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 4, "ngIf"], ["mat-card-image", "", "class", "card-image", "alt", "Post's image", 3, "src", 4, "ngIf"], [1, "post-card-title"], [1, "post-card-subtitle"], [1, "post-card-content"], [1, "post-card-footer"], ["mat-raised-button", "", "class", "post-card-footer-button", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "disabled", "", "class", "post-card-footer-button", 4, "ngIf"], ["mat-raised-button", "", "class", "post-card-footer-button", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "post-card-footer-button-complete", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 1, "post-card-footer-button", 3, "click"], ["messageForStudent", ""], ["content", ""], ["error", ""], ["studentContent", ""], ["reportContent", ""], ["errorMessage", ""], ["deleteContent", ""], ["completeContent", ""], ["rejectContent", ""], ["mat-card-image", "", "src", "../../../assets/dark-background-placeholder.png", "alt", "Placeholder image for post", 1, "card-image"], ["mat-card-image", "", "alt", "Post's image", 1, "card-image", 3, "src"], ["mat-raised-button", "", "color", "accent", 1, "post-card-footer-button", 3, "click"], ["mat-raised-button", "", "disabled", "", 1, "post-card-footer-button"], ["mat-raised-button", "", "color", "warn", 1, "post-card-footer-button", 3, "click"], ["mat-raised-button", "", 1, "post-card-footer-button-complete", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["type", "button", "aria-label", "apply", 1, "btn-close", 3, "click"], [3, "formGroup"], ["matInput", "", "type", "number", "required", "", "placeholder", "eg 81234567", "oninput", "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", "maxlength", "8", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "text", "required", "", "rows", "10", "placeholder", "Please elaborate on how you can contribute to the project.", 3, "formControl"], [1, "role-radio-group"], [1, "d-block", "my-3"], [1, "custom-control", "custom-radio"], ["id", "Student", "type", "radio", "value", "Student", 1, "custom-control-input", 3, "formControl"], ["for", "Student", 1, "custom-control-label"], ["id", "NUS Alumni", "type", "radio", "value", "NUS Alumni", 1, "custom-control-input", 3, "formControl"], ["for", "NUS Alumni", 1, "custom-control-label"], ["matInput", "", "type", "text", "required", "", "rows", "10", "placeholder", "Please elaborate provide us with the reason for reporting the post.", 3, "formControl"], ["type", "button", "aria-label", "apply", 1, "submit", 3, "click"], ["matInput", "", "type", "text", "rows", "10", "placeholder", "Please tell us why you are removing the post. (eg lack of interest in job, job expired, etc)", 3, "formControl"], ["matInput", "", "type", "text", "rows", "10", "placeholder", "Please record down the reason for rejecting this approved post.", 3, "formControl"], [1, "loader-wrapper", "loader-wrapper--12"], [1, "loader", "loader--12"], [1, "dot"]], template: function PostFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Filter Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Search for keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PostFeedComponent_Template_input_ngModelChange_8_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Beneficiaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PostFeedComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.beneficiariesSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PostFeedComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Organisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PostFeedComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.orgsSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PostFeedComponent_mat_option_20_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-date-range-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PostFeedComponent_Template_input_ngModelChange_25_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PostFeedComponent_Template_input_ngModelChange_26_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-date-range-picker", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-date-range-picker-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_Template_p_button_click_36_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostFeedComponent_Template_p_button_click_37_listener() { return ctx.submitFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, PostFeedComponent_p_39_Template, 3, 0, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, PostFeedComponent_ng_container_40_Template, 58, 19, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, PostFeedComponent_p_41_Template, 3, 0, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PostFeedComponent_div_42_Template, 8, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " \u00A9 Orbital 2021 Team StudyGoWhere, ID 2601, Darren Hoon and Wilbur Fong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " In conjuction with the Centre for Computing for Social Good and Philanthropy (CCSGP), NUS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.beneficiariesSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.beneficiaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.orgsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noFilteredPost && ctx.hasApproved);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasApproved === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasApproved === null);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangePicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerCancel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerApply"], primeng_button__WEBPACK_IMPORTED_MODULE_17__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 99999;\n}\n  .cdk-overlay-container {\n  z-index: 99999;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\n\n.filter-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n}\n.filter-card-body[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  text-align: center;\n  \n  border-style: solid;\n  border-width: thin;\n  border-color: #4da8da;\n  box-shadow: none;\n}\n.filter-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.filter-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  flex: auto;\n}\n\n.published-posts[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  align-content: space-around;\n}\n.published-post-card[_ngcontent-%COMP%] {\n  width: 25rem;\n  height: 35rem;\n  text-align: center;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.published-post-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 11px #394dffda;\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 50%;\n  overflow: hidden;\n  object-fit: cover;\n}\n.post-card-title[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  text-overflow: ellipsis;\n  width: 22rem;\n  max-width: 22rem;\n  height: 1.7rem;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 1.5rem;\n}\n.post-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: 120%;\n  width: 22rem;\n  max-width: 22rem;\n  height: 2rem;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #585858;\n}\nmat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n.post-card-content[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  text-overflow: ellipsis;\n  width: 22rem;\n  max-width: 22rem;\n  height: 8rem;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #777777;\n  text-align: center;\n}\n.post-card-footer[_ngcontent-%COMP%] {\n  width: 20rem;\n  max-width: 20rem;\n  font-family: \"Lato\", sans-serif;\n  align-items: center;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n}\n.pCardHeader[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  width: 45rem;\n  max-width: 45rem;\n  text-align: center;\n  height: 1.7rem;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 1.5rem;\n}\n.pCardSubheader[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #D9D9D9;\n}\n.pCardContent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 8;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 10rem;\n}\n.post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  justify-content: center;\n}\n.post-button[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  color: black;\n  border: none;\n}\n.modal-body[_ngcontent-%COMP%] {\n  color: black;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  color: black;\n  border: none;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.post-card-footer-button-complete[_ngcontent-%COMP%] {\n  background-color: #00b167;\n  color: white;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.preloaders[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.loader-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  width: 25%;\n  min-width: 300px;\n  min-height: 300px;\n  display: block;\n  z-index: 30000;\n  border: 2px solid inherit;\n}\n.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 40%;\n  margin-left: 10%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.loader-wrapper--12[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: inherit;\n  display: inline-block;\n  border-radius: 50%;\n  animation: scale 2s infinite;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+1) {\n  background: #a3328c;\n  animation-delay: 0.1s;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+2) {\n  background: #ca295b;\n  animation-delay: 0.2s;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+3) {\n  background: #dd2445;\n  animation-delay: 0.3s;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+4) {\n  background: #fd231f;\n  animation-delay: 0.4s;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+5) {\n  background: #fd6631;\n  animation-delay: 0.5s;\n}\n.loader-wrapper--12[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(6n+6) {\n  background: #fcae44;\n  animation-delay: 0.6s;\n}\n@keyframes rotate180 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate45 {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    opacity: 0.3;\n    transform: rotate(45deg);\n  }\n  50% {\n    transform: rotate(90deg);\n  }\n  75% {\n    transform: rotate(135deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@keyframes rotateXY {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    opacity: 0.8;\n    transform: rotateY(180deg) rotateX(0deg);\n  }\n  100% {\n    transform: rotateY(180deg) rotateX(180deg);\n  }\n}\n@keyframes translateRotateSquares {\n  0%, 100% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  25% {\n    opacity: 0.3;\n    transform: translate(40px, 40px) rotate(45deg);\n  }\n  50% {\n    transform: translate(0px, 80px) rotate(0deg);\n  }\n  75% {\n    transform: translate(-40px, 40px) rotate(45deg);\n  }\n}\n@keyframes translateSquares {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  25% {\n    opacity: 0.3;\n    transform: translate(0px, 5px);\n  }\n  75% {\n    transform: translate(0, 0px);\n  }\n  100% {\n    transform: translate(0, 0px);\n  }\n}\n@keyframes wave {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  50% {\n    opacity: 0.3;\n    transform: translate(-2px, 0px);\n  }\n  100% {\n    transform: translate(0, 0px);\n  }\n}\n@keyframes wave2 {\n  0% {\n    transform: translate(0, 0px);\n  }\n  50% {\n    opacity: 0.3;\n    transform: translate(0, 20px);\n  }\n  100% {\n    transform: translate(0, 0px);\n  }\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.3;\n    transform: scale(2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0cy1mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQUFBO0FBRUE7Ozs7O0NBQUE7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO29EQUFBO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFERjtBQUtBO29EQUFBO0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGO0FBTUE7RUFDRSw4QkFBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhGO0FBT0E7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVNBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVJGO0FBV0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFSRjtBQVdBO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVRGO0FBWUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVRGO0FBZUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFaRjtBQWVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVpGO0FBZUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVpGO0FBZUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBWkY7QUFlQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFaRjtBQWdCQTtvREFBQTtBQUVBO0VBQ0Usa0JBQUE7QUFiRjtBQWlCQTtvREFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFkRjtBQWlCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBZEY7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWRGO0FBaUJBO29EQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWlCQTtFQUNFLFdBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFkRjtBQWlCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWRGO0FBZ0NBO0VBQ0UsU0FBQTtBQTdCRjtBQStCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUE1QkY7QUE4QkE7RUFHRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBM0JGO0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUExQko7QUE0QkU7RUFDRSxtQkFBQTtBQTFCSjtBQTRCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUExQlI7QUE2QlU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBM0JaO0FBeUJVO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQXZCWjtBQXFCVTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFuQlo7QUFpQlU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBZlo7QUFhVTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFYWjtBQVNVO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQVBaO0FBZUE7RUFDRTtJQUNFLHVCQUFBO0VBWkY7RUFjQTtJQUNFLHlCQUFBO0VBWkY7RUFjQTtJQUNFLHlCQUFBO0VBWkY7QUFDRjtBQWNBO0VBQ0U7SUFDRSx1QkFBQTtFQVpGO0VBY0E7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RUFaRjtFQWNBO0lBQ0Usd0JBQUE7RUFaRjtFQWNBO0lBQ0UseUJBQUE7RUFaRjtFQWNBO0lBQ0UseUJBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRTtJQUNFLHVCQUFBO0VBYkY7RUFlQTtJQUNFLFlBQUE7SUFDQSx3Q0FBQTtFQWJGO0VBZUE7SUFDRSwwQ0FBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRTtJQUVFLDJDQUFBO0VBZkY7RUFpQkE7SUFDRSxZQUFBO0lBQ0EsOENBQUE7RUFmRjtFQWlCQTtJQUNFLDRDQUFBO0VBZkY7RUFpQkE7SUFDRSwrQ0FBQTtFQWZGO0FBQ0Y7QUFrQkE7RUFDRTtJQUNFLDhCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsWUFBQTtJQUNBLDhCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsNEJBQUE7RUFoQkY7RUFrQkE7SUFDRSw0QkFBQTtFQWhCRjtBQUNGO0FBa0JBO0VBQ0U7SUFDRSw4QkFBQTtFQWhCRjtFQWtCQTtJQUNFLFlBQUE7SUFDQSwrQkFBQTtFQWhCRjtFQWtCQTtJQUNFLDRCQUFBO0VBaEJGO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLDRCQUFBO0VBakJGO0VBbUJBO0lBQ0UsWUFBQTtJQUNBLDZCQUFBO0VBakJGO0VBbUJBO0lBQ0UsNEJBQUE7RUFqQkY7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsbUJBQUE7RUFsQkY7RUFvQkE7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUFsQkY7RUFvQkE7SUFDRSxtQkFBQTtFQWxCRjtBQUNGIiwiZmlsZSI6InBvc3RzLWZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHTE9CQUxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLypcclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuKi9cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyogRklMVEVSIENBUkRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZpbHRlci1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXItY2FyZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi5maWx0ZXItY2FyZC1ib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1RkI0OUM7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5maWx0ZXItZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogYXV0b1xyXG59XHJcblxyXG5cclxuLyogUE9TVFMgVElNRUxJTkVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnB1Ymxpc2hlZC1wb3N0cyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnB1Ymxpc2hlZC1wb3N0LWNhcmQge1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDM1cmVtO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnB1Ymxpc2hlZC1wb3N0LWNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4ICMzOTRkZmZkYTtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ucG9zdC1jYXJkLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICB3aWR0aDogMjJyZW07XHJcbiAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucG9zdC1jYXJkLXN1YnRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuXHJcbiAgd2lkdGg6IDIycmVtO1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1mb290ZXIge1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBvc3QtY2FyZC1mb290ZXItYnV0dG9uIHtcclxufVxyXG5cclxuLnBDYXJkSGVhZGVyIHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogNDVyZW07XHJcbiAgbWF4LXdpZHRoOiA0NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxLjdyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucENhcmRTdWJoZWFkZXIge1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI0Q5RDlEOTtcclxufVxyXG5cclxuLnBDYXJkQ29udGVudCBwIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5wb3N0LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG4vKiBGT09URVJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogTU9EQUwgV0lORE9XXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBNSVNDRUxMQU5FT1VTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5pbmZvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQtZm9vdGVyLWJ1dHRvbi1jb21wbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE2NztcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG5cclxuLy9Gcm9tIGxvYWRlciB3ZWJzaXRlIGh0dHBzOi8vY29kZXBlbi5pby9JbmZlcm5hbE5lcGhpbGltL3Blbi9hUnBnTkJcclxuJGNvbG9yczogWyNhMzMyOGMsICNjYTI5NWIsICNkZDI0NDUsICNmZDIzMWYsICNmZDY2MzEsICNmY2FlNDRdO1xyXG4kY29sb3JzLS0zOiBbIzgzNjBjMywgIzcyNzRiOSwgIzYwODdhZiwgIzRlOWFhNCwgIzQwYWM5YywgIzJlYmY5MV07XHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJHdpbmVyZWQ6ICNjMzE0MzI7XHJcblxyXG4kY2lyY3VsYXJMb2FkZXJTaXplOiA5MHB4O1xyXG5cclxuQG1peGluIFdpZHRoQW5kSGVpZ2h0KCR3LCRoKSB7XHJcbiAgd2lkdGg6ICR3O1xyXG4gIGhlaWdodDogJGg7XHJcbn1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5wcmVsb2FkZXJzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDMwMDAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGluaGVyaXQ7XHJcbiAgLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gIH1cclxuICAmLS0xMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgLmxvYWRlciB7XHJcbiAgICAgIC5kb3Qge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZTtcclxuXHJcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNvbG9ycykge1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoI3tsZW5ndGgoJGNvbG9ycyl9biArICN7JGl9KSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG50aCgkY29sb3JzLCAkaSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcyAqICRpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUxODAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZTQ1IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlWFkge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRyYW5zbGF0ZVJvdGF0ZVNxdWFyZXMge1xyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LCA0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0cmFuc2xhdGVTcXVhcmVzIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDVweCk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgd2F2ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3YXZlMiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "uqOH":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/applied-before-dialog/applied-before-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AppliedBeforeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedBeforeDialog", function() { return AppliedBeforeDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//import { MatDialog } from "@angular/material/dialog";
class AppliedBeforeDialog {
}
AppliedBeforeDialog.ɵfac = function AppliedBeforeDialog_Factory(t) { return new (t || AppliedBeforeDialog)(); };
AppliedBeforeDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppliedBeforeDialog, selectors: [["applied-before-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function AppliedBeforeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have applied to this post before!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wait for a response from the organisation, or drop them an email if you think they missed your application!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-board/admin-board.component */ "LnS8");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_admin_signup_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup-admin/signup-admin.component */ "H2Te");
/* harmony import */ var _auth_signup_general_signup_general_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup-general/signup-general.component */ "/O4B");
/* harmony import */ var _posts_posts_feed_posts_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/posts-feed/posts-feed.component */ "sqC4");
/* harmony import */ var _posts_posts_create_admin_posts_create_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts-create-admin/posts-create-admin.component */ "VUEF");
/* harmony import */ var _admin_student_board_student_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/student-board/student-board.component */ "7Ubm");
/* harmony import */ var _admin_org_board_org_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/org-board/org-board.component */ "O/5P");
/* harmony import */ var _posts_posts_create_org_posts_create_org_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/posts-create-org/posts-create-org.component */ "HgG0");
/* harmony import */ var _homepage_hompage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/hompage.component */ "aVNK");
/* harmony import */ var _admin_student_board_change_password_student_board_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/student-board-change-password/student-board-change-password.component */ "Kdn7");
/* harmony import */ var _admin_highlight_create_highlight_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/highlight-create/highlight-create.component */ "kBis");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    { path: '', component: _homepage_hompage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"] },
    { path: 'feed', component: _posts_posts_feed_posts_feed_component__WEBPACK_IMPORTED_MODULE_6__["PostFeedComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_1__["AdminBoardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["Admin"] } },
    { path: 'student-alumni', component: _admin_student_board_student_board_component__WEBPACK_IMPORTED_MODULE_8__["StudentBoardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["Student", "Student / NUS Alumni"] },
        children: [
            //{ path: '', component: DashBoardLandingComponent, canActivate: [AuthGuard] },
            { path: 'changepassword', component: _admin_student_board_change_password_student_board_change_password_component__WEBPACK_IMPORTED_MODULE_12__["StudentBoardChangePasswordComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
        ]
    },
    { path: 'organisation', component: _admin_org_board_org_board_component__WEBPACK_IMPORTED_MODULE_9__["OrgBoardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["Student Organisation", "External Organisation"] } },
    {
        path: 'create',
        component: _posts_posts_create_org_posts_create_org_component__WEBPACK_IMPORTED_MODULE_10__["PostCreateOrgComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ["External Organisation", "Student Organisation"] }
    },
    {
        path: 'createAdmin',
        component: _posts_posts_create_admin_posts_create_admin_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateAdminComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ["Admin"] }
    },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { animation: 'isRight' } },
    { path: 'signup', component: _auth_signup_general_signup_general_component__WEBPACK_IMPORTED_MODULE_5__["SignupGeneralComponent"], data: { animation: 'isLeft' } },
    { path: 'signupAdmin', component: _auth_signup_admin_signup_admin_component__WEBPACK_IMPORTED_MODULE_4__["SignupAdminComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["Admin"] } },
    { path: 'createHighlight', component: _admin_highlight_create_highlight_create_component__WEBPACK_IMPORTED_MODULE_13__["HighlightCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["Admin"] } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xuOZ":
/*!********************************************************************************************!*\
  !*** ./src/app/dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WrongStudentEmailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongStudentEmailDialog", function() { return WrongStudentEmailDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { MatDialog } from "@angular/material/dialog";
class WrongStudentEmailDialog {
}
WrongStudentEmailDialog.ɵfac = function WrongStudentEmailDialog_Factory(t) { return new (t || WrongStudentEmailDialog)(); };
WrongStudentEmailDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrongStudentEmailDialog, selectors: [["wrong-student-email-dialog"]], decls: 0, vars: 0, template: function WrongStudentEmailDialog_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "yVj2":
/*!**********************************************!*\
  !*** ./src/app/homepage/homepage.service.ts ***!
  \**********************************************/
/*! exports provided: HomepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageService", function() { return HomepageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl; //change this in the environment folder
class HomepageService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getHomepageContent() { }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomepageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map