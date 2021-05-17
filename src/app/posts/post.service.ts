import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";



@Injectable({providedIn: 'root'})
export class PostsService {
  private postsRequests: Post[] = [];
  private postsRequestsUpdated = new Subject<Post[]>();

  private postsPublished: Post[] = [];
  private postsPublishedUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts') //unsubscription handled by angular's http client
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            orgName: post.orgName,
            uen: post.uen,
            studentGroupName: post.studentGroupName,
            POC: post.POC,
            phoneNumber: post.phoneNumber,
            email: post.email,
            title: post.title,
            content: post.content,
            skills: post.skills,
            startDate: post.startDate,
            endDate: post.endDate,
            hoursRequired: post.hoursRequired,
            beneficiaryInfo: post.beneficiaryInfo,
          };
        });
      })) //to change from _id from database to id
      .subscribe((mappedPosts) => {
        this.postsRequests = mappedPosts;
        this.postsRequestsUpdated.next([...this.postsRequests]);
      });
  }

  getPostsPublishedUpdatedListener() {
    return this.postsPublishedUpdated.asObservable();
  }

  getPostsRequestsUpdatedListener() {
    return this.postsRequestsUpdated.asObservable();
  }

  requestPost(post: Post) {
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData => {
        const postId = responseData.postId;
        post.id = postId;
        this.postsRequests.push(post);
        this.postsRequestsUpdated.next([...this.postsRequests]);

        //TODO: should add some prompt here to tell user their post has successfully been sent,
        //pending confirmation from admin

        this.router.navigate(['/dashboard']);
      })
      );
  }

  publishPost(postId: string) {
    this.http.get('http://localhost:3000/api/posts' + "/" + postId)
      .subscribe(() => {
        console.log("Post successfully published!");
        let publishPost;
        try {
          publishPost = this.postsRequests.filter(post => post.id === postId)[0];
          this.postsPublished.push(publishPost);
          this.postsPublishedUpdated.next([...this.postsPublished]);
        } catch (e) {
          console.log("Try-Catch block at publishPost failed!");
          console.log(e);
          return;
        }
        //this.posts = this.posts.filter(post => post.id !== postId);
        //this.postsUpdated.next([...this.posts]);
      });
  }

  deletePublishedPost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts' + "/" + postId)
      .subscribe(() => {
        console.log("Post successfully deleted!");
        this.postsPublished = this.postsPublished.filter(post => post.id !== postId);
        this.postsPublishedUpdated.next([...this.postsPublished]);
      });
  }

  deleteRequestPost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts' + "/" + postId)
      .subscribe(() => {
        console.log("Post successfully deleted!");
        this.postsRequests = this.postsRequests.filter(post => post.id !== postId);
        this.postsRequestsUpdated.next([...this.postsRequests]);
      });
  }
}
