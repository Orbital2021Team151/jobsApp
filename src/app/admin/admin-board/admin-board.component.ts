import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";

@Component({
  selector: "app-admin-board",
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css'],
})
export class AdminBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;
  hasRequest: Boolean;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.hasRequest = false;
//    console.log("at ADMIN page now!");
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
//        console.log("posts are: ");
//        console.log(this.posts);
        if (posts.filter(post => !post.approved).length > 0 && posts.length !== 0) {
          this.hasRequest = true;
        }
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onPublish(postId: string) {
    this.postsService.publishPost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
