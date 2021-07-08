import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Highlight } from "../highlight.model";
import { HighlightService } from "../highlight.service";

@Component({
  selector: "highlight-create",
  templateUrl: './highlight-create.component.html',
  styleUrls: ['./highlight-create.component.css'],
})

export class HighlightCreateComponent implements OnInit, OnDestroy {

  public imagePreview: string;

  public form: FormGroup;
  public titleControl = new FormControl(null, [Validators.required]);
  public summaryControl = new FormControl(null, [Validators.required]);
  public imageControl = new FormControl(null, [Validators.required]);
  public contentControl = new FormControl(null, [Validators.required]);

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private highlightService: HighlightService,
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
      return;
    }

    const highlight: Highlight = {
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

