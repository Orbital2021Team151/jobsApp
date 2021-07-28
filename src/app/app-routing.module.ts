import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupAdminComponent } from './auth/signup-admin/signup-admin.component';
import { SignupGeneralComponent } from './auth/signup-general/signup-general.component';
import { PostFeedComponent } from './posts/posts-feed/posts-feed.component';
import { StudentBoardComponent } from './admin/student-board/student-board.component';
import { OrgBoardComponent } from './admin/org-board/org-board.component';
import { PostCreateOrgComponent } from './posts/posts-create-org/posts-create-org.component';
import { HomepageComponent } from './homepage/hompage.component';
import { DashBoardLandingComponent } from './admin/dashboard-landing/dashboard-landing.component';
import { StudentBoardChangePasswordComponent } from './admin/student-board-change-password/student-board-change-password.component';
import { HighlightCreateComponent } from './admin/highlight-create/highlight-create.component';
import { HighlightContentComponent1 } from './highlight-content/highlight-content-1/highlight-content-1.component';
import { HighlightContentComponent2 } from './highlight-content/highlight-content-2/highlight-content-2.component';
import { HighlightContentComponent3 } from './highlight-content/highlight-content-3/highlight-content-3.component';
import { ExpiredSessionPage } from './errors/expired-session-error-page/expired-session-error-page.component';
import { DirtycheckGuard } from './route-guards/dirtycheck.guard';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'feed', component: PostFeedComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminBoardComponent, canActivate: [AuthGuard], data: { roles: ["Admin"]}},
  { path: 'student-alumni', component: StudentBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student", "Student / NUS Alumni"] },
    children: [
      //{ path: '', component: DashBoardLandingComponent, canActivate: [AuthGuard] },
      { path: 'changepassword', component: StudentBoardChangePasswordComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'organisation', component: OrgBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student Organisation", "External Organisation"] }},

  /*
  {
    path: 'create',
   component: PostCreateOrgComponent,
   canActivate: [AuthGuard],
   canDeactivate: [DirtycheckGuard],
   data: { roles: ["External Organisation", "Student Organisation"]}
  },
  */

  {
    path: 'create',
   component: PostCreateComponent,
   canActivate: [AuthGuard],
   canDeactivate: [DirtycheckGuard],
   data: { roles: ["Admin"]}
  },

  { path: 'login', component: LoginComponent, data: { animation: 'isRight' }},
  { path: 'signup', component: SignupGeneralComponent, data: { animation: 'isLeft' }},
  { path: 'signupAdmin', component: SignupAdminComponent , canActivate: [AuthGuard], data: { roles: ["Admin"] }},
  { path: 'createHighlight', component: HighlightCreateComponent, canActivate: [AuthGuard], canDeactivate: [DirtycheckGuard], data: { roles: ["Admin"] }},
  { path: 'highlightContent1', component: HighlightContentComponent1 },
  { path: 'highlightContent2', component: HighlightContentComponent2 },
  { path: 'highlightContent3', component: HighlightContentComponent3 },
  { path: 'expiredSession', component: ExpiredSessionPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

