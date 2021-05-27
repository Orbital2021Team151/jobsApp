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
  user: string;
  startDate: Date;
  endDate: Date;

  private authStatusObject: {
    auth: boolean;
    email: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
    verified: boolean;
  };

  private studentObject: {
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

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.hasApproved = false;
    this.postsService.getPosts();

    this.authStatusObject = this.authService.getAuthStatusObject();
    this.userIsAuthenticated = this.authStatusObject.auth;
    this.userIsAdmin = this.authStatusObject.role === 'Admin';
    this.user = this.authStatusObject.role;

    this.postSub = this.postsService
      .getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {

        console.log("Posts are: ");
        console.log(this.posts);

        this.posts = posts;
        this.filteredPosts = posts;
        if (posts.filter((post) => post.approved).length > 0) {
          this.hasApproved = true;
        }
      });


    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authObject) => {
        this.userIsAuthenticated = authObject.auth;
        this.userIsAdmin = authObject.role === 'Admin';
        this.authStatusObject = authObject;
      });

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onMoreInfo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onApply(postId: string, contact: number, content: string) {
    this.studentObject = {
      email: this.authStatusObject.email,
      contact: contact,
      content: content,
    };

    const currentPost = this.postsService.getPost(postId);
    if (currentPost.students.filter(student => student.email === this.authStatusObject.email).length > 0) {
      //TODO: insert some warning here.
      console.log("YOU, NRIC RANK AND NAME, HEREBY DECLARE THAT. TODAY IS YOUR BOOKOUT DAY, BOOKOUT, BOOKOUT. TODAY IS UR BOOKOUT DAY, YOU APPLIED BEFORE. ");
      return;
    } else {
      this.postsService.applyPost(postId, this.studentObject);
    }
  }

  submitFilter() {
    //console.log(this.startDate);
    //console.log(this.endDate);
    //console.log(this.beneficiariesSelected);
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
          return ( new Date(post.startDate).getTime() <= new Date(this.startDate).getTime());
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
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.postSub.unsubscribe();
  }
}
