import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostBoardComponent } from './posts/posts-board/posts-board.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';

const routes: Routes = [
  { path: 'dashboard', component: PostBoardComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminBoardComponent, canActivate: [AuthGuard]},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
