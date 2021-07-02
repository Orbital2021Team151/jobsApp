import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { mimeType } from '../mime-type.validator';

import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create-org.component.html',
  styleUrls: ['./posts-create-org.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostCreateOrgComponent implements OnInit, OnDestroy {
  pendingApproval: boolean = false;
  public authStatusObject;

  private authStatusSub: Subscription;
  private postServiceSub: Subscription;

  isLoading = true;
  private mode = "create";
  private postId: string;
  post: Post;
  imagePreview: string;

  beneficiaries: string[] = [
    "Animal Welfare",
    "Arts & Heritage",
    "Children & Youth",
    "Community",
    "Disability",
    "Education",
    "Elderly",
    "Environment",
    "Families",
    "Health",
    "Humanitarian",
    "Social Service",
    "Sports",
    "Women & Girls",
  ];
  beneficiariesSelected: string[] = [];
  opportunities: string[] = [
    "One-off",
    "Recurring",
  ]
  opportunitySelected: string[] = [];
  termsAndConditions = false;

  /* FormGroup version */
  public form: FormGroup;
  public pocControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public phoneNumberControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public titleControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public contentControl = new FormControl(null, [Validators.required, Validators.minLength(100)]);
  public opportunitySelectedControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public skillsControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public startDateControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public endDateControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public hoursRequiredControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public beneficiariesControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public imageControl = new FormControl(null, {
    validators: [Validators.required],
    asyncValidators: [mimeType]
  });

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService,
    public route: ActivatedRoute
  ) {

    this.form = new FormGroup({
      POC: this.pocControl,
      phoneNumber: this.phoneNumberControl,
      title: this.titleControl,
      opportunity: this.opportunitySelectedControl,

      content: this.contentControl,
      skills: this.skillsControl,

      startDate: this.startDateControl,
      endDate: this.endDateControl,
      hoursRequired: this.hoursRequiredControl,

      beneficiaries: this.beneficiariesControl,
      image: this.imageControl,
    });
  }

  ngOnInit() {

    /*
     * To edit posts. But not done up yet.
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = "edit";
        this.postId = paramMap.get('postId');
        this.post = this.postsService.getPost(this.postId);
      } else {
        this.mode = "create";
        this.postId = null;
        this.post = null;
      }
    });
    */

    this.authStatusObject = this.authService.getAuthStatusObject(); //this is required to avoid the "Cannot read property 'orgName' of undefined" error. but it violates async


    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      //console.log("At create page");
      //console.log(authObject);
    });
  }

  /*
  onAddPostTemplate(form: NgForm) {
    //console.log("Beneficiaries Selected: ");
    //console.log(this.beneficiariesSelected);
    //console.log("add post fired!");

    if (form.invalid) {
      return;
    }

    const post: Post = {
      id: null,
      orgName: this.authStatusObject.orgName,
      uen: this.authStatusObject.uen,
      POC: form.value.POC,
      phoneNumber: form.value.phoneNumber,
      email: this.authStatusObject.email,
      title: form.value.title,
      content: form.value.content,
      opportunity: this.opportunitySelected,
      skills: form.value.skills,

      startDate: form.value.startDate,
      endDate: form.value.endDate,
      hoursRequired: form.value.hoursRequired,

      beneficiaries: this.beneficiariesSelected,

      approved: false,
      creator: null,

      students: [],
      reports: [],
      creationDate: new Date(Date.now()),
      publishDate: null,

      //imagePath: null,
      //creator: null,
    };
    //console.log("Post creation fired! onAddPost. post is:");
    //console.log(post);
    this.pendingApproval = true;
    this.postsService.addPost(post);
    this.modalService.dismissAll();
    form.reset();
  }
  */

  onAddPostReactive() {
    //console.log("Beneficiaries Selected: ");
    //console.log(this.beneficiariesSelected);
    //console.log("add post fired!");

    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      id: null,
      orgName: this.authStatusObject.orgName,
      uen: this.authStatusObject.uen,
      POC: this.form.value.POC,
      phoneNumber: this.form.value.phoneNumber,
      email: this.authStatusObject.email,
      title: this.form.value.title,
      opportunity: this.form.value.opportunity,

      content: this.form.value.content,
      skills: this.form.value.skills,

      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      hoursRequired: this.form.value.hoursRequired,

      beneficiaries: this.form.value.beneficiaries,

      approved: false,
      creationDate: new Date(),
      publishDate: null,
      creator: null,

      students: [],
      reports: [],
      image: this.form.value.image,
      imagePath: null,

      //imagePath: null,
      //creator: null,
    };

    this.pendingApproval = true;
    // console.log("printing image directly from the form");
    // console.log(this.form.value.imageControl);
    // console.log(this.form.value.image);
    //console.log("Post creation fired! onAddPost. post is:");
    //console.log(post);
    // console.log("this is postcreateorg");
    // console.log(post.image);

    this.postsService.addPost(post);
    this.modalService.dismissAll();
    this.form.reset();
    this.imagePreview = '';
  }

  closeNotification() {
    this.pendingApproval = false;
  }

  openTermsAndConditions(longContent) {
    //console.log(this.form)
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
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
