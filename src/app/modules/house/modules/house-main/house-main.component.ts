import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Slider } from 'src/app/components-controllers/Slider';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.scss']
})
export class HouseMainComponent implements OnInit {
  title = "início";
  imageConstants: ImagesConstants;

  constructor(public slider: Slider) { }

  ngOnInit(): void {
    this.initializeSlider();
  }

  initializeSlider() {
    this.slider.items = [
      {
        source: './assets/imgs/1-SALA-SANTA-AMELIA.jpg',
        sourceMobile: './assets/imgs/mobile/1-MOB-SALA-SANTA-AMELIA.jpg',
        active: true,
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.MORAR_MAIS_2,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_MORAR_MAIS_2,
        active: false,
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.SALAS_SAVASSI_3,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALAS_SAVASSI_3,
        active: false,
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.SALAS_BURITIS_4,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALA_BURITIS_4,
        active: false,
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.COZINHA_SION_5,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_COZINHA_SION_5,
        active: false,
      },
    ]
  }

}
