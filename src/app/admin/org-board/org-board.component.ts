import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-org-board",
  templateUrl: './org-board.component.html',
  styleUrls: ['./org-board.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class OrgBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  approvedPosts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;
  hideCurrentPassword = true;
  hideNewPassword = true;

  private postsNumber: number;
  private appliedPostsNumber: number;

  public hasNoApprovedPosts: boolean = null;
  public hasRequest: Boolean = null;
  public hasApplication: Boolean = null;
  postToBeDeleted: string;
  requestedNewPassword = false;

  //for the navbar
  active: string = "changePassword";

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject(); //another one that violates the async

    /*
     * Probably do not need this because there are no changes to authStatusObject once user is logged in.
     * Might have to be revised in the future for chat function.
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      console.log("organisation dashboard's authStatus observable!");
      this.authStatusObject = authObject;
      this.hasRequest = false;

    });
    */

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        //console.log(posts);
        //console.log("organisation dashboard's postService observable!");

        this.posts = posts
            .filter(post => (post.orgName === this.authStatusObject.orgName && (post.uen === this.authStatusObject.uen)));
        this.approvedPosts = posts
            .filter(post => {
              return post.email === this.authStatusObject.email;
            })

        if (this.approvedPosts.length === 0) {
          this.hasNoApprovedPosts = true;
        }

        if (this.posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        } else {
          this.hasRequest = false;
        }

        if (this.posts.filter(post => post.students.length > 0).length > 0) {
          this.hasApplication = true;
          this.appliedPostsNumber = this.posts.filter(post => post.students.length > 0).length;
        } else {
          this.hasApplication = false;
        }
      });

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
    this.postsNumber--;
    if (this.postsNumber === 0) {
      this.hasRequest = false;
    }

    if (this.appliedPostsNumber === 0) {
      this.hasApplication = false;
    }

    return true;
  }

  onDeletePrompt(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onDeleteAppliedPost(postId: string) {
    this.postsService.deletePost(postId);
    this.appliedPostsNumber--;

    if (this.appliedPostsNumber === 0) {
      this.hasApplication = false;
    }
  }

  onMoreInfo(content) {
    this.modalService.open(content, { size: 'lg' });
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
    this.postSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }

}
