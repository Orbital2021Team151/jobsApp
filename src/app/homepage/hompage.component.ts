import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { HomepageService } from "./homepage.service";



@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageComponent implements OnInit, OnDestroy {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [1, 2, 3].map((n) => `../../assets/sample-carousel-image-${n}.jpg`);


  constructor(public homepageService: HomepageService) {}
  ngOnInit() {}
  ngOnDestroy() {}

  openPoster() {}
}
