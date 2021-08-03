import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ChangePasswordAlertComponent } from "../snackbars/change-password-snackbar/change-password-snackbar.component";
import { UpdateBeneficiariesComponent } from "../snackbars/update-beneficiaries-snackbar/update-beneficiaries-snackbar.component";

@Component({
  selector: "app-jobs-applied",
  templateUrl: './jobs-applied.component.html',
  styleUrls: ['./jobs-applied.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class JobsAppliedComponent implements OnInit, OnDestroy {

  beneficiariesSelected: string[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;

  private authStatusObject;
  appliedPosts: Post[] = [];
  hasApplied: boolean;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject();
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);

        this.appliedPosts = posts.filter(post => !post.removed);

        this.appliedPosts = this.appliedPosts
        .filter(post => {
          for (let i = 0; i < post.students.length; i++) {
            if (post.students[i].email === this.authStatusObject.email) {
              return true;
            }
          }
          return false;
        });
        // console.log("this.appliedPosts");
        // console.log(this.appliedPosts);

        if (this.appliedPosts.length > 0) {
          this.hasApplied = true;
        } else {
          this.hasApplied = false;
        }

      });

    // console.log("this.appliedPosts");
    // console.log(this.appliedPosts);
    // console.log(this.posts);

    /*
     * Probably do not need this because there are no changes to authStatusObject once user is logged in.
     * Might have to be revised in the future for chat function.
     */
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      //console.log("student dashboard's authStatus observable!");
      this.authStatusObject = authObject;
    });
  }

  onMoreInfo(content) {
    //console.log("Checking this page's posts! ");
    //console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  /*
   * Wanted to do something similar to react ie to pass back a templateRef but idk how to do it for now
  viewApplication(postId: string) {
    let appliedPost = this.postsService.getPost(postId);
    let template = TemplateRef.createEmbeddedView
    this.modalService
    .open(, { size: 'lg' });
  }
  */

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
