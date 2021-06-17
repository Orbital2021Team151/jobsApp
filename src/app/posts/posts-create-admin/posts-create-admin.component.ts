import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';


import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create-admin.component.html',
  styleUrls: ['./posts-create-admin.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class PostCreateAdminComponent implements OnInit, OnDestroy {
  pendingApproval: boolean = false;
  public authStatusObject;
  private authStatusSub: Subscription;
  private postServiceSub: Subscription;
  isLoading = true;
  beneficiaries: string[] = [
    "Animal Welfare",
    "Arts & Heritage",
    "Children & Youth",
    "Community",
    "Disability",
    "Education",
    "Elderly",
    "Environment",
    "Families",
    "Health",
    "Humanitarian",
    "Social Service",
    "Sports",
    "Women & Girls",
  ];
  beneficiariesSelected: string[] = [];
  termsAndConditions = false;
  pocEmail: string = "";



  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject(); //this is required to avoid the "Cannot read property 'orgName' of undefined" error. but it violates async


    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      //console.log("At create page");
      //console.log(authObject);
    });
  }

  onAddPost(form: NgForm) {
    //console.log(form.value);
    //console.log("Beneficiaries Selected: ");
    //console.log(this.beneficiariesSelected);
    //console.log("add post fired!");

    if (form.invalid) {
      console.log("Please fill up form first.");
      return;
    }



    const post: Post = {
      id: null,
      orgName: this.authStatusObject.orgName,
      uen: this.authStatusObject.uen,
      POC: form.value.POC,
      phoneNumber: form.value.phoneNumber,
      email: this.pocEmail,
      title: form.value.title,
      content: form.value.content,
      skills: form.value.skills,

      startDate: form.value.startDate,
      endDate: form.value.endDate,
      hoursRequired: form.value.hoursRequired,

      beneficiaries: this.beneficiariesSelected,

      approved: false,
      creator: null,

      students: [],
      reports: [],
      //imagePath: null,
      //creator: null,
    };
    //console.log("Post creation fired! onAddPost. post is:");
    //console.log(post);
    this.pendingApproval = true;
    this.postsService.addPost(post);
    this.modalService.dismissAll();
  }

  closeNotification() {
    this.pendingApproval = false;
  }

  openTermsAndConditions(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  checkEmailExists(form: NgForm) {
    if (this.pocEmail === "") {
      console.log("Needs an email!");
      return;
    }

    return this.postsService.checkEmailExists(form.value.email);

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
