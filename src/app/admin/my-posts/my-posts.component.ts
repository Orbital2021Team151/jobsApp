import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PostCompletedDialog } from 'src/app/dialogs/post-completed-dialog/post-completed-dialog.component';
import { Post } from 'src/app/posts/post.model';
import { PostsService } from 'src/app/posts/post.service';
import { ChangePasswordAlertComponent } from '../snackbars/change-password-snackbar/change-password-snackbar.component';
import { PostStatus } from './post-status.model';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['my-posts.component.scss'],
})
export class MyPostsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  posts: PostStatus[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;

  public postsNumber: number;
  public hasRequest: Boolean;

  /* Filter Table */
  displayedColumns: string[] = ['title', 'postStatus', 'applicantStatus' , 'menu'];
  dataSource: MatTableDataSource<PostStatus> = new MatTableDataSource<PostStatus>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Remove / Complete FormGroup */
  public removeForm: FormGroup;
  public removeReasonControl = new FormControl(null);

  //navbar stuff
  active: string = 'postsPendingApproval';

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    public authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.removeForm = new FormGroup({
      reason: this.removeReasonControl,
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject();

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {

        this.posts = posts.map(post => {

          let postStatus = 'Pending Approval';
          let applicantStatus = 'No Applicants';

          if (post.removed === "COMPLETED") {
            postStatus = 'Completed';
          } else if (post.removed === "REMOVED / COMPLETED") {
            postStatus = 'Removed / Completed';
          } else if (post.removed === "REJECTED") {
            postStatus = 'Rejected';
          } else if (post.approved) {
            postStatus = 'Approved';
          } else {
            postStatus = 'Pending Approval';
          }

          if (post.students.length > 0) {
            applicantStatus = 'Has Applicants';
          }

          return {
            id: post.id,
            orgName: post.orgName,
            uen: post.uen,
            POC: post.POC,
            phoneNumber: post.phoneNumber,
            email: post.email,
            title: post.title,
            opportunity: post.opportunity,
            content: post.content,
            skills: post.skills,
            startDate: post.startDate,
            endDate: post.endDate,
            hoursRequired: post.hoursRequired,
            location: post.location,
            beneficiaries: post.beneficiaries,
            students: post.students,
            reports: post.reports,
            studentsAccepted: post.studentsAccepted,
            postStatus: postStatus,
            applicantStatus: applicantStatus
          };
        });

        this.posts = this.posts.filter(post => post.email === this.authStatusObject.email);

        if (this.posts.length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.length;
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

  onCompletePrompt(completePrompt) {
    this.modalService.open(completePrompt, { size: 'lg' });
  }

  onComplete(postId: string) {
    this.postsService.completePostMyPosts(postId, this.removeForm.value.reason);
    this.removeForm.reset();
    this.dialog.open(PostCompletedDialog);
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

  acceptApplicant(postId: string, student: {name: string, email: string, contact: number, content: string}) {
    this.postsService.acceptStudent(postId, student);
  }

  acceptedBefore(postId: string, userEmail: string) {
    const post: Post = this.postsService.getPost(postId);
    return post.studentsAccepted.includes(userEmail);
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
