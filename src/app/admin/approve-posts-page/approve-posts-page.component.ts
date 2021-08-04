import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/posts/post.model';
import { PostsService } from 'src/app/posts/post.service';
import { ChangePasswordAlertComponent } from '../snackbars/change-password-snackbar/change-password-snackbar.component';

@Component({
  selector: 'approve-posts',
  templateUrl: './approve-posts-page.component.html',
  styleUrls: ['approve-posts-page.component.scss'],
})
export class ApprovePostsPageComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  posts: Post[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;

  public postsNumber: number;
  public hasRequest: Boolean;

  /* Filter Table */
  displayedColumns: string[] = ['POC', 'email', 'phoneNumber', 'menu'];
  dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Reject FormGroup */
  public rejectForm: FormGroup;
  public rejectReasonControl = new FormControl(null);

  //navbar stuff
  active: string = 'postsPendingApproval';

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    public authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject();

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts.filter((post) => !post.removed);
        this.posts = this.posts.filter((post) => !post.approved);

        if (this.posts.length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter((post) => !post.approved).length;
        } else {
          this.hasRequest = false;
        }

        this.dataSource = new MatTableDataSource(this.posts);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onDeletePrompt(content) {
    this.modalService.open(content, { size: 'lg' });
    //console.log(this.posts);
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
    //console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  onMoreInfoReport(reportedContent) {
    this.modalService.open(reportedContent, { size: 'lg' });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log("Apply Filter function called!");
    //console.log(filterValue);
    //console.log(this.dataSource.filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }
}
