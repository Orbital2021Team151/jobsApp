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
  //need to remove subscription later to prevent memory leak

  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    //this.postsService.getPosts();
    //TODO:this part needs to be changed because getPosts is for admin
    this.postSub = this.postsService.getPostsPublishedUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePublishedPost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
