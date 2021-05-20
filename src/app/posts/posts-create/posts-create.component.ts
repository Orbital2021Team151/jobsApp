import {Component, ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
export class PostCreateComponent {
  pendingApproval: boolean = false;

  constructor(public postsService: PostsService, private modalService: NgbModal) {} //public activeModal: NgbActiveModal

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      id: null,
      orgName: form.value.orgName,
      uen: form.value.uen,
      studentGroupName: form.value.studentGroupName,
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

}
