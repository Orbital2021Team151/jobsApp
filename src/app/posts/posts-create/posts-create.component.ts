import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css'],
})
export class PostCreateComponent {
   orgName: String;

  onAddPost(postInput: HTMLTextAreaElement) {
    alert('Job post added!');
  }
}
