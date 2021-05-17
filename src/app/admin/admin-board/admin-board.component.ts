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

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostsUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  onAccept(postId: string) {
    this.postsService.confirmPost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
