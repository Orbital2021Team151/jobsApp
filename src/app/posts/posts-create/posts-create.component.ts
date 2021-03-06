import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { mimeType } from '../mime-type.validator';

import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { AppliedBeforeDialog } from 'src/app/dialogs/applied-before-dialog/applied-before-dialog.component';
import { StartDateErrorDialog } from 'src/app/dialogs/start-date-error-dialog/start-date-error-dialog.component';
import { PostSubmittedDialog } from 'src/app/dialogs/post-submitted-dialog/post-submitted-dialog.component';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from '../../route-guards/can-deactivate.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostCreateComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  canDeactivate() {
    //console.log("DIRTY GUARD FIRED! You should not be able to switch pages so easily kiddo");
    return this.POCInformationGroup.pristine && this.postInformationGroup.pristine && this.postDurationGroup.pristine;
  }

  public authStatusObject;
  private authStatusSub: Subscription;
  private postServiceSub: Subscription;
  public isLoading = true;
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
  locations: string[] = [
    "Ang Mo Kio",
    "Bedok",
    "Bishan",
    "Boon Lay",
    "Bukit Batok",
    "Bukit Merah",
    "Bukit Panjang",
    "Bukit Timah",
    "Central Water Catchment",
    "Changi",
    "Changi Bay",
    "Choa Chu Kang",
    "Clementi",
    "Downtown Core",
    "Geylang",
    "Hougang",
    "Islandwide",
    "Jurong East",
    "Jurong West",
    "Kallang",
    "Lim Chu Kang",
    "Mandai",
    "Marina East",
    "Marina South",
    "Marine Parade",
    "Museum",
    "Newton",
    "North-Eastern Islands",
    "Novena",
    "Orchard",
    "Outram",
    "Overseas",
    "Pasir Ris",
    "Paya Lebar",
    "Pioneer",
    "Punggol",
    "Queenstown",
    "River Valley",
    "Rochor",
    "Seletar",
    "Sembawang",
    "Sengkang",
    "Serangoon",
    "Simpang",
    "Singapore River",
    "Southern Islands",
    "Straits View",
    "Sungei Kadut",
    "Tampines",
    "Tanglin",
    "Tengah",
    "Toa Payoh",
    "Tuas",
    "Virtual",
    "Western Islands",
    "Western Water Catchment",
    "Woodlands",
    "Yishun",
  ];
  opportunities: string[] = [
    "One-off",
    "Recurring",
  ];
  skills: string[] = [
    " Accounting & Finance",
    " Arts & Music",
    " Business Development",
    " Coaching & Training",
    " Counselling & Mentoring",
    " Fundraising",
    " Human Resource",
    " Information Technology",
    " Leadership Development",
    " Legal",
    " Marketing & Communications",
    " Medical & Health",
    " Volunteer Management",
    " Other Skills (elaborate in description)",
    " No Specific Skills Required",

  ];
  termsAndConditions = false;
  pocEmail: string = "";
  imagePreview: string = null;
  showPreview = false;
  postPreview: Post;
  emptyPostPreview: Post = {
    id: null,
      orgName: null,
      uen: null,
      POC: null,
      phoneNumber: null,
      email: null,

      title: null,
      content: null,
      skills: null,
      beneficiaries: null,
      image: null,
      imagePath: null,

      opportunity: null,
      startDate: null,
      endDate: null,
      hoursRequired: null,
      location: null,

      approved: false,
      creationDate: new Date(),
      publishDate: null,
      creator: null,

      removed: null,
      reason: null,

      students: [],
      reports: [],
      studentsAccepted: [],
  };


  public fileName: string;


  /* FormGroup version */
  public form: FormGroup;
  public orgNameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public showUenControl = new FormControl(false);
  public uenControl = new FormControl(null);
  public pocControl = new FormControl(null, [Validators.required]);
  public phoneNumberControl = new FormControl(null, [Validators.required, Validators.min(10000000), Validators.max(99999999)]);
  public emailControl = new FormControl(null, [Validators.required, Validators.minLength(10)]);
  public titleControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]);
  public contentControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]);
  public opportunitySelectedControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public skillsControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public startDateControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public endDateControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public hoursRequiredControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);

  public locationControl = new FormControl(null);
  public beneficiariesControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public imageControl = new FormControl(null, {
    /*
    validators: [Validators.required],
    asyncValidators: [mimeType]
    */
  });


  /* Stepper Form */
  POCInformationGroup: FormGroup;
  postInformationGroup: FormGroup;
  postDurationGroup: FormGroup;

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService,
    private dialog: MatDialog,
    private _formBuilder: FormBuilder,
    public router: Router,
  ) {

    /* SINGLE-PAGE FORM
    this.form = new FormGroup({
      orgName: this.orgNameControl,
      showUen: this.showUenControl,
      uen: this.uenControl,
      POC: this.pocControl,
      phoneNumber: this.phoneNumberControl,
      email: this.emailControl,
      title: this.titleControl,
      opportunity: this.opportunitySelectedControl,

      content: this.contentControl,
      skills: this.skillsControl,

      startDate: this.startDateControl,
      endDate: this.endDateControl,
      hoursRequired: this.hoursRequiredControl,

      location: this.locationControl,
      beneficiaries: this.beneficiariesControl,

      image: this.imageControl,
    });
     */

    this.authStatusObject = this.authService.getAuthStatusObject();
    //console.log(this.authStatusObject);

    let email, name = null;
    if (!this.authStatusObject.admin) {
      email = this.authStatusObject.email
      name = this.authStatusObject.name
    }

    this.emailControl = new FormControl({value: email, disabled: !this.authStatusObject.admin}, [Validators.required]);
    this.pocControl = new FormControl({value: name, disabled: !this.authStatusObject.admin}, [Validators.required]);

    /* MULTI-STEP FORM */
    this.POCInformationGroup = this._formBuilder.group({
      orgName: this.orgNameControl,
      uen: this.uenControl,
      email: this.emailControl,
      POC: this.pocControl,
      phoneNumber: this.phoneNumberControl,

      showUen: this.showUenControl,
    });

    this.postInformationGroup = this._formBuilder.group({
      title: this.titleControl,
      content: this.contentControl,
      skills: this.skillsControl,
      beneficiaries: this.beneficiariesControl,
      image: this.imageControl,
    });

    this.postDurationGroup = this._formBuilder.group({
      opportunity: this.opportunitySelectedControl,
      startDate: this.startDateControl,
      endDate: this.endDateControl,
      hoursRequired: this.hoursRequiredControl,
      location: this.locationControl,
    });

  }

  ngOnInit() {

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      //console.log("At create page");
      //console.log(authObject);
    });

    this.postPreview = this.emptyPostPreview;

    this.isLoading = false;
  }

  generatePreview() {
    //if (this.form.invalid) return;
    this.postPreview = this.emptyPostPreview;

    let emailField, POCField = null;
    if (!this.authStatusObject.admin) {
      emailField = this.authStatusObject.email
      POCField = this.authStatusObject.name
    } else {
      emailField = this.POCInformationGroup.value.email
      POCField = this.POCInformationGroup.value.POC
    }

    let uenField = "Not Applicable";
    if ((this.POCInformationGroup.value.uen !== null || this.POCInformationGroup.value.uen !== "") && this.POCInformationGroup.value.showUen) {
      uenField = this.POCInformationGroup.value.uen;
    }

    const post: Post = {
      id: null,
      orgName: this.POCInformationGroup.value.orgName,
      uen: uenField,
      POC: POCField,
      phoneNumber: this.POCInformationGroup.value.phoneNumber,
      email: emailField,

      title: this.postInformationGroup.value.title,
      content: this.postInformationGroup.value.content,
      skills: this.postInformationGroup.value.skills,
      beneficiaries: this.postInformationGroup.value.beneficiaries,
      image: this.postInformationGroup.value.image,
      imagePath: this.imagePreview,

      opportunity: this.postDurationGroup.value.opportunity,
      startDate: this.postDurationGroup.value.startDate,
      endDate: this.postDurationGroup.value.endDate,
      hoursRequired: this.postDurationGroup.value.hoursRequired,
      location: this.postDurationGroup.value.location,

      approved: false,
      creationDate: new Date(),
      publishDate: null,
      creator: null,

      removed: null,
      reason: null,

      students: [],
      reports: [],
      studentsAccepted: [],
    };

    this.postPreview = post;
    //this.showPreview = true;
  }

  onMoreInfo(content) {
    //console.log(this.posts);
    this.modalService.open(content, { size: 'lg' });
  }

  onAddPostReactive() {

    /*
    if (this.form.invalid) {
      console.log("Please fill up form first.");
      return;
    }

    if (this.form.value.startDate > this.form.value.endDate) {
      this.modalService.dismissAll();
      this.dialog.open(StartDateErrorDialog);
      return;
    }
    */

    let emailField, POCField = null;
    if (!this.authStatusObject.admin) {
      emailField = this.authStatusObject.email
      POCField = this.authStatusObject.name
    } else {
      emailField = this.POCInformationGroup.value.email
      POCField = this.POCInformationGroup.value.POC
    }

    let uenField = "Not Applicable";
    if ((this.POCInformationGroup.value.uen !== null || this.POCInformationGroup.value.uen !== "") && this.POCInformationGroup.value.showUen) {
      uenField = this.POCInformationGroup.value.uen;
    }

    const post: Post = {
      id: null,
      orgName: this.POCInformationGroup.value.orgName,
      uen: uenField,
      POC: POCField,
      phoneNumber: this.POCInformationGroup.value.phoneNumber,
      email: emailField,
      title: this.postInformationGroup.value.title,
      opportunity: this.postDurationGroup.value.opportunity,

      content: this.postInformationGroup.value.content,
      skills: this.postInformationGroup.value.skills,

      startDate: this.postDurationGroup.value.startDate,
      endDate: this.postDurationGroup.value.endDate,
      hoursRequired: this.postDurationGroup.value.hoursRequired,

      location: this.postDurationGroup.value.location,
      beneficiaries: this.postInformationGroup.value.beneficiaries,

      approved: false,
      creationDate: new Date(),
      publishDate: null,
      creator: null,

      removed: null,
      reason: null,

      students: [],
      reports: [],
      studentsAccepted: [],

      image: this.postInformationGroup.value.image,
      imagePath: null,
    };

    //console.log("Post to be submitted is: ");
    //console.log(post);

    if (post.image) {
      this.postsService.addPost(post);
    } else {
      this.postsService.addPostNoImage(post);
    }

    this.POCInformationGroup.reset();
    this.postInformationGroup.reset();
    this.postDurationGroup.reset();
    //line 431


    this.imagePreview = '';
    return true;
  }


  openDialog() {
    this.router.navigate(['/feed']);

    this.dialog.open(PostSubmittedDialog);
    return true;
  }

  openTermsAndConditions(longContent) {
    //console.log(this.form);
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.fileName = (event.target as HTMLInputElement).files[0].name;
    console.log(this.fileName);

    if (file) {
      this.postInformationGroup.patchValue({ image: file });
      //this.form.get('image').updateValueAndValidity();
      // console.log(file);
      // console.log(this.form);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      this.postInformationGroup.patchValue({ image: null });
      this.imagePreview = null;
    }
  }

  removeImage() {
    this.imagePreview = null;
    this.postInformationGroup.patchValue({ image: null });
  }
}
