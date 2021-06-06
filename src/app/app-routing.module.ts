import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupAdminComponent } from './auth/signup-admin/signup-admin.component';
import { SignupGeneralComponent } from './auth/signup-general/signup-general.component';
import { PostFeedComponent } from './posts/posts-feed/posts-feed.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import { StudentBoardComponent } from './admin/student-board/student-board.component';
import { OrgBoardComponent } from './admin/org-board/org-board.component';

const routes: Routes = [
  { path: 'feed', component: PostFeedComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminBoardComponent, canActivate: [AuthGuard], data: { roles: ["Admin"]}},
  { path: 'student', component: StudentBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student"] }},
  { path: 'organisation', component: OrgBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student Organisation", "External Organisation"] }},
  {
    path: 'create',
   component: PostCreateComponent,
   canActivate: [AuthGuard],
   data: { roles: ["Admin", "External Organisation", "Student Organisation", "Student"]}
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupGeneralComponent },
  { path: 'signupAdmin', component: SignupAdminComponent , canActivate: [AuthGuard], data: { roles: ["Admin"] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

