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
    for (var beneficiary of this.authStatusObject.beneficiaries) {
      this.beneficiariesSelected.push(beneficiary);
    }
    /*
    //this.authStatusObject = this.authService.getAuthStatusObject();
    //console.log(this.authStatusObject);

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
    */

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      //console.log("student dashboard's authStatus observable!");
      this.authStatusObject = authObject;
    });
  }

  updateUser() {
    //console.log("At student-board updateUser method now");
    //console.log(this.beneficiariesSelected);


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


    this.authService.updateBeneficiaries(this.beneficiariesSelected);
    this.openUpdateBeneficiariesSnackBar();
  }

  openUpdateBeneficiariesSnackBar() {
    this._snackBar.openFromComponent(UpdateBeneficiariesComponent, {
      duration: 3 * 1000,
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
