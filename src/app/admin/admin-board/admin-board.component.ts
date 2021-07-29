import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../posts/post.model';
import { PostsService } from '../../posts/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { formatDate } from '@angular/common';
import {
  NgForm,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangePasswordAlertComponent } from '../snackbars/change-password-snackbar/change-password-snackbar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AdminBoardComponent implements OnInit, OnDestroy, AfterViewInit {

  //list = '1'.repeat(100).split('').map((_, i) => i);
  /** Constants used to fill up our data base. */
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
  active: string = 'changePassword';

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    public authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {
    this.rejectForm = new FormGroup({
      reason: this.rejectReasonControl,
    });

    this.changePasswordForm = new FormGroup({
      currentPassword: this.currentPasswordControl,
      newPassword: this.newPasswordControl,
      newPasswordConfirm: this.newPasswordConfirmControl,
    });


    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {

    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject();
    this.csvDownloadedSub = this.postsService
      .getCSVDownloadingListener()
      .subscribe((downloadingStatus) => {
        this.csvIsDownloading = downloadingStatus;
      });
    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);
        //console.log("Admin dashboard's postService observable!");
        this.posts = posts.filter((post) => !post.removed);

        if (this.posts.filter((post) => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter((post) => !post.approved).length;
        } else {
          this.hasRequest = false;
        }

        if (this.posts.filter((post) => post.reports.length > 0).length > 0) {
          this.hasReport = true;
          this.reportedPostsNumber = this.posts.filter(
            (post) => post.reports.length > 0
          ).length;
        } else {
          this.hasReport = false;
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

    this.authService.changePassword(
      this.changePasswordForm.value.currentPassword,
      this.changePasswordForm.value.newPassword
    );

    this.authService.getChangedPasswordListener().subscribe((res) => {
      this.openChangePasswordAlertSnackBar();
      this.changePasswordForm.reset();
    });
  }

  onDownloadCSV(form: NgForm) {
    if (form.invalid) {
      console.log('IT IS INVALID!?');
      return;
    }
    this.postsService.downloadPosts(form.value.startDate, form.value.endDate);
  }

  openChangePasswordAlertSnackBar() {
    this._snackBar.openFromComponent(ChangePasswordAlertComponent, {
      duration: 3 * 1000,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
    this.csvDownloadedSub.unsubscribe();
  }
}


const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
