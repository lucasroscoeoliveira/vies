import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Image } from 'src/app/components-controllers/Slider';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  houseImages:Array<Image>;
  fashionImages: Array<Image>;
  intervalEvent: any;
  intervalNumber: number = 3000;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Viés – Projetos residenciais e comerciais");
    this.metaTagService.updateTag({name: 'Vitrinismo', content: "Projeto de vitrines e interiores de loja"});
    this.metaTagService.updateTag({name: 'Casa', content: "Projeto personalizados de ambientes de casa"});
    this.initVariables();
    this.initializeInterval();
  }

  initVariables() {
    this.fashionImages = [
      {
        id: 1,
        source: './assets/imgs/mobile/1-MOB-CLARA.jpg',
        active: true,
      },
      {
        id: 2,
        source: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_OTICA_2,
        active: false,
      },
      {
        id: 3,
        source: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_VANZI_3,
        active: false,
      },
      {
        id: 4,
        source: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_LAJU_4,
        active: false,
      },
      {
        id: 5,
        source: ImagesConstants.FASHION_IMAGES.MOBILE.MOB_SALAO_5,
        active: false,
      },
    ]

    this.houseImages = [
      {
        id: 1,
        source: './assets/imgs/mobile/1-MOB-SALA-SANTA-AMELIA.jpg',
        active: true,
      },
      {
        id: 2,
        source: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_MORAR_MAIS_2,
        active: false,
      },
      {
        id: 3,
        source: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALAS_SAVASSI_3,
        active: false,
      },
      {
        id: 4,
        source: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_SALA_BURITIS_4,
        active: false,
      },
      {
        id: 5,
        source: ImagesConstants.HOUSE_IMAGES.MOBILE.MOB_COZINHA_SION_5,
        active: false,
      },
    ]
  }

  ngOnDestroy() {
    if (this.intervalEvent) {
      clearInterval(this.intervalEvent);
    }
  }

  goHome() {
    this.router.navigate(['casa/inicio', 'vies']);
  }

  goFashion() {
    this.router.navigate(['negocio/inicio', 'vies']);
  }

  changeImageShownFashion() {
    let checkedIndex = this.fashionImages.findIndex(image => image.active);
    if(checkedIndex === this.fashionImages.length - 1){
      checkedIndex = 0;
    } else {
      checkedIndex += 1;
    }


    this.fashionImages = this.fashionImages.map((image, index) => {
      if(index !== checkedIndex){
        image.active = false;
      } else {
        image.active = true;
      }

      return image;
    });
  }

  changeImageShownHouse() {
    let checkedIndex = this.houseImages.findIndex(image => image.active);
    if(checkedIndex === this.houseImages.length - 1){
      checkedIndex = 0;
    } else {
      checkedIndex += 1;
    }


    this.houseImages = this.houseImages.map((image, index) => {
      if(index !== checkedIndex){
        image.active = false;
      } else {
        image.active = true;
      }

      return image;
    });
  }

  initializeInterval() {
    this.intervalNumber = this.intervalNumber ? this.intervalNumber : 3000;

    this.intervalEvent = setInterval(() => {
      this.changeImageShownFashion();
      this.changeImageShownHouse();
    }, this.intervalNumber)
  }
}
