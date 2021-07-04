import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { mimeType } from '../mime-type.validator';


import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

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
  ]
  termsAndConditions = false;
  pocEmail: string = "";


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
  public imageControl = new FormControl(null, {});

  constructor(
    public postsService: PostsService,
    private modalService: NgbModal,
    private authService: AuthService
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

      //imagePath: null,
      //creator: null,
    };

    //console.log("Post creation fired! onAddPost. post is:");
    //console.log(post);

    this.pendingApproval = true;

    this.postsService.addPost(post);

    this.modalService.dismissAll();
    this.form.reset();
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
}
