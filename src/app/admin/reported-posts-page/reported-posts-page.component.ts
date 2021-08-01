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
    styleUrls: ['./reported-posts-page.component.scss'],
})

export class ReportedPostsPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  private postSub: Subscription;
  private authStatusObject;

  private reportedPostsNumber: number;
  public hasReport: Boolean = null;

  /* Reject FormGroup */
  public rejectForm: FormGroup;
  public rejectReasonControl = new FormControl(null);

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
    });
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject();

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);
        //console.log("Admin dashboard's postService observable!");
        this.posts = posts.filter(post => !post.removed);
        this.posts = this.posts.filter(post => post.reports.length > 0);

        if (this.posts.length > 0) {
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

  onRejectReportedPost(postId: string) {
    this.postsService.rejectPost(postId, this.rejectForm.value.reason);
    this.reportedPostsNumber--;

    if (this.reportedPostsNumber === 0) {
      this.hasReport = false;
    }

    this.rejectForm.reset();
    return true;
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
