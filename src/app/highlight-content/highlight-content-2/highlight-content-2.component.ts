import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Highlight } from "../../admin/highlight.model";
import { HighlightService } from "../../admin/highlight.service";

@Component({
  selector: "highlight-content-2",
  styleUrls: ["./highlight-content-2.component.css"],
  templateUrl: "./highlight-content-2.component.html",
})
export class HighlightContentComponent2 implements OnInit, OnDestroy {

  highlight: Highlight;
  highlightSub: Subscription;
  highlights: Highlight[];

  constructor(public highlightService: HighlightService, public router: Router) {
    
  }
  ngOnDestroy(): void {
    this.highlightSub.unsubscribe();
  }
  ngOnInit(): void {
    this.highlightService.getHighlights();

    this.highlightSub = this.highlightService.getHighlightsUpdatedListener()
                          .subscribe((highlights: Highlight[]) => {
                            console.log("here");
                            console.log(highlights);
                            this.highlights = highlights;
                            this.highlight = highlights[1];
                          });
  }



  getHighlight() {

  }

  goBack() {
    this.router.navigate(['/']);
  }




}
