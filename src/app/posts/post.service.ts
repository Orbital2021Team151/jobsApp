import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";


const localhost = "http://localhost:3000/";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http.get<{message: string, posts: any}>('api/posts') //unsubscription handled by angular's http client
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
    this.http.post<{message: string, postId: string}>('api/posts', post)
      .subscribe((responseData => {
        const postId = responseData.postId;
        post.id = postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);

        //TODO: should add some prompt here to tell user their post has successfully been sent,
        //pending confirmation from admin

        //this.router.navigate(['/feed']);
      })
      );
  }

  publishPost(postId: string) {
    console.log("publish Post request sent!");

    const postToBePublished = this.getPost(postId);

    this.http.put('api/posts/publish' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully published!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
    }

  deletePost(postId: string) {
    this.http.delete('api/posts' + "/" + postId)
      .subscribe(() => {
        console.log("Post successfully deleted!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }


  //what is this for?
  expandPost(postId: string) {
    const postToBeExpanded = this.getPost(postId);

  }





  applyPost(postId: string, student: {
    email: string,
    contact: number,
    content: string,
  })

    {

    console.log("apply Post request sent! postID is: ");
    console.log(postId);
    console.log("student object is: ");
    console.log(student);

    const postToBePublished = this.getPost(postId);
    console.log("Post to be published back is: ");
    console.log(postToBePublished);
    let appliedBefore = false;

    for (let i = 0; i < postToBePublished.students.length; i++) {
      if (postToBePublished.students[i].email === student.email) {
        //throw an error?
        appliedBefore = true;
        console.log("You applied to this post before!");
      }
    }
    if (!appliedBefore) {
      postToBePublished.students.push(student);
      this.http.put('api/posts/apply' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {

        console.log("apply post successful!");
        //this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
      return appliedBefore;
    } else {
      return appliedBefore;
    }
  }




}
