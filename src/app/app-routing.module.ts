import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupAdminComponent } from './auth/signup-admin/signup-admin.component';
import { SignupGeneralComponent } from './auth/signup-general/signup-general.component';
import { PostFeedComponent } from './posts/posts-feed/posts-feed.component';
import { PostCreateAdminComponent } from './posts/posts-create-admin/posts-create-admin.component';
import { StudentBoardComponent } from './admin/student-board/student-board.component';
import { OrgBoardComponent } from './admin/org-board/org-board.component';
import { PostCreateOrgComponent } from './posts/posts-create-org/posts-create-org.component';

const routes: Routes = [
  { path: 'feed', component: PostFeedComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminBoardComponent, canActivate: [AuthGuard], data: { roles: ["Admin"]}},
  { path: 'student', component: StudentBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student"] }},
  { path: 'organisation', component: OrgBoardComponent, canActivate: [AuthGuard], data: { roles: ["Student Organisation", "External Organisation"] }},

  {
    path: 'create',
   component: PostCreateOrgComponent,
   canActivate: [AuthGuard],
   data: { roles: ["External Organisation", "Student Organisation"]}
  },
  {
    path: 'createAdmin',
   component: PostCreateAdminComponent,
   canActivate: [AuthGuard],
   data: { roles: ["Admin"]}
  },

  { path: 'login', component: LoginComponent, data: { animation: 'isRight' }},
  { path: 'signup', component: SignupGeneralComponent, data: { animation: 'isLeft' }},
  { path: 'signupAdmin', component: SignupAdminComponent , canActivate: [AuthGuard], data: { roles: ["Admin"] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

