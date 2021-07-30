import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
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
  selector: "update-interests",
  templateUrl: './update-interests-page.component.html',
  styleUrls: ['./update-interests-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UpdateInterestsComponent implements OnInit, OnDestroy {

  beneficiariesSelected: string[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;

  hasRequest: Boolean;
  postToBeDeleted: string;
  hideCurrentPassword = true;
  hideNewPassword = true;
  requestedNewPassword = false;
  active: string = "changePassword";

  private authStatusObject;
  beneficiaries: string[] = [
    "Animal Welfare",
    "Arts & Heritage",
    "Children & Youth",
    "Community",
    "Disability",
    "Education",
    "Elderly",
    "Environment",
    "Families",
    "Health",
    "Humanitarian",
    "Social Service",
    "Sports",
    "Women & Girls",
  ];

  public beneficiariesBoolean: { beneficiary: string, selected: boolean }[] = [
    {
      beneficiary: 'Animal Welfare',
      selected: false,
    },
    {
      beneficiary: 'Arts & Heritage',
      selected: false,
    },
    {
      beneficiary: 'Children & Youth',
      selected: false,
    },
    {
      beneficiary: 'Community',
      selected: false,
    },
    {
      beneficiary: 'Disability',
      selected: false,
    },
    {
      beneficiary: 'Education',
      selected: false,
    },
    {
      beneficiary: 'Elderly',
      selected: false,
    },
    {
      beneficiary: 'Environment',
      selected: false,
    },
    {
      beneficiary: 'Families',
      selected: false,
    },
    {
      beneficiary: 'Health',
      selected: false,
    },
    {
      beneficiary: 'Humanitarian',
      selected: false,
    },
    {
      beneficiary: 'Social Service',
      selected: false,
    },
    {
      beneficiary: 'Sports',
      selected: false,
    },
    {
      beneficiary: 'Women & Girls',
      selected: false,
    }
  ]

  posts: Post[] = [];
  appliedPosts: Post[] = [];
  reportedPosts: Post[] = [];
  hasReport: boolean = false;

  /* Change Password FormGroup */
  public changePasswordForm: FormGroup;
  public currentPasswordControl = new FormControl(null);
  public newPasswordControl = new FormControl(null);
  public newPasswordConfirmControl = new FormControl(null);

  /* beneficiaries formgroup */
  public beneficiariesForm: FormGroup;
  public beneficiariesControl = new FormControl(null);

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.changePasswordForm = new FormGroup({
      currentPassword: this.currentPasswordControl,
      newPassword: this.newPasswordControl,
      newPasswordConfirm: this.newPasswordConfirmControl,
    });
  }

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject();
    //console.log(this.authStatusObject);

    for (var beneficiary of this.authStatusObject.beneficiaries) {
      this.beneficiariesSelected.push(beneficiary);
    }

    this.hasRequest = false;
    this.postsService.getPosts();

    for (let i = 0; i < this.beneficiariesBoolean.length; i++) {

      if (this.beneficiariesSelected.length === 0) {
        this.beneficiariesBoolean[i].selected = false;
      }


      if (this.beneficiariesSelected.includes(this.beneficiariesBoolean[i].beneficiary)) {
        this.beneficiariesBoolean[i].selected = true;
      } else {
        this.beneficiariesBoolean[i].selected = false;
      }
    }

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);

        this.posts = posts.filter(post => !post.removed);

        this.posts = this.posts
        .filter(post => post.students.length > 0 || post.reports.length > 0);

        this.appliedPosts = this.posts.filter(posts => {
          for (let i = 0; i < posts.students.length; i++) {
            if (posts.students[i].email === this.authStatusObject.email) {
              return true;
            }
          }
        });
        // console.log("this.appliedPosts");
        // console.log(this.appliedPosts);

        this.reportedPosts = this.posts.filter(posts => {
          for (let i = 0; i < posts.reports.length; i++) {
            if (posts.reports[i].email === this.authStatusObject.email) {
              this.hasReport = true;
              return true;
            }
          }
        });
        //console.log("this.reportedPosts");
        //console.log(this.reportedPosts);

      });

    // console.log("this.appliedPosts");
    // console.log(this.appliedPosts);
    // console.log(this.posts);

    /*
     * Probably do not need this because there are no changes to authStatusObject once user is logged in.
     * Might have to be revised in the future for chat function.
     */

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      console.log("student dashboard's authStatus observable!");
      this.authStatusObject = authObject;
    });
  }

  updateUser() {
    console.log("At student-board updateUser method now");
    console.log(this.beneficiariesSelected);

    /*
    for (let i = 0; i < this.beneficiariesBoolean.length; i++) {
      if (this.beneficiariesBoolean[i].selected) {
        if (this.beneficiariesSelected.includes(this.beneficiariesBoolean[i].beneficiary)) {
          continue;
        }
        this.beneficiariesSelected.push(this.beneficiariesBoolean[i].beneficiary);
      }
      if (!this.beneficiariesBoolean[i].selected && this.beneficiariesSelected.includes(this.beneficiariesBoolean[i].beneficiary)) {
        this.beneficiariesSelected = this.beneficiariesSelected.filter(beneficiary => beneficiary != this.beneficiariesBoolean[i].beneficiary);
      }
    }
    */

    // this.authService.updateBeneficiaries(this.beneficiariesSelected);
    this.openUpdateBeneficiariesSnackBar();
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

  openChangePasswordAlertSnackBar() {
    this._snackBar.openFromComponent(ChangePasswordAlertComponent, {
      duration: 3 * 1000,
    });
  }

  openUpdateBeneficiariesSnackBar() {
    this._snackBar.openFromComponent(UpdateBeneficiariesComponent, {
      duration: 3 * 1000,
    });
  }

  onMoreInfo(content) {
    //console.log("Checking this page's posts! ");
    console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  closeNotification() {
    this.requestedNewPassword = false;
  }

  ngOnDestroy() {
    //this.authStatusSub.unsubscribe();
  }

}
