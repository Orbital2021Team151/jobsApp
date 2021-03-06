import { stringify } from "@angular/compiler/src/util";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserData } from "../admin/admin-board/user-model";
import { Highlight } from "../admin/highlight.model";
import { HighlightService } from "../admin/highlight.service";
import { AuthService } from "../auth/auth.service";
import { HomepageService } from "./homepage.service";



@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageComponent implements OnInit, OnDestroy {

  highlightSub: Subscription;
  highlights: Highlight[] = [];
  authStatusObject: any;
  isAuth: boolean = false;
  pageNumber: string = "-1";

  userSub: Subscription;
  user: any;

  constructor(
    public homepageService: HomepageService,
    public highlightService: HighlightService,
    public authService: AuthService,
    public router: Router) {}

  ngOnInit() {
    this.highlightService.getHighlights();

    this.highlightSub = this.highlightService.getHighlightsUpdatedListener()
                          .subscribe((highlights: Highlight[]) => {
                            this.highlights = highlights;
                            // console.log(highlights);
                            // console.log(this.highlights[0].id);
                          });
    this.user = this.authService.getAuthStatusObject();
    this.isAuth = this.authService.getIsAuth();

    this.userSub = this.authService.getAuthStatusListener().subscribe(userData => {
      this.user = userData;
    })
  }
  ngOnDestroy() {
    this.highlightSub.unsubscribe();
  }

  deleteHighlight(id: string) {
    this.highlightService.deleteHighlight(id);
    return true;
  }

  openPoster() {}

  openContent(id: string) {
    console.log(this.highlights[0].id);
    for (let i = 0; i < 3; i++) {
      if (this.highlights[i].id === id) {
        this.pageNumber = (i + 1).toString();
        break;
      }
    }
    this.router.navigate(['/highlightContent' + this.pageNumber]);
  }
}
