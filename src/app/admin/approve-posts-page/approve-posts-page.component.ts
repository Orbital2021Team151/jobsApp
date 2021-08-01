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
    selector: 'approve-posts',
    templateUrl: './approve-posts-page.component.html',
    styleUrls: ['approve-posts-page.component.css']
})
export class ApprovePostsPageComponent implements OnInit, OnDestroy {

    list = '1'.repeat(100).split('').map((_, i) => i); //??????

  posts: Post[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;

  private postsNumber: number;
  public hasRequest: Boolean;


  /* Reject FormGroup */
  public rejectForm: FormGroup;
  public rejectReasonControl = new FormControl(null);

  //navbar stuff
  active: string = "postsPendingApproval";

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
    });
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject();

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {

        this.posts = posts.filter(post => !post.removed);
        this.posts = posts.filter(post => !post.approved);

        if (this.posts.length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        } else {
          this.hasRequest = false;
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


  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }
}
