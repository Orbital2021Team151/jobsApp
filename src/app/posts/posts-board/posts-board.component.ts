import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from "../post.service";

@Component({
  selector: "app-post-board",
  templateUrl: './posts-board.component.html',
  styleUrls: ['./posts-board.component.css'],
})
export class PostBoardComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  hasApproved: boolean;
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.hasApproved = false;
//    console.log("AT BOARD PAGE NOW!");
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
//        console.log(this.posts);
        if (posts.filter(post => post.approved).length > 0) {
          this.hasApproved = true;
        }
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
