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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
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
import { AppliedBeforeDialog } from './dialogs/applied-before-dialog/applied-before-dialog.component';
import { ReportedBeforeDialog } from './dialogs/reported-before-dialog/reported-before-dialog.component';
import { ReportedPostNotificationDialog } from './dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component';
import { AppliedPostNotificationDialog } from './dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component';
import { DashBoardLandingComponent } from './admin/dashboard-landing/dashboard-landing.component';
import { StudentBoardChangePasswordComponent } from './admin/student-board-change-password/student-board-change-password.component';
import { StartDateErrorDialog } from './dialogs/start-date-error-dialog/start-date-error-dialog.component';
import { WrongStudentEmailDialog } from './dialogs/wrong-student-email-dialog/wrong-student-email-dialog.component';
import { HighlightCreateComponent } from './admin/highlight-create/highlight-create.component';
import { PostSubmittedDialog } from './dialogs/post-submitted-dialog/post-submitted-dialog.component';
import { HighlightContentComponent1 } from './highlight-content/highlight-content-1/highlight-content-1.component';
import { HighlightContentComponent2 } from './highlight-content/highlight-content-2/highlight-content-2.component';
import { HighlightContentComponent3 } from './highlight-content/highlight-content-3/highlight-content-3.component';
import { ExpiredSessionPage } from './errors/expired-session-error-page/expired-session-error-page.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FieldsNotCompleteDialog } from './dialogs/fields-not-complete-dialog/fields-not-complete-dialog.component';
import { HighlightSubmittedDialog } from './dialogs/highlight-submitted-dialog/highlight-submitted-dialog.component';
import { PostRejectedDialog } from './dialogs/post-rejected-dialog/post-rejected-dialog.component';
import { PostCompletedDialog } from './dialogs/post-completed-dialog/post-completed-dialog.component';
import { MatChipList, MatChipsModule } from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ApprovePostsPageComponent } from './admin/approve-posts-page/approve-posts-page.component';
import { ReportedPostsPageComponent } from './admin/reported-posts-page/reported-posts-page.component';
import { UserBannedErrorComponent } from './errors/user-banned-error/user-banned-error.component';
import { DownloadCSVPageComponent } from './admin/download-csv-page/download-csv-page.component';
import { UpdateInterestsComponent } from './admin/update-interests-page/update-interests-page.component';
import { PermissionsComponent } from './admin/permissions/permissions.component';
import { JobsAppliedComponent } from './admin/jobs-applied/jobs-applied.component';
import { JobsReportedComponent } from './admin/jobs-reported/jobs-reported.component';
import { BannedErrorComponent } from './errors/banned-error/banned-error.component';
import { MyPostsComponent } from './admin/my-posts/my-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PostCreateComponent,
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
    UserBannedErrorComponent,
    HomepageComponent,
    AppliedBeforeDialog,
    ReportedBeforeDialog,
    ReportedPostNotificationDialog,
    AppliedPostNotificationDialog,
    DashBoardLandingComponent,
    StudentBoardChangePasswordComponent,
    StartDateErrorDialog,
    WrongStudentEmailDialog,
    HighlightCreateComponent,
    PostSubmittedDialog,
    HighlightContentComponent1,
    HighlightContentComponent2,
    HighlightContentComponent3,
    ExpiredSessionPage,
    FieldsNotCompleteDialog,
    HighlightSubmittedDialog,
    PostRejectedDialog,
    PostCompletedDialog,
    ChangePasswordComponent,
    ApprovePostsPageComponent,
    ReportedPostsPageComponent,
    DownloadCSVPageComponent,
    UpdateInterestsComponent,
    PermissionsComponent,
    JobsAppliedComponent,
    JobsReportedComponent,
    MyPostsComponent,
    BannedErrorComponent,
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
    MatStepperModule,
    FlexLayoutModule,
    CardModule,
    ButtonModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatRadioModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatPasswordStrengthModule,
    MatTooltipModule,
    MatChipsModule,
    ScrollingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
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
