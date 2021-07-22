import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'post-rejected-dialog',
  templateUrl: './post-rejected-dialog.component.html',
})
export class PostRejectedDialog {
  constructor(private router: Router) {}

  redirect() {
    // this.router.navigate(['/organisation']);
  }
}
