import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "src/app/auth/auth.service";
import { PostsService } from "src/app/posts/post.service";


@Component({
  selector: "student-change-password",
  templateUrl: './student-board-change-password.component.html',
  styleUrls: ['./student-board-change-password.component.css'],
})
export class StudentBoardChangePasswordComponent {
  hideCurrentPassword = true;
  hideNewPassword = true;
  requestedNewPassword = false;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}


  onChangePassword(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
    this.authService.getChangedPasswordListener().subscribe(res => {
      this.requestedNewPassword = res;
    });
  }
}
