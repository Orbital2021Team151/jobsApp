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
export class OrgBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;
  hideCurrentPassword = true;
  hideNewPassword = true;

  private postsNumber: number;
  private appliedPostsNumber: number;

  public hasRequest: Boolean;
  hasApplication: Boolean;
  postToBeDeleted: string;
  requestedNewPassword = false;

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
        console.log("organisation dashboard's postService observable!");

        this.posts = posts
            .filter(post => (post.orgName === this.authStatusObject.orgName && (post.uen === this.authStatusObject.uen)));

        if (this.posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        }

        if (this.posts.filter(post => post.students.length > 0).length > 0) {
          this.hasApplication = true;
          this.appliedPostsNumber = this.posts.filter(post => post.students.length > 0).length;
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
