import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-admin-board",
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AdminBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;
  hideCurrentPassword = true;
  hideNewPassword = true;

  private postsNumber: number;
  private reportedPostsNumber: number;

  public hasRequest: Boolean = null;
  public hasReport: Boolean = null;
  postToBeDeleted: string;
  requestedNewPassword = false;


  /* Reject FormGroup */
  public rejectForm: FormGroup;
  public rejectReasonControl = new FormControl(null);

  //navbar stuff
  active: string = "changePassword";

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
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

  onChangePassword(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
    this.authService.getChangedPasswordListener().subscribe(res => {
      this.requestedNewPassword = res;
    });
  }

  onDownloadCSV(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.downloadPosts(form.value.startDate, form.value.endDate);
  }

  closeNotification() {
    this.requestedNewPassword = false;
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }

}
