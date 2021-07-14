import { Component, OnInit } from "@angular/core";
import { Highlight } from "../admin/highlight.model";
import { HighlightService } from "../admin/highlight.service";

@Component({
  selector: "highlight-content",
  styleUrls: ["./highlight-content.component.css"],
  templateUrl: "./highlight-content.component.html",
})
export class HighlightContentComponent {

  highlight: Highlight;

  constructor(public highlightService: HighlightService) {}

  getHighlight() {

  }




}
