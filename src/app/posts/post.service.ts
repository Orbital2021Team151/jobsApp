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

            location: post.location,
            beneficiaries: post.beneficiaries,

            approved: post.approved,
            creator: post.creator,
            creationDate: post.creationDate,
            publishDate: post.publishDate,

            rejected: post.rejected,
            reason: post.reason,
            completed: post.completed,

            students: post.students,
            reports: post.reports,

            imagePath: post.imagePath,
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

    //Because JSON cannot pass files.
    const postData = new FormData();

    postData.append("id", post.id),
    postData.append("orgName", post.orgName);
    postData.append("uen", post.uen);
    postData.append("POC", post.POC);
    postData.append("phoneNumber", post.phoneNumber);
    postData.append("email", post.email);
    postData.append("title", post.title);
    postData.append("opportunity", post.opportunity);

    postData.append("content", post.content);
    postData.append("skills", JSON.stringify(post.skills));

    postData.append("startDate", JSON.stringify(post.startDate));
    postData.append("endDate", JSON.stringify(post.endDate));
    postData.append("hoursRequired", post.hoursRequired);

    postData.append("location", JSON.stringify(post.location));
    postData.append("beneficiaries", post.beneficiaries);

    postData.append("approved", JSON.stringify(post.approved));
    postData.append("creationDate", JSON.stringify(post.creationDate));
    postData.append("publishDate", JSON.stringify(post.publishDate));
    postData.append("creator", post.creator);

    postData.append("rejected", JSON.stringify(post.rejected));
    postData.append("reason", JSON.stringify(post.reason));
    postData.append("completed", JSON.stringify(post.completed));


    postData.append("students", JSON.stringify(post.students));
    postData.append("reports", JSON.stringify(post.reports));
    postData.append("image", post.image, post.title);

    //console.log("At front end, postService is tring to send this over via addPost: ");
    //console.log(postData);

    this.http.post<{message: string, postId: string}>
      (BACKEND_URL + 'api/posts', postData)
      .subscribe(responseData => {

        const postId = responseData.postId;
        post.id = postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        console.log(post.opportunity);
    });
  }

  addPostNoImage(post: Post) {

    //console.log("At front end, postService is tring to send this over via addPostNoImage: ");
    //console.log(post);

    this.http.post<{message: string, postId: string}>
      (BACKEND_URL + 'api/posts/requestPostNoImage', post)
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
    postToBePublished.publishDate = new Date(Date.now());

    console.log("At postsService now. Post to be published is: ");
    console.log(postToBePublished);

    this.http
      .put(BACKEND_URL + 'api/posts/publish' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully published!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }

  rejectPost(postId: string) {
    const postToBeRejected = this.getPost(postId);

    //console.log("At postsService now. Post to be rejected is: ");
    //console.log(postToBeRejected);

    this.http
      .put(BACKEND_URL + 'api/posts/reject' + "/" + postToBeRejected.id, postToBeRejected)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully rejected!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }

  completePost(postId: string) {
    const postToBeCompleted = this.getPost(postId);

    //console.log("At postsService now. Post to be rejected is: ");
    //console.log(postToBeRejected);

    this.http
      .put(BACKEND_URL + 'api/posts/complete' + "/" + postToBeCompleted.id, postToBeCompleted)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully completed! (As in the request has been fulfilled)");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http
      .delete(BACKEND_URL + 'api/posts' + "/" + postId)
      .subscribe((response) => {

        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
    });
  }

  applyPost(postId: string, student: {email: string, contact: number, content: string, applicationUser: string}) {

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


      if (startDate && endDate) {
        console.log("Both Start and End dates are present!");

        dataArray = dataArray.filter(obj => {
          return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime() && new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //within search range
          || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()) //endDate of job is after start date of search range
          || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //startDate of job is before end date of search range
        });

      } else if (startDate) {
        console.log("Start Date's clause activated!");
        dataArray = dataArray.filter(obj => {
          return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime()) //start date of job is after start date of range
          || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()); //end date of job is after start date of range
        });
      } else if (endDate) {
        console.log("end Date's clause activated!");
        dataArray = dataArray.filter(obj => {
          return (new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //end date of job is before end date of range
          || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //start date of job is before end date of range
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

}
