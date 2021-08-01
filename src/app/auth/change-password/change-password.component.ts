import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordAlertComponent } from 'src/app/admin/snackbars/change-password-snackbar/change-password-snackbar.component';
import { PostsService } from 'src/app/posts/post.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'change-password',
    styleUrls: ['./change-password.component.css'],
    templateUrl: './change-password.component.html',
})

export class ChangePasswordComponent {
    public showCurrentPassword = false;
    public showNewPassword = false;

    /* Change Password FormGroup */
    public changePasswordForm: FormGroup;
    public currentPasswordControl = new FormControl(null);
    public newPasswordControl = new FormControl(null);
    public newPasswordConfirmControl = new FormControl(null);
    public showCurrentPasswordControl = new FormControl(false);
    public showNewPasswordControl = new FormControl(false);

    constructor(public postsService: PostsService,
        private modalService: NgbModal,
        public authService: AuthService,
        private _snackBar: MatSnackBar)

        {
        this.changePasswordForm = new FormGroup({
            currentPassword: this.currentPasswordControl,
            newPassword: this.newPasswordControl,
            newPasswordConfirm: this.newPasswordConfirmControl,
            showCurrentPassword: this.showCurrentPasswordControl,
            showNewPassword: this.showNewPasswordControl,
          });
    }

    openChangePasswordAlertSnackBar() {
        this._snackBar.openFromComponent(ChangePasswordAlertComponent, {
          duration: 3 * 1000,
        });
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


}
