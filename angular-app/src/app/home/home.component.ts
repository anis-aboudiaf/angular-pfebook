import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // images = [700, 533, 807, 124].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );
  images = [
    'https://www.opentext.com/file_source/OpenText/en_US/JPG/opentext-financial-services-webinar-webpage-wem-banner-1600x400.jpg',
    'https://www.opentext.com/file_source/OpenText/en_US/JPG/opentext-landing-page-banner-1600x400-ecm-campaign-blue.jpg',
    'https://epromis.com/uploads/SolutionInnerPageImage/business-suite-1600X400.jpg',
    'https://miro.medium.com/max/3200/1*PNg6D9dSHR2kKNW4nNBKnA.jpeg',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}
}
