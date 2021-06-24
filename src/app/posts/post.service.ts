import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

import { Post } from "./post.model";


const BACKEND_URL = environment.apiUrl; //change this in the environment folder

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

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
            opportunity: post.opportunity,
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
        console.log(post.opportunity);
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

  downloadPosts(startDate: Date, endDate: Date) {

    this.http.get<{message: string, data: any[]}>(BACKEND_URL + 'api/posts/download')
    .subscribe(response => {
      /*
      console.log("Post service's download CSV function called. The response is: ");
      console.log(response);
      console.log(response.data);
      console.log("The start date is: ");
      console.log(startDate);
      console.log("The end date is: ");
      console.log(endDate);
      */

      let pipe = new DatePipe('en-US'); // Use your own locale
      let dataArray = response.data;
      if (startDate) {
        console.log("Start Date's clause activated!");
        dataArray = dataArray.filter(obj => {
          return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime()) || (new Date(obj.endDate).getTime() >= new Date(startDate).getTime());
        });
      }

      if (endDate) {
        console.log("end Date's clause activated!");
        dataArray = dataArray.filter(obj => {
          return (new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) || (new Date(obj.startDate).getTime() <= new Date(endDate).getTime());
        });
      }

      dataArray = dataArray.map(obj => {
        return {
          beneficiaries: obj.beneficiaries,
          orgName: obj.orgName,
          uen: obj.uen,
          point_of_contact: obj.POC,
          phoneNumber: obj.phoneNumber,
          email: obj.email,
          title: obj.title,
          content: obj.content,
          opportunity: obj.opportunity,
          skills: obj.skills,
          startDate: pipe.transform(obj.startDate, 'longDate'),
          endDate: pipe.transform(obj.endDate, 'longDate'),
          commitment: obj.hoursRequired,
          studentsInterested: obj.students,
          reports: obj.reports,
          approved: obj.approved,
        };
      });

      const Json2csvParser = require("json2csv").Parser;
      const json2csvParser = new Json2csvParser({ header: true});
      const csvData = json2csvParser.parse(dataArray);

      let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", "all posts" + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);

    });
  }


  /*
  checkEmailExists(email: string) {

    const bodyObject = {email: email};

    this.http
    .post(BACKEND_URL + 'api/posts/check', bodyObject)
    .subscribe((response) => {
      console.log("Hi from postService check email exists");
      console.log(response);
    });
  }

  checkVerifyEmailExistsCredits() {
    this.http.get('https://app.verify-email.org/api/v1/Y9AYEP6RPc0C440d68rjzGIxisRa8Za2EHVdznQvqhOQlLqWRH/credits')
    .subscribe(response => {
      console.log("Checking verify-email.org amount of credits left");
      console.log(response);
    })
  }
  */

}
