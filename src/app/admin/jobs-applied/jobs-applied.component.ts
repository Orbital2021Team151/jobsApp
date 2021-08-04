import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
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
import { UpdateBeneficiariesComponent } from '../snackbars/update-beneficiaries-snackbar/update-beneficiaries-snackbar.component';
import { PostPersonalApplication } from './post-personal-application.model';

@Component({
  selector: 'app-jobs-applied',
  templateUrl: './jobs-applied.component.html',
  styleUrls: ['./jobs-applied.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class JobsAppliedComponent implements OnInit, OnDestroy {
  beneficiariesSelected: string[] = [];

  private postSub: Subscription;
  private authStatusSub: Subscription;

  private authStatusObject;
  appliedPosts: PostPersonalApplication[] = [];
  hasApplied: boolean;

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusObject = this.authService.getAuthStatusObject();
    this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);

        this.appliedPosts = posts
          .filter((post) => !post.removed)
          .filter((post) => {
            for (let i = 0; i < post.students.length; i++) {
              if (post.students[i].email === this.authStatusObject.email) {
                return true;
              }
            }
            return false;
          })
          .map((post) => {

            let studentIndex = 0;
            for (let j = 0; j < post.students.length; j++) {
              if (post.students[j].email === this.authStatusObject.email) {
                studentIndex = j;
                break;
              }
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
              imagePath: post.imagePath,
              student: post.students[studentIndex],
            };
          });
        //console.log("this.appliedPosts");
        //console.log(this.appliedPosts);

        if (this.appliedPosts.length > 0) {
          this.hasApplied = true;
        } else {
          this.hasApplied = false;
        }
      });

    //console.log("this.appliedPosts");
    //console.log(this.appliedPosts);
    //console.log(this.posts);

    /*
     * Probably do not need this because there are no changes to authStatusObject once user is logged in.
     * Might have to be revised in the future for chat function.
     */
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authObject) => {
        //console.log("student dashboard's authStatus observable!");
        this.authStatusObject = authObject;
      });
  }

  onMoreInfo(content) {
    //console.log("Checking this page's posts! ");
    //console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
