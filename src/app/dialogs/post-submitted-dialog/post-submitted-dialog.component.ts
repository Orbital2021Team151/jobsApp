import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'post-submitted-dialog',
  templateUrl: './post-submitted-dialog.component.html',
})
export class PostSubmittedDialog {
  constructor(private router: Router) {}

  redirect() {
    // this.router.navigate(['/organisation']);
  }
}
