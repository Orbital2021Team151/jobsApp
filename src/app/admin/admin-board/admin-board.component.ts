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
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css'],
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
export class AdminBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  private authStatusSub: Subscription;
  private authStatusObject;

  private postsNumber: number;
  private reportedPostsNumber: number;

  public hasRequest: Boolean;
  public hasReport: Boolean;
  postToBeDeleted: string;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject(); //another one that violates the async

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      this.hasRequest = false;

    });

    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        console.log(posts);

        if (this.authStatusObject.role === "Admin") {
          this.posts = posts;
        } else {
          this.posts = posts
            .filter(post => (post.orgName === this.authStatusObject.orgName && (post.uen === this.authStatusObject.uen)));
        }
        //console.log(this.posts);
        //console.log(this.authStatusObject);
        //this.posts = posts;

        //console.log("posts are: ");
        //console.log(this.posts);
        if (this.posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
          this.postsNumber = this.posts.filter(post => !post.approved).length;
        }

        if (this.posts.filter(post => post.reports.length > 0).length > 0) {
          this.hasReport = true;
          this.reportedPostsNumber = this.posts.filter(post => post.reports.length > 0).length;
        }
      });

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
    this.postsNumber--;
    if (this.postsNumber === 0) {
      this.hasRequest = false;
    }

    if (this.reportedPostsNumber === 0) {
      this.hasReport = false;
    }
  }

  onDeleteReportedPost(postId: string) {
    this.postsService.deletePost(postId);
    this.reportedPostsNumber--;

    if (this.reportedPostsNumber === 0) {
      this.hasReport = false;
    }
  }


  onPublish(postId: string, publishContent) {
    this.postsService.publishPost(postId);
    //console.log(this.posts);
    this.modalService.open(publishContent, { scrollable: true });
    this.postsNumber--;
    if (this.postsNumber === 0) {
      this.hasRequest = false;
    }
  }

  onMoreInfo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onChangePassword(form: NgForm) {
    this.authService.changePassword(form.value.currentPassword, form.value.newPassword);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
