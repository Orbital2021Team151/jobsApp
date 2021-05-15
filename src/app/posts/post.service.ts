import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";


@Injectable({providedIn: 'root'})
export class PostsService {
  private postsList: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.postsList];
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {

  }
}