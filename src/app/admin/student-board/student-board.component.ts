import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-admin-board",
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `],
})
export class StudentBoardComponent implements OnInit, OnDestroy {

  beneficiariesSelected: string[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;

  hasRequest: Boolean;
  postToBeDeleted: string;
  hideCurrentPassword = true;
  hideNewPassword = true;
  requestedNewPassword = false;

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

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject();
    console.log(this.authStatusObject);

    for (var beneficiary of this.authStatusObject.beneficiaries) {
      this.beneficiariesSelected.push(beneficiary);
    }

    this.hasRequest = false;
    this.postsService.getPosts();

    /*
     * Probably do not need this because there are no changes to authStatusObject once user is logged in.
     * Might have to be revised in the future for chat function.

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      console.log("student dashboard's authStatus observable!");
      this.authStatusObject = authObject;
    });
    */
  }

  updateUser() {
    //console.log("At student-board updateUser method now");
    //console.log(this.beneficiariesSelected);
    this.authService.update(this.beneficiariesSelected);
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

  closeNotification() {
    this.requestedNewPassword = false;
  }

  ngOnDestroy() {
    //this.authStatusSub.unsubscribe();
  }

}
