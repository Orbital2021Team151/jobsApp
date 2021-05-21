import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './posts-feed.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./posts-feed.component.css'],
  styles: [
    `
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
    `,
  ],
})
export class PostFeedComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  hasApproved: boolean;
  userIsAuthenticated = false;

  private authObject: {auth: boolean;
    role: string;
    orgName: string;
    uen: string;
};

  private postSub: Subscription;

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.hasApproved = false;
    this.postsService.getPosts();

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        if (posts.filter((post) => post.approved).length > 0) {
          this.hasApproved = true;
        }
      });

      this.userIsAuthenticated = this.authService.getIsAuth();

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onMoreInfo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
