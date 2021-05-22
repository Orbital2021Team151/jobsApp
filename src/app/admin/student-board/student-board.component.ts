import { Component, Input, OnDestroy, OnInit, ViewEncapsulation  } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/post.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "src/app/auth/auth.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-admin-board",
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css'],
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
export class StudentBoardComponent implements OnInit, OnDestroy {

  interests: string[];
  private postSub: Subscription;
  hasRequest: Boolean;
  postToBeDeleted: string;
  private authStatusObject;

  constructor(public postsService: PostsService, private modalService: NgbModal, public authService: AuthService) {}

  ngOnInit() {
    this.authStatusObject = this.authService.getAuthStatusObject();
    //console.log(this.authStatusObject);
  }

  ngOnDestroy() {}

}
