import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "highlight-create",
  templateUrl: './highlight-create.component.html',
  styleUrls: ['./highlight-create.component.css'],
})

export class HighlightCreateComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
  ) {}

  authStatusSub: Subscription;
  authStatusObject;
  ngOnInit(): void {
    this.authStatusObject = this.authService.getAuthStatusObject();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  public imagePreview: string;

  public form: FormGroup;
  public titleControl = new FormControl(null, [Validators.required]);
  public summaryControl = new FormControl(null, [Validators.required]);
  public imageControl = new FormControl(null, [Validators.required]);
  public contentControl = new FormControl(null, [Validators.required]);

  publishHighlight() {

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    // console.log(file);
    // console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

