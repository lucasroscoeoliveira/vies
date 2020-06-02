import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Slider } from 'src/app/components-controllers/Slider';
import { Header } from 'src/app/components-controllers/Header';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fashion-main',
  templateUrl: './fashion-main.component.html',
  styleUrls: ['./fashion-main.component.scss']
})
export class FashionMainComponent implements OnInit {

  title = "início";
  imageConstants: ImagesConstants;
  session: string;

  constructor(
    public slider: Slider,
    public header: Header,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

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
        this.router.navigate(['negocio/inicio', 'vies']);
        this.header.setActive('vies');
      }
    }
  }

  initializeSlider() {
    this.slider.items = [
      {
        id: 1,
        source: './assets/imgs/1-CLARA.jpg',
        sourceMobile: './assets/imgs/mobile/1-MOB-CLARA.jpg',
        active: true,
      },
      {
        id: 2,
        source: ImagesConstants.FASHION_IMAGES.DESKTOP.OTICA,
        sourceMobile: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_OTICA_2,
        active: false,
      },
      {
        id: 3,
        source: ImagesConstants.FASHION_IMAGES.DESKTOP.VANZI,
        sourceMobile: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_VANZI_3,
        active: false,
      },
      {
        id: 4,
        source: ImagesConstants.FASHION_IMAGES.DESKTOP.LAJU,
        sourceMobile: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_LAJU_4,
        active: false,
      },
      {
        id: 5,
        source: ImagesConstants.FASHION_IMAGES.DESKTOP.SALAO,
        sourceMobile: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_SALAO_5,
        active: false,
      },
    ]
  }

}
