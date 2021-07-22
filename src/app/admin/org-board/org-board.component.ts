import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ChangePasswordAlertComponent } from "../change-password-alert/change-password-alert.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-org-board",
  templateUrl: './org-board.component.html',
  styleUrls: ['./org-board.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class OrgBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  approvedPosts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;
  hideCurrentPassword = true;
  hideNewPassword = true;

  private postsNumber: number;
  private appliedPostsNumber: number;

  public hasNoApprovedPosts: boolean = null;
  public hasRequest: Boolean = null;
  public hasApplication: Boolean = null;
  postToBeDeleted: string;

  /* Remove / Complete FormGroup */
  public removeForm: FormGroup;
  public removeReasonControl = new FormControl(null);

  /* Change Password FormGroup */
  public changePasswordForm: FormGroup;
  public currentPasswordControl = new FormControl(null);
  public newPasswordControl = new FormControl(null);
  public newPasswordConfirmControl = new FormControl(null);

  //for the navbar
  active: string = "changePassword";

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.removeForm = new FormGroup({
      reason: this.removeReasonControl,
    });

    this.changePasswordForm = new FormGroup({
      currentPassword: this.currentPasswordControl,
      newPassword: this.newPasswordControl,
      newPasswordConfirm: this.newPasswordConfirmControl,
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
      .subscribe((posts: Post[]) => {

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
        } else {
          this.hasNoApprovedPosts = false;
        }

        if (this.posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        } else {
          this.hasRequest = false;
        }

        if (this.posts.filter(post => post.students.length > 0).length > 0) {
          this.hasApplication = true;
          this.appliedPostsNumber = this.posts.filter(post => post.students.length > 0).length;
        } else {
          this.hasApplication = false;
        }
      });

  }

  onDelete(postId: string) {
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
  onDeleteAppliedPost(postId: string) {
    this.postsService.deletePost(postId);
    this.appliedPostsNumber--;

    if (this.appliedPostsNumber === 0) {
      this.hasApplication = false;
    }
  }

  //testing needed
  onComplete(postId: string) {
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

  onCompleteAppliedPost(postId: string) {
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
  acceptApplicant(postId: string, userEmail: string) {
    this.postsService.acceptStudent(postId, userEmail);
  }

  //need to build up
  acceptedBefore(postId: string, userEmail: string) {
    const post: Post = this.postsService.getPost(postId);
    return post.studentsAccepted.includes(userEmail);
  }

  onChangePassword() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.authService.changePassword(this.changePasswordForm.value.currentPassword, this.changePasswordForm.value.newPassword);
    this.authService.getChangedPasswordListener().subscribe(res => {
      this.openChangePasswordAlertSnackBar();
      this.changePasswordForm.reset();
    });
  }

  openChangePasswordAlertSnackBar() {
    this._snackBar.openFromComponent(ChangePasswordAlertComponent, {
      duration: 3 * 1000,
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }

}
