import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { FieldsNotCompleteDialog } from "src/app/dialogs/fields-not-complete-dialog/fields-not-complete-dialog.component";
import { HighlightSubmittedDialog } from "src/app/dialogs/highlight-submitted-dialog/highlight-submitted-dialog.component";
import { ComponentCanDeactivate } from "src/app/posts/posts-create-admin/can-deactivate.component";
import { Highlight } from "../highlight.model";
import { HighlightService } from "../highlight.service";

@Component({
  selector: "highlight-create",
  templateUrl: './highlight-create.component.html',
  styleUrls: ['./highlight-create.component.css'],
})

export class HighlightCreateComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  canDeactivate() {
    console.log("DIRTY GUARD FIRED! You should not be able to switch pages so easily kiddo");
    return this.form.dirty;
  }

  public imagePreview: string;
  public submitted: boolean = false;

  public form: FormGroup;
  public titleControl = new FormControl(null, [Validators.required]);
  public summaryControl = new FormControl(null, [Validators.required]);
  public imageControl = new FormControl(null, [Validators.required]);
  public contentControl = new FormControl(null, [Validators.required]);

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private highlightService: HighlightService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.form = new FormGroup({
      title: this.titleControl,
      summary: this.summaryControl,
      content: this.contentControl,
      image: this.imageControl,
    })
  }

  authStatusSub: Subscription;
  authStatusObject;
  ngOnInit(): void {

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      //console.log("At create page");
      //console.log(authObject);
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();

  }



  publishHighlight() {
    if (this.form.invalid) {
      this.dialog.open(FieldsNotCompleteDialog);
      return;
    }

    const highlight: Highlight = {
      id: null,
      title: this.form.value.title,
      summary: this.form.value.summary,
      content: this.form.value.content,
      image: this.form.value.image,
      imagePath: null,
    }
    console.log("this is the highlight object in highlight-create");
    console.log(highlight);

    this.highlightService.addHighlight(highlight);

    this.form.reset();
    this.modalService.dismissAll();
    this.imagePreview = '';
    this.submitted = true;
    this.dialog.open(HighlightSubmittedDialog);
    setTimeout(() => {
      this.router.navigate(['/'])
    }
    , 3000);
  }

  closeNotification() {
    this.submitted = false;
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    console.log(file);
    // console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

