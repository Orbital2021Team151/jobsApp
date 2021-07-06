import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { mimeType } from '../mime-type.validator';


import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { AppliedBeforeDialog } from 'src/app/dialogs/applied-before-dialog/applied-before-dialog.component';
import { StartDateErrorDialog } from 'src/app/dialogs/start-date-error-dialog/start-date-error-dialog.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create-admin.component.html',
  styleUrls: ['./posts-create-admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostCreateAdminComponent implements OnInit, OnDestroy {
  pendingApproval: boolean = false;
  public authStatusObject;
  private authStatusSub: Subscription;
  private postServiceSub: Subscription;
  isLoading = true;
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
  imagePreview: string;


  /* FormGroup version */
  public form: FormGroup;
  public orgNameControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public uenControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public pocControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public phoneNumberControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public emailControl = new FormControl(null, [Validators.required, Validators.minLength(10)]);
  public titleControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
  public contentControl = new FormControl(null, [Validators.required, Validators.minLength(100)]);
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

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {

    this.form = new FormGroup({
      orgName: this.orgNameControl,
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

  }

  ngOnInit() {

    this.authStatusObject = this.authService.getAuthStatusObject(); //this is required to avoid the "Cannot read property 'orgName' of undefined" error. but it violates async

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authObject => {
      this.authStatusObject = authObject;
      //console.log("At create page");
      //console.log(authObject);
    });
  }


  onAddPostReactive() {

    if (this.form.invalid) {
      console.log("Please fill up form first.");
      return;
    }

    if (this.form.value.startDate > this.form.value.endDate) {
      this.modalService.dismissAll();
      this.dialog.open(StartDateErrorDialog);
      return;
    }

    const post: Post = {
      id: null,
      orgName: this.form.value.orgName,
      uen: this.form.value.uen,
      POC: this.form.value.POC,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
      title: this.form.value.title,
      opportunity: this.form.value.opportunity,

      content: this.form.value.content,
      skills: this.form.value.skills,

      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      hoursRequired: this.form.value.hoursRequired,

      location: this.form.value.location,
      beneficiaries: this.form.value.beneficiaries,

      approved: false,
      creationDate: new Date(),
      publishDate: null,
      creator: null,

      rejected: false,
      reason: null,
      completed: false,

      students: [],
      reports: [],

      image: this.form.value.image,
      imagePath: null,
    };

    console.log("Form to be submitted is: ");
    console.log(this.form.value);


    this.pendingApproval = true;

    if (this.form.value.image) {
      this.postsService.addPost(post);
    } else {
      this.postsService.addPostNoImage(post);
    }

    //this.postsService.addPost(post);

    this.modalService.dismissAll();
    this.form.reset();
    this.imagePreview = '';
  }

  closeNotification() {
    this.pendingApproval = false;
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
