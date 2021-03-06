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
  private csvDownloading = new Subject<boolean>();

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

            removed: post.removed,
            reason: post.reason,

            students: post.students,
            reports: post.reports,
            studentsAccepted: post.studentsAccepted,

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

  getCSVDownloadingListener() {
    return this.csvDownloading.asObservable();
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

    /*
    postData.append("removed", JSON.stringify(post.removed));
    postData.append("reason", JSON.stringify(post.reason));
    */

    postData.append("students", JSON.stringify(post.students));
    postData.append("reports", JSON.stringify(post.reports));
    postData.append("studentsAccepted", JSON.stringify(post.studentsAccepted));
    postData.append("image", post.image);

    //console.log("At front end, postService is tring to send this over via addPost: ");
    //console.log(postData);

    this.http.post<{message: string, postId: string, imagePath: string}>
      (BACKEND_URL + 'api/posts', postData)
      .subscribe(responseData => {

        const postId = responseData.postId;
        post.id = postId;
        post.imagePath = responseData.imagePath;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        //console.log(post.opportunity);
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
        //console.log(post.opportunity);
    });
  }

  publishPost(postId: string) {
    const postToBePublished = this.getPost(postId);
    postToBePublished.publishDate = new Date(Date.now());

    //console.log("At postsService now. Post to be published is: ");
    //console.log(postToBePublished);

    this.http
      .put(BACKEND_URL + 'api/posts/publish' + "/" + postToBePublished.id, postToBePublished)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully published!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }

  rejectPost(postId: string, reason: string) {
    const postToBeRejected = this.getPost(postId);

    if (reason) {
      postToBeRejected.reason = reason;
    }

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

  completePostMyPosts(postId: string, reason: string) {
    const postToBeCompleted = this.getPost(postId);

    if (reason) {
      postToBeCompleted.reason = reason;
    }
    //console.log("At postsService now. Post to be rejected is: ");
    //console.log(postToBeRejected);

    this.http
      .put<{message: string, removedStatus: string}>(BACKEND_URL + 'api/posts/complete' + "/" + postToBeCompleted.id, postToBeCompleted)
      .subscribe((response) => {
        //this.router.navigate(['/']);
        console.log("post successfully completed! (As in the request has been fulfilled)");
        //this.posts = this.posts.filter(post => post.id !== postId);
        this.posts = this.posts.map(post => {

          if (post.id === postId) {
            post.removed = response.removedStatus;
          }
          return post;
        })
        this.postsUpdated.next([...this.posts]);
      });
  }

  completePost(postId: string, reason: string) {
    const postToBeCompleted = this.getPost(postId);

    if (reason) {
      postToBeCompleted.reason = reason;
    }
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

  applyPost(postId: string, student: {name: string, email: string, contact: number, content: string, applicationUser: string}) {

    //console.log("Received id is: ");
    //console.log(postId);
    //console.log("Received student Object is: ");
    //console.log(student);



    const postToBePublished = this.getPost(postId);
    postToBePublished.students.push(student);

    //console.log("After pushing, it is: ");
    //console.log(postToBePublished);

    let post_student_pair = {post: postToBePublished, student: student};

    this.http
      .put(BACKEND_URL + 'api/posts/apply' + "/" + postToBePublished.id, post_student_pair)
      .subscribe((response) => {

        console.log("apply post successful!");
        //this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
    });
  }

  reportPost(postId: string, student: {name: string, email: string, contact: number, content: string}) {

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

  acceptStudent(postId: string, student: {name: string, email: string, contact: number, content: string}) {

    const postToAcceptStudent = this.getPost(postId);

    postToAcceptStudent.studentsAccepted.push(student.email);

    let post_studentEmail_pair = {post: postToAcceptStudent, student: student};

    this.http
      .put(BACKEND_URL + 'api/posts/accept' + "/" + postToAcceptStudent.id, post_studentEmail_pair)
      .subscribe((response) => {

        console.log("apply post successful!");
        //this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
    });
  }

  downloadPosts(startDate: Date, endDate: Date) {

    this.csvDownloading.next(true);

    this.http.get<{message: string, data: any[]}>(BACKEND_URL + 'api/posts/download')
    .subscribe(response => {

      //console.log("Post service's download CSV function called. The response is: ");
      //console.log(response.data);


      let pipe = new DatePipe('en-US'); // Use your own locale
      let dataArray = response.data;
      let extensionName = "all posts";


      if (startDate && endDate) {
        console.log("Both Start and End dates are present!");
        extensionName = startDate.toDateString() + " to " + endDate.toDateString();

        dataArray = dataArray.filter(obj => {
          return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime() && new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //within search range
          || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()) //endDate of job is after start date of search range
          || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //startDate of job is before end date of search range
        });

      } else if (startDate) {
        console.log("Start Date's clause activated!");
        extensionName = "posts starting from " + startDate.toDateString();

        dataArray = dataArray.filter(obj => {
          return (new Date(obj.startDate).getTime() >= new Date(startDate).getTime()) //start date of job is after start date of range
          || (new Date(obj.endDate).getTime() > new Date(startDate).getTime()); //end date of job is after start date of range
        });
      } else if (endDate) {
        console.log("end Date's clause activated!");
        extensionName = "posts until " + endDate.toDateString();

        dataArray = dataArray.filter(obj => {
          return (new Date(obj.endDate).getTime() <= new Date(endDate).getTime()) //end date of job is before end date of range
          || (new Date(obj.startDate).getTime() < new Date(endDate).getTime()); //start date of job is before end date of range
        });
      }

      dataArray = dataArray.map(obj => {

        let skillsString = "";
        for (let i = 0; i < obj.skills.length; i++) {
          skillsString += obj.skills[i]
          if (obj.skills.length - 1 > i) {
            skillsString += ","
          }
        }

        let studentsString = "";
        for (let j = 0; j < obj.studentsInterested.length; j++) {
          let currentStudent = obj.studentsInterested[j];
          let studentName = "Name: " + currentStudent["name"];
          let studentEmail = "Email: " + currentStudent["email"];
          let studentContact = "Contact Number: " + currentStudent["contact"];
          let studentContent = "Report: " + currentStudent["content"];
          let studentType = "Applicant: " + currentStudent["applicationUser"];

          let studentStringObject = studentName + "\n" + studentEmail + "\n" + studentContact + "\n" + studentContent + "\n" + studentType + "\n\n";
          studentsString += studentStringObject;
        }

        let reportsString = "";
        for (let k = 0; k < obj.reports.length; k++) {
          let currentReport = obj.reports[k];
          let reportName = "Name: " + currentReport["name"];
          let reportEmail = "Email: " + currentReport["email"];
          let reportContact = "Contact Number: " + currentReport["contact"];
          let reportContent = "Report: " + currentReport["content"];
          let reportStringObject = reportName + "\n" + reportEmail + "\n" + reportContact + "\n" + reportContent + "\n\n";
          reportsString += reportStringObject;
        }

        return {
          location: obj.location,
          beneficiaries: obj.beneficiaries,
          orgName: obj.orgName,
          uen: obj.uen,
          point_of_contact: obj.POC,
          phoneNumber: obj.phoneNumber,
          email: obj.email,
          title: obj.title,
          content: obj.content,
          opportunity: obj.opportunity,
          skills: skillsString,
          startDate: pipe.transform(obj.startDate, 'longDate'),
          endDate: pipe.transform(obj.endDate, 'longDate'),
          commitment: obj.commitment,
          studentsInterested: studentsString, //was originally obj.studentsInterested
          reports: reportsString, //was originally obj.reports
          approved: obj.approved,
          removed: obj.removed,
          reason: obj.reason,
        };
      });

      const Json2csvParser = require("json2csv").Parser;
      const json2csvParser = new Json2csvParser({ header: true});
      const csvData = json2csvParser.parse(dataArray);

      //retrieve posts from db
      let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }

        //downloading starts here
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", "history - " + extensionName + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);


        this.csvDownloading.next(false);

    });
  }

}
