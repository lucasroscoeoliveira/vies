import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-house-discover-style',
  templateUrl: './house-discover-style.component.html',
  styleUrls: ['./house-discover-style.component.scss']
})
export class HouseDiscoverStyleComponent implements OnInit {

  houseTypes: Array<string>;
  styleImages: Array<string>;
  position: number;
  intervalEvent: any;
  houseType: string;

  constructor() { }

  ngOnInit(): void {
    this.position = 0;
    this.houseTypes = [
      'MODERNA', 'MINIMALISTA', 'ROMÂNTICA', 'RÚSTICA'
    ];
    this.styleImages = [
      ImagesConstants.HOUSE_IMAGES.QUIZ.DESCOLADO,
      ImagesConstants.HOUSE_IMAGES.QUIZ.INDUSTRIAL,
      ImagesConstants.HOUSE_IMAGES.QUIZ.MODERNO,
      ImagesConstants.HOUSE_IMAGES.QUIZ.RUSTICO,
    ];
    this.houseType = this.houseTypes[0];

    this.InitializeInterval();
  }

  InitializeInterval() {

    this.intervalEvent = setInterval(() => {
      this.changeLabel();
    }, 3000)
  }

  changeLabel() {
    this.position = this.position === this.houseTypes.length - 1 ? 0 : this.position + 1;
    this.houseType = this.houseTypes[this.position];
  }
}
