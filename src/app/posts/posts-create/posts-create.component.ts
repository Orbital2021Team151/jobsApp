import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css'],
})
export class PostCreateComponent {

  constructor(public postsService: PostsService) {}

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
    console.log("Post creation fired! onAddPost. post is:");
    console.log(post);
    this.postsService.addPost(post);
  }
}
