import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/components-controllers/Slider';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "casa";

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
        source: './assets/imgs/2-MORAR-MAIS.jpg',
        sourceMobile: './assets/imgs/mobile/2-MOB-MORAR-MAIS.jpg',
        active: false,
      },
      {
        source: './assets/imgs/3-SALAS-SAVASSI.jpg',
        sourceMobile: './assets/imgs/mobile/3-MOB-SALAS-SAVASSI.jpg',
        active: false,
      },
      {
        source: './assets/imgs/4-SALAS-BURITIS.jpg',
        sourceMobile: './assets/imgs/mobile/4-MOB-SALA-BURITIS.jpg',
        active: false,
      },
      {
        source: './assets/imgs/5-COZINHA-SION.jpg',
        sourceMobile: './assets/imgs/mobile/5-MOB-COZINHA-SION.jpg',
        active: false,
      },
    ]
  }
}
