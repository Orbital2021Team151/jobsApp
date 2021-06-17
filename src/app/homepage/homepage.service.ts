import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

import { Post } from "../posts/post.model";


const BACKEND_URL = environment.apiUrl; //change this in the environment folder

@Injectable({providedIn: 'root'})
export class HomepageService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getHomepageContent() {}


  /*
  getPosts() {
    this.http.get<{message: string, posts: any}>
    (BACKEND_URL + 'api/posts')
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            orgName: post.orgName,
            uen: post.uen,
            POC: post.POC,
            phoneNumber: post.phoneNumber,
            email: post.email,
            title: post.title,
            content: post.content,
            skills: post.skills,

            startDate: post.startDate,
            endDate: post.endDate,
            hoursRequired: post.hoursRequired,

            beneficiaries: post.beneficiaries,
            students: post.students,
            reports: post.reports,

            approved: post.approved,
            creator: post.creator,
          };
        });
      })) //to change from _id from database to id
      .subscribe((mappedPosts) => {
        //console.log(mappedPosts);
        this.posts = mappedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPost(postId: string) {
    return {...this.posts.find(post => post.id === postId)};
  }


  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.http.post<{message: string, postId: string}>
      (BACKEND_URL + 'api/posts', post)
      .subscribe(responseData => {
        const postId = responseData.postId;
        post.id = postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    });
  }

  publishPost(postId: string) {
    const postToBePublished = this.getPost(postId);

    this.http
      .put(BACKEND_URL + 'api/posts/publish' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully published!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);



      });
  }

  deletePost(postId: string) {
    this.http
      .delete(BACKEND_URL + 'api/posts' + "/" + postId)
      .subscribe(() => {
        console.log("Post successfully deleted!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
    });
  }

  applyPost(postId: string, student: {email: string, contact: number, content: string}) {

    const postToBePublished = this.getPost(postId);

    postToBePublished.students.push(student);

    this.http
      .put(BACKEND_URL + 'api/posts/apply' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {

        console.log("apply post successful!");
        //this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
    });
  }

  reportPost(postId: string, student: {email: string, contact: number, content: string}) {

    const postToBePublished = this.getPost(postId);

    postToBePublished.reports.push(student);

    let post_student_pair = {post: postToBePublished, student: student};

    this.http
      .put(BACKEND_URL + 'api/posts/report' + "/" + postToBePublished.id, post_student_pair)
      .subscribe((response) => {

        console.log("post reported successfully!");
        this.postsUpdated.next([...this.posts]);
    });
  }
  */

}
