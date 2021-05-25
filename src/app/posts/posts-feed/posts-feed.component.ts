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
  filteredPosts: Post[] = [];

  hasApproved: boolean;
  userIsAuthenticated = false;
  userIsAdmin: boolean;

  private authStatusObject: {auth: boolean;
    role: string;
    orgName: string;
    uen: string;
  };

  private postSub: Subscription;
  private authStatusSub: Subscription;

  beneficiaries: string[] = [
    "Animal Welfare",
    "Arts & Heritage",
    "Children & Youth",
    "Community",
    "Disability",
    "Education",
    "Elderly",
    "Environment",
    "Families",
    "Health",
    "Humanitarian",
    "Social Service",
    "Sports",
    "Women & Girls",
  ];
  beneficiariesSelected: string[] = [];

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.hasApproved = false;
    this.postsService.getPosts();

    this.authStatusObject = this.authService.getAuthStatusObject();

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.filteredPosts = posts;
        if (posts.filter((post) => post.approved).length > 0) {
          this.hasApproved = true;
        }
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.userIsAdmin = this.authStatusObject.role === 'Admin';
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onMoreInfo(content) {
//    console.log(this.authStatusObject);
    this.modalService.open(content, { size: 'lg' });
  }

  submitFilter() {
    this.filteredPosts = this.posts.filter(post => {
      for (var interestBeneficiary of post.beneficiaries) {
        if (this.beneficiariesSelected.includes(interestBeneficiary)) {
          return true;
        }
      }
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
