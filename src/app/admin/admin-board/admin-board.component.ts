import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";

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
  hasRequest: Boolean;
  postToBeDeleted: string;
  private authStatusObject;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.postsService.getPosts();
    this.authStatusObject = this.authService.getAuthStatusObject(); //another one that violates the async

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;

      this.hasRequest = false;

    });

    //this.authStatusObject = this.authService.getAuthStatusObject();

    //this.hasRequest = false;

    //this.postsService.getPosts();

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
        }
      });

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onPublish(postId: string, publishContent) {
    this.postsService.publishPost(postId);
    //console.log(this.posts);
    this.modalService.open(publishContent, { scrollable: true });
  }

  onMoreInfo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
