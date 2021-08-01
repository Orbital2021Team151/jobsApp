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
import { UserData } from './user-model';


@Component({
  selector: 'app-admin-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PermissionsComponent implements OnInit, OnDestroy, AfterViewInit {


  /* Filter Table */
  displayedColumns: string[] = ['name', 'email', 'accountStatus', 'menu'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  posts: Post[] = [];

  private usersSub: Subscription;
  public users: UserData[] = [];

  constructor(
    public authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.authService.getUsers();
    this.usersSub = this.authService.getUsersListener().subscribe(usersList => {
      this.users = usersList.map(user => {

        let userAccountStatus = '';
        if (user.ban) {
          userAccountStatus = 'Banned'
        } else if (!user.verified) {
          userAccountStatus = 'Unverified'
        } else if (user.admin) {
          userAccountStatus = 'Admin'
        } else {
          userAccountStatus = 'Normal User'
        }

        return {
          name: user.name,
          email: user.email,
          accountStatus: userAccountStatus,
          beneficiaries: user.beneficiaries
        };
      });
      this.dataSource = new MatTableDataSource(this.users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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


  blockUser(email: string) {
    //console.log("Block user function fired!");
    //console.log(email);
    this.authService.banUser(email);
  }

  unblockUser(email: string) {
    this.authService.unbanUser(email);
  }

  makeAdmin(email: string) {
    this.authService.makeAdmin(email);
  }

  removeAdmin(email: string) {
    this.authService.removeAdmin(email);
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
}
