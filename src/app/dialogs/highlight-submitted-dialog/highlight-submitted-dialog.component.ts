import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'highlight-submitted-dialog',
  templateUrl: './highlight-submitted-dialog.component.html',
})
export class HighlightSubmittedDialog {
  constructor(private router: Router) {}

  redirect() {
    
  }
}
