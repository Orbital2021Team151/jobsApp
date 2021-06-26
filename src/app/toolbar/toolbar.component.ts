import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Post } from "../posts/post.model";
import { PostsService } from "../posts/post.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  private postSub: Subscription;
  public posts: Post[] = [];
  userIsAuthenticated = false;
  role: string;
  orgName: string;
  public authStatusObject;

  constructor(private authService: AuthService, public postsService: PostsService) {};

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
    } else {
      localStorage.clear();
    }


    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(authObject => {
      //console.log("Toolbar's auth sub observable working!");
      console.log("Retrieved user in toolbar is: ");
      console.log(authObject);
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
