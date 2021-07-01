import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppliedBeforeDialog } from 'src/app/dialogs/applied-before-dialog/applied-before-dialog.component';
import { ReportedBeforeDialog } from 'src/app/dialogs/reported-before-dialog/reported-before-dialog.component';
import { ReportedPostNotificationDialog } from 'src/app/dialogs/reported-post-notification-dialog/reported-post-notification-dialog.component';
import { AppliedPostNotificationDialog } from 'src/app/dialogs/applied-post-notification-dialog/applied-post-notification-dialog.component';

@Component({
  selector: 'app-post-feed',
  templateUrl: './posts-feed.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./posts-feed.component.css'],
})
export class PostFeedComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  hasApproved: boolean = null;
  userIsAuthenticated = false;
  userRole: string;
  startDate: Date;
  endDate: Date;
  noFilteredPost: boolean = null;

  private authStatusObject: {
    auth: boolean;
    email: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
    verified: boolean;
  };

  private studentApplyObject: {
    email: string;
    contact: number;
    content: string;
    applicationUser: string;
  }

  private studentReportObject: {
    email: string;
    contact: number;
    content: string;
  }


  private postSub: Subscription;
  private authStatusSub: Subscription;

  beneficiaries: string[] = [
    'Animal Welfare',
    'Arts & Heritage',
    'Children & Youth',
    'Community',
    'Disability',
    'Education',
    'Elderly',
    'Environment',
    'Families',
    'Health',
    'Humanitarian',
    'Social Service',
    'Sports',
    'Women & Girls',
  ];
  beneficiariesSelected: string[] = [];
  keywords: string = "";

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.postsService.getPosts();

    this.authStatusObject = this.authService.getAuthStatusObject();
    this.userIsAuthenticated = this.authStatusObject.auth;
    this.userRole = this.authStatusObject.role;

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = [];
        this.filteredPosts = [];
        //console.log("Post Feed's observable!");

        //show latest requested posts at the top of the timeline
        for (var i = posts.length - 1; i >= 0; i--) {
          this.posts.push(posts[i]);
          this.filteredPosts.push(posts[i]);
        }

        if (posts.filter((post) => post.approved).length > 0) {
          this.hasApproved = true;
        } else {
          this.hasApproved = false;
        }

        //console.log("Posts are: ");
        //console.log(this.posts);
      });
  }

  onDeletePrompt(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
    return true;
  }

  onMoreInfo(content) {
    //console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  clearFilter() {
    this.beneficiariesSelected = [];
    this.keywords = "";
    this.startDate = null;
    this.endDate = null;
    this.submitFilter();
  }

  submitFilter() {

    /*
    let weirdText: string = "Ss!@#$%^&*(){}:\"<>~`"
    let lowerWeirdText = weirdText.toLowerCase();
    console.log(weirdText);
    console.log(lowerWeirdText);
    */

    if (this.beneficiariesSelected.length !== 0) {
      this.filteredPosts = this.posts.filter((post) => {
        for (var interestBeneficiary of post.beneficiaries) {
          if (this.beneficiariesSelected.includes(interestBeneficiary)) {
            return true;
          }
        }
      });
    } else {
      this.filteredPosts = [...this.posts];
      //console.log(this.filteredPosts);
    }

    if (this.startDate) {
      //console.log("There is a startDate!");
      this.filteredPosts = this.filteredPosts
        .filter((post) => {
          return ( new Date(post.startDate).getTime() >= new Date(this.startDate).getTime());
      });
    }

    if (this.endDate) {
      //console.log("There is an endDate!");
      this.filteredPosts = this.filteredPosts.filter(
        (post) =>
          new Date(post.endDate).getTime() <= new Date(this.endDate).getTime()
      );
    }
    //Need to cast new Date object over it again... KIV for future me. I have no idea why javascript does this (┛ಠ_ಠ)┛彡┻━┻

    if (this.keywords !== "") {
      this.filteredPosts = this.filteredPosts.filter(post => {
        return (this.KnuthMorrisPrattSearch(this.keywords, post.content) != -1) || (this.KnuthMorrisPrattSearch(this.keywords, post.title) != -1);
      });
    }

    if (this.filteredPosts.length === 0) {
      this.noFilteredPost = true;
    } else {
      this.noFilteredPost = false;
    }
  }

  //credits to https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
  KnuthMorrisPrattSearch(pattern: string, text: string) {

    // Immediate match
    if (pattern.length == 0) {
      return 0;
    }

    //convert them all to lowercase first.
    let lowerPattern: string = pattern.toLowerCase();
    let lowerText: string = text.toLowerCase();

    // Compute longest suffix-prefix table
    var lsp = [0]; // Base case
    for (var i = 1; i < pattern.length; i++) {
      var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
      while (j > 0 && lowerPattern.charAt(i) != lowerPattern.charAt(j))
        j = lsp[j - 1];
      if (lowerPattern.charAt(i) == lowerPattern.charAt(j))
        j++;
      lsp.push(j);
    }

    // Walk through text string
    var j = 0; // Number of chars matched in pattern
    for (var i = 0; i < text.length; i++) {
      while (j > 0 && lowerText.charAt(i) != lowerPattern.charAt(j))
        j = lsp[j - 1]; // Fall back in the pattern
      if (lowerText.charAt(i) == lowerPattern.charAt(j)) {
        j++; // Next char matched, increment position
        if (j == lowerPattern.length)
          return i - (j - 1);
      }
    }
    return -1; // Not found
  }

  onApply(postId: string, errorMessage: string, studentContent) {

    const currentPost = this.postsService.getPost(postId);
    if (currentPost.students.filter(student => student.email === this.authStatusObject.email).length > 0) {
      //this.modalService.open(errorMessage, { size: 'lg' });
      this.dialog.open(AppliedBeforeDialog);
      //console.log("YOU, NRIC RANK AND NAME, HEREBY DECLARE THAT. TODAY IS YOUR BOOKOUT DAY, BOOKOUT, BOOKOUT. TODAY IS UR BOOKOUT DAY, YOU APPLIED BEFORE. ");
      return;
    } else {
      //this.postsService.applyPost(postId, this.studentObject);
      this.modalService.open(studentContent, {});
      return;
    }
  }

  submitApplication(postId: string, appForm: NgForm) {

    //console.log(appForm.value);

    if (appForm.invalid) {
      return;
    }

    this.studentApplyObject = {
      email: this.authStatusObject.email,
      contact: appForm.value.contactNumber,
      content: appForm.value.message,
      applicationUser: appForm.value.user,
    };

    this.postsService.applyPost(postId, this.studentApplyObject);
    this.dialog.open(AppliedPostNotificationDialog);
    return true;
  }

  applyBefore(currentPost: Post) {
    //console.log("Apply before line fires");
    if (currentPost.students.filter(user => {user.email === this.authStatusObject.email}).length > 0) {
      return true;
    }
    return false;
  }


  onReport(postId: string, errorMessage: string, reportContent: any) {
    const currentPost = this.postsService.getPost(postId);

    if (currentPost.reports.filter(student => student.email === this.authStatusObject.email).length > 0) {
      //this.modalService.open(errorMessage, { size: 'lg' });
      this.dialog.open(ReportedBeforeDialog);
      //console.log("YOU REPORTED THIS POST BEFORE BEFORE.");
      return;
    } else {
      this.modalService.open(reportContent, {});
      return;
    }
  }

  submitReport(postId: string, reportForm: NgForm) {
    if (reportForm.invalid) {
      //console.log("Still need to fill in the form!");
      return;
    }
    this.studentReportObject = {
      email: this.authStatusObject.email,
      contact: reportForm.value.contactNumber,
      content: reportForm.value.message,
    };
    this.postsService.reportPost(postId, this.studentReportObject);
    this.dialog.open(ReportedPostNotificationDialog);
    return true;
  }



  reportBefore(currentPost: Post) {
    //console.log("reportBefore's line fires");
    if (currentPost.reports.filter(user => {user.email === this.authStatusObject.email}).length > 0) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
