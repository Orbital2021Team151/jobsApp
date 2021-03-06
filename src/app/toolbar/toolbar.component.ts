import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Post } from "../posts/post.model";
import { PostsService } from "../posts/post.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  private postSub: Subscription;
  public posts: Post[] = [];
  userIsAuthenticated = false;
  role: string;
  orgName: string;
  public authStatusObject;
  active = "changePassword"

  constructor(private authService: AuthService, public postsService: PostsService, public router: Router) {};

  onLogout() {
    this.authService.logout();
  }


  ngOnInit() {
    //this.userIsAuthenticated = this.authService.getIsAuth();
    //this.authService.autoAuthUser();

    if (localStorage.getItem('token')) {
      //console.log("This localStorage line is called!");
      this.userIsAuthenticated = true;
      this.authService.autoAuthUser();
      this.authStatusObject = this.authService.getAuthStatusObject();

      //console.log("At toolbar! AuthStatusObject is: ");
      //console.log(this.authStatusObject);
    } else {
      localStorage.clear();
      this.userIsAuthenticated = false;

    }


    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(authObject => {
      //console.log("Toolbar's auth sub observable working!");
      //console.log("Retrieved user in toolbar is: ");
      //console.log(authObject);
      this.userIsAuthenticated = authObject.auth;
      this.authStatusObject = authObject;
    });


    this.postSub = this.postsService.getPostsUpdatedListener().subscribe((posts: Post[]) => {
      //console.log("Toolbar's post sub observable working!");    ok working
      this.posts = posts;
    });

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.postSub.unsubscribe();
  }
}
