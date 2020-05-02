import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/components-controllers/Slider';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {
  title = "moda";

  constructor(public slider: Slider) { }

  ngOnInit(): void {
    this.initializeSlider();
  }

  initializeSlider() {
    this.slider.items = [
      {
        source: './assets/imgs/5-COZINHA-SION.jpg',
        sourceMobile: '',
        active: true,
      },
      {
        source: './assets/imgs/2-MORAR-MAIS.jpg',
        sourceMobile: '',
        active: false,
      },
      {
        source: './assets/imgs/3-SALAS-SAVASSI.jpg',
        sourceMobile: '',
        active: false,
      },
      {
        source: './assets/imgs/4-SALAS-BURITIS.jpg',
        sourceMobile: '',
        active: false,
      },
      {
        source: './assets/imgs/1-SALA-SANTA-AMELIA.jpg',
        sourceMobile: '',
        active: false,
      },
    ]
  }
}
