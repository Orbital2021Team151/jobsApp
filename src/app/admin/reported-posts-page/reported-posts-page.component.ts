import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/posts/post.model';
import { PostsService } from 'src/app/posts/post.service';
import { ChangePasswordAlertComponent } from '../snackbars/change-password-snackbar/change-password-snackbar.component';

@Component({
    selector: 'reported-posts',
    templateUrl: './reported-posts-page.component.html',
    styleUrls: ['./reported-posts-page.component.css'],
})

export class ReportedPostsPageComponent implements OnInit, OnDestroy {
    list = '1'.repeat(100).split('').map((_, i) => i);

  posts: Post[] = [];

  private postSub: Subscription;
  private csvDownloadedSub: Subscription;
  public csvIsDownloading: boolean;

  private authStatusSub: Subscription;
  private authStatusObject;
  hideCurrentPassword = true;
  hideNewPassword = true;

  private postsNumber: number;
  private reportedPostsNumber: number;

  public hasRequest: Boolean = null;
  public hasReport: Boolean = null;
  postToBeDeleted: string;


  /* Reject FormGroup */
  public rejectForm: FormGroup;
  public rejectReasonControl = new FormControl(null);

  /* Change Password FormGroup */
  public changePasswordForm: FormGroup;
  public currentPasswordControl = new FormControl(null);
  public newPasswordControl = new FormControl(null);
  public newPasswordConfirmControl = new FormControl(null);

  //navbar stuff
  active: string = "postsPendingApproval";

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
    });

    this.changePasswordForm = new FormGroup({
      currentPassword: this.currentPasswordControl,
      newPassword: this.newPasswordControl,
      newPasswordConfirm: this.newPasswordConfirmControl,
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

    this.csvDownloadedSub = this.postsService.getCSVDownloadingListener()
    .subscribe(downloadingStatus => {
      this.csvIsDownloading = downloadingStatus;
    });

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);
        //console.log("Admin dashboard's postService observable!");
        this.posts = posts.filter(post => !post.removed);

        if (this.posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        } else {
          this.hasRequest = false;
        }

        if (this.posts.filter(post => post.reports.length > 0).length > 0) {
          this.hasReport = true;
          this.reportedPostsNumber = this.posts.filter(post => post.reports.length > 0).length;
        } else {
          this.hasReport = false;
        }

      });
  }

  onDeletePrompt(content) {
    this.modalService.open(content, { size: 'lg' });
    console.log(this.posts);
  }

  onDelete(postId: string) {
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

  onDeleteReportedPost(postId: string) {
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

  onReject(postId: string) {
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

  onRejectReportedPost(postId: string) {
    this.postsService.rejectPost(postId, this.rejectForm.value.reason);
    this.reportedPostsNumber--;

    if (this.reportedPostsNumber === 0) {
      this.hasReport = false;
    }

    this.rejectForm.reset();
    return true;
  }

  onPublish(postId: string, publishContent) {

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

  onChangePassword() {
    if (this.changePasswordForm.invalid) {
      return;
    }

    console.log(this.changePasswordForm.value);

    this.authService.changePassword(this.changePasswordForm.value.currentPassword, this.changePasswordForm.value.newPassword);

    this.authService.getChangedPasswordListener().subscribe(res => {
      this.openChangePasswordAlertSnackBar();
      this.changePasswordForm.reset();
    });
  }

  onDownloadCSV(form: NgForm) {
    if (form.invalid) {
      console.log("IT IS INVALID!?");
      return;
    }
    this.postsService.downloadPosts(form.value.startDate, form.value.endDate);

    //TODO: needs some service here
  }

  openChangePasswordAlertSnackBar() {
    this._snackBar.openFromComponent(ChangePasswordAlertComponent, {
      duration: 3 * 1000,
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
    this.csvDownloadedSub.unsubscribe();
  }

}
