import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
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
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [1, 2, 3].map((n) => `../../assets/sample-carousel-image-${n}.jpg`);

  highlightSub: Subscription;
  highlights: Highlight[];
  authStatusObject: any;
  isAuth: boolean = false;

  constructor(public homepageService: HomepageService, public highlightService: HighlightService, public authService: AuthService) {}

  ngOnInit() {
    this.highlightService.getHighlights();

    this.highlightSub = this.highlightService.getHighlightsUpdatedListener()
                          .subscribe((highlights: Highlight[]) => {
                            this.highlights = highlights;
                            console.log(highlights);
                            console.log("here")
                          });
    this.authStatusObject = this.authService.getAuthStatusObject;
    this.isAuth = this.authService.getIsAuth();

  }
  ngOnDestroy() {
    this.highlightSub.unsubscribe();
  }

  deleteHighlight(id: string) {
    this.highlightService.deleteHighlight(id);
    return true;
  }

  openPoster() {}
}
