import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'post-completed-dialog',
  templateUrl: './post-completed-dialog.component.html',
})
export class PostCompletedDialog {
  constructor(private router: Router) {}

  redirect() {
    // this.router.navigate(['/organisation']);
  }
}
