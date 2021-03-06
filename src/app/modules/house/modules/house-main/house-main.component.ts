import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Slider } from 'src/app/components-controllers/Slider';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.scss']
})
export class HouseMainComponent implements OnInit {
  title = "início";
  imageConstants: ImagesConstants;
  session: string;

  constructor(
    public slider: Slider,
    public header: Header,
    private route: ActivatedRoute, 
    private router: Router) { }

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
        this.header.setActive(this.session);
      } else {
        this.router.navigate(['casa/inicio', 'vies']);
        this.header.setActive('vies');
      }
    }
  }

  initializeSlider() {
    this.slider.items = [
      {
        id: 1,
        source: './assets/imgs/1-SALA-SANTA-AMELIA.jpg',
        sourceMobile: './assets/imgs/mobile/1-MOB-SALA-SANTA-AMELIA.jpg',
        active: true,
      },
      {
        id: 2,
        source: ImagesConstants.HOUSE_IMAGES.DESKTOP.MORAR_MAIS_2,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_MORAR_MAIS_2,
        active: false,
      },
      {
        id: 3,
        source: ImagesConstants.HOUSE_IMAGES.DESKTOP.SALAS_SAVASSI_3,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALAS_SAVASSI_3,
        active: false,
      },
      {
        id: 4,
        source: ImagesConstants.HOUSE_IMAGES.DESKTOP.SALAS_BURITIS_4,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALA_BURITIS_4,
        active: false,
      },
      {
        id: 5,
        source: ImagesConstants.HOUSE_IMAGES.DESKTOP.COZINHA_SION_5,
        sourceMobile: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_COZINHA_SION_5,
        active: false,
      },
    ]
  }
}
