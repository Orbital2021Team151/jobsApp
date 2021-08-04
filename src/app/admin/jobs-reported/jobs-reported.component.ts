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
import { PostPersonalReport } from "./post-personal-report.model";

@Component({
  selector: "app-jobs-reported",
  templateUrl: './jobs-reported.component.html',
  styleUrls: ['./jobs-reported.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class JobsReportedComponent implements OnInit, OnDestroy {

  private postSub: Subscription;
  private authStatusSub: Subscription;


  private authStatusObject;

  reportedPosts: PostPersonalReport[] = [];
  hasReport: boolean;


  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject();
    //console.log(this.authStatusObject);

    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);

        this.reportedPosts = posts
          .filter(post => !post.removed)
          .filter(post => {

            for (let i = 0; i < post.reports.length; i++) {
              if (post.reports[i].email === this.authStatusObject.email) {
                return true;
              }
            }
            return false;
          })
          .map(post => {

            let studentIndex = 0;
            for (let j = 0; j < post.reports.length; j++) {
              if (post.reports[j].email === this.authStatusObject.email) {
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
              report: post.reports[studentIndex],
            };
          });


        if (this.reportedPosts.length > 0) {
          this.hasReport = true;
        } else {
          this.hasReport = false;
        }
        //console.log("this.reportedPosts");
        //console.log(this.reportedPosts);
      });


    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      console.log("student dashboard's authStatus observable!");
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
