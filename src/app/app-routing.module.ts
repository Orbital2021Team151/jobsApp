import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AdminBoardComponent } from "./admin/admin-board/admin-board.component";
import { PostBoardComponent } from "./posts/posts-board/posts-board.component";
import { PostCreateComponent } from "./posts/posts-create/posts-create.component";


const routes: Routes = [
  {path: 'dashboard', component: PostBoardComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'admin', component: AdminBoardComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}