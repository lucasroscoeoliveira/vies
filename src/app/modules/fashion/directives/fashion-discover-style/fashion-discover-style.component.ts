import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-fashion-discover-style',
  templateUrl: './fashion-discover-style.component.html',
  styleUrls: ['./fashion-discover-style.component.scss']
})
export class FashionDiscoverStyleComponent implements OnInit {

  fashionTypes: Array<string>;
  styleImages: Array<any>;
  position: number;
  intervalEvent: any;
  fashionType: string;

  constructor() { }

  ngOnInit(): void {
    this.position = 0;
    this.fashionTypes = [
      'MODERNO', 'MINIMALISTA', 'ROMÂNTICO', 'RÚSTICO'
    ];
    this.styleImages = [
      {
        id: 1,
        source: ImagesConstants.FASHION_IMAGES.QUIZ.DESCOLADO,
      },
      {
        id: 2,
        source: ImagesConstants.FASHION_IMAGES.QUIZ.INDUSTRIAL,
      },
      {
        id: 3,
        source: ImagesConstants.FASHION_IMAGES.QUIZ.MODERNO,
      },
      {
        id: 4,
        source: ImagesConstants.FASHION_IMAGES.QUIZ.RUSTICO,
      },
    ];
    this.fashionType = this.fashionTypes[0];

    this.InitializeInterval();
  }

  InitializeInterval() {

    this.intervalEvent = setInterval(() => {
      this.changeLabel();
    }, 2000)
  }

  changeLabel() {
    this.position = this.position === this.fashionTypes.length - 1 ? 0 : this.position + 1;
    this.fashionType = this.fashionTypes[this.position];
  }

}
