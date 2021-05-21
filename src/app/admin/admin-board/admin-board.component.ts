import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "../../auth/auth.service";

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
  private authStatusObject;
  hasRequest: Boolean;

  role: string;
  orgName: string;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject();
    this.hasRequest = false;
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
//        console.log("posts are: ");
//        console.log(this.posts);
        if (posts.filter(post => !post.approved).length > 0) {
          this.hasRequest = true;
        }

      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onPublish(postId: string, publishContent) {
    this.postsService.publishPost(postId);
    this.modalService.open(publishContent, { scrollable: true });
  }

  onMoreInfo(content) {
    console.log(this.authStatusObject);
    console.log(this.authStatusObject.role);
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
