import { Component, OnDestroy, OnInit } from "@angular/core";
import { HomepageService } from "./homepage.service";



@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public homepageService: HomepageService) {}
  ngOnInit() {}
  ngOnDestroy() {}

  openPoster() {}
}
