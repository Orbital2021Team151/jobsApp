import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'forget-password-dialog',
  templateUrl: './forget-password-dialog.component.html',
})
export class ForgetPasswordDialog {
  constructor(private router: Router) {}

  redirect() {
    
  }
}
