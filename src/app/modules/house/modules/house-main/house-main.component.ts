import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Slider } from 'src/app/components-controllers/Slider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.scss']
})
export class HouseMainComponent implements OnInit {
  title = "início";
  imageConstants: ImagesConstants;
  session: string;

  constructor(public slider: Slider, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeRouteParams();
    this.initializeSlider();
  }

  initializeRouteParams() {
    if(this.route.params){
      this.route.params.subscribe(params => {
        this.session = params['session'] ?? null;
      });
  
      if(this.session){
        this.navigateToSession();
      }
    }
  }

  navigateToSession() {
    let content = null;
    switch(this.session) {
      case 'projetos':
        content = document.getElementsByTagName('app-house-projects')[0];
        break;
      case 'quiz':
        content = document.getElementsByTagName('app-house-discover-style')[0];
        break;
      case 'contato':
        content = document.getElementsByTagName('app-house-call-to-action')[0];
        break;
    }

    if(content){
      content.scrollIntoView();
    }
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
