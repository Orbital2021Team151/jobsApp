import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatSidenavModule } from  '@angular/material/sidenav';
import { MatList, MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
//import { AdsenseModule } from 'ng2-adsense';
//If these causes issue in the future, revert to angular material version "^8.0.0" in package-json
//by doing npm install --save @angular/material@8 --save-exact

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostCreateAdminComponent } from './posts/posts-create-admin/posts-create-admin.component';
import { PostFeedComponent } from './posts/posts-feed/posts-feed.component';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupAdminComponent } from './auth/signup-admin/signup-admin.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupGeneralComponent } from './auth/signup-general/signup-general.component';
import { StudentBoardComponent } from './admin/student-board/student-board.component';
import { ErrorInterceptor } from './error-interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPasswordErrorComponent } from './errors/forget-password-error/forget-password-error.component';
import { OrgBoardComponent } from './admin/org-board/org-board.component';
import { PostCreateOrgComponent } from './posts/posts-create-org/posts-create-org.component';
import { LoginWrongPasswordErrorComponent } from './errors/login-wrong-password-error/login-wrong-password-error.component';
import { UpdatePasswordErrorComponent } from './errors/update-password-error/update-password-error.component';
import { LoginGeneralErrorComponent } from './errors/login-general-error/login-general-error.component';
import { SignupBeforeErrorComponent } from './errors/signup-before-error/signup-before-error.component';
import { HomepageComponent } from './homepage/hompage.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { AppliedBeforeDialog } from './dialogs/applied-before-dialog/applied-before-dialog.component';
import { ReportedBeforeDialog } from './dialogs/reported-before-dialog/reported-before-dialog.component';
import { ReportedPostNotificationDialog } from './dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { AppliedPostNotificationDialog } from './dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component';
import { DashBoardLandingComponent } from './admin/dashboard-landing/dashboard-landing.component';
import { StudentBoardChangePasswordComponent } from './admin/student-board-change-password/student-board-change-password.component';
import { StartDateErrorDialog } from './dialogs/start-date-error-dialog/start-date-error-dialog.component';
import { WrongStudentEmailDialog } from './dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PostCreateAdminComponent,
    PostCreateOrgComponent,
    PostFeedComponent,
    AdminBoardComponent,
    LoginComponent,
    SignupAdminComponent,
    SignupGeneralComponent,
    StudentBoardComponent,
    OrgBoardComponent,
    ForgetPasswordErrorComponent,
    LoginWrongPasswordErrorComponent,
    UpdatePasswordErrorComponent,
    LoginGeneralErrorComponent,
    SignupBeforeErrorComponent,
    HomepageComponent,
    DarkModeToggleComponent,
    AppliedBeforeDialog,
    ReportedBeforeDialog,
    ReportedPostNotificationDialog,
    AppliedPostNotificationDialog,
    DashBoardLandingComponent,
    StudentBoardChangePasswordComponent,
    StartDateErrorDialog,
    WrongStudentEmailDialog,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    CardModule,
    ButtonModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
          darkModeClass: 'dark-mode',
          lightModeClass: 'light-mode'
    }
  },

    /*
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
        darkModeClass: 'my-dark-mode',
        lightModeClass: 'my-light-mode',
      },
    },
    */

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgetPasswordErrorComponent,
    LoginWrongPasswordErrorComponent,
    UpdatePasswordErrorComponent,
    LoginGeneralErrorComponent,
    SignupBeforeErrorComponent,
  ],
})
export class AppModule {}
