import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
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
  `],
})
export class PostCreateComponent implements OnInit, OnDestroy {
  pendingApproval: boolean = false;
  public authStatusObject;

  constructor(public postsService: PostsService, private modalService: NgbModal, private authService: AuthService) {} //public activeModal: NgbActiveModal

  ngOnInit() {
    this.authStatusObject = this.authService.getAuthStatusObject();
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      id: null,
      orgName: this.authStatusObject.orgName,
      uen: this.authStatusObject.uen,
      POC: form.value.POC,
      phoneNumber: form.value.phoneNumber,
      email: form.value.email,
      title: form.value.title,
      content: form.value.content,
      skills: form.value.skills,

      startDate: form.value.startDate,
      endDate: form.value.endDate,
      hoursRequired: form.value.hoursRequired,

      beneficiaryInfo: form.value.beneficiaryInfo,
      approved: false,
      //imagePath: null,
      //creator: null,
    };
//    console.log("Post creation fired! onAddPost. post is:");
//    console.log(post);
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

  ngOnDestroy() {}

}
