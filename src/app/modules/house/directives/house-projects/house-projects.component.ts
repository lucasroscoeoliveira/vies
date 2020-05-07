import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/components-controllers/Slider';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-house-projects',
  templateUrl: './house-projects.component.html',
  styleUrls: ['./house-projects.component.scss']
})
export class HouseProjectsComponent implements OnInit {

  images: Array<Image>;
  currentPosition: number;
  countActive: number;

  constructor() { }

  ngOnInit(): void {
    this.currentPosition = 0;
    this.initializeImages();
    this.setInitialActive();
  }

  initializeImages() {
    this.images = [
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_VARGINHA_19,
        active: false,
        description: 'RESIDÊNCIA - VARGINHA - MG'
      }, 
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_BEBE_CAICARA_18,
        active: false,
        description: 'QUARTO BEBÊ - CAIÇARA'
      }, 
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_HOME_OFF_SION_17,
        active: false,
        description: 'QUARTO E HOME OFFICE - SION'
      }, 
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PLANALTO_16,
        active: false,
        description: 'RESIDÊNCIA - PLANALTO'
      }, 
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.LAGOA_SANTA_15,
        active: false,
        description: 'RESIDÊNCIA - LAGOA SANTA'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CONTAGEM_14,
        active: false,
        description: 'RESIDÊNCIA - CONTAGEM'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
        active: false,
        description: 'COZINHA - SION'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.MORAR_MAIS_12,
        active: false,
        description: 'PRÊMIO MOSTRA DE DECORAÇÃO - MORAR MAIS 2018'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BELVEDERE_11,
        active: false,
        description: 'SALAS CONJUGADAS - BELVEDERE'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PADRE_EUSTAQUIO_10,
        active: false,
        description: 'RESIDÊNCIA - PADRE EUSTÁQUIO'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
        active: false,
        description: 'ÁREA GOURMET - SANTA AMÉLIA'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SAVASSI_8,
        active: false,
        description: 'RESIDÊNCIA - SAVASSI'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SUITE_CASA_7,
        active: false,
        description: 'SUÍTE - OURO PRETO'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.FUNCIONARIOS_6,
        active: false,
        description: 'RESIDÊNCIA - FUNCIONÁRIOS'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTA_AMELIA_5,
        active: false,
        description: 'RESIDÊNCIA - STO AGOSTINHO'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_4,
        active: false,
        description: 'HOME OFFICE - SAVASSI'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BURITIS_3,
        active: false,
        description: 'RESIDÊNCIA - BURITIS'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANCHIETA_2,
        active: false,
        description: 'RESIDÊNCIA - ANCHIETA'
      },
      {
        source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTO_AGOSTINHO_1,
        active: false,
        description: 'RESIDÊNCIA - STO AGOSTINHO'
      },
    ]
  }

  setInitialActive() {
    this.countActive = this.setIsMobile() ? 4 : 8;

    this.images = this.images.map((image, index) => {
      image.active = index < this.countActive ? true : false;
      return image;
    })
  }

  setIsMobile() {
    return screen.width < 900
  }

  setCountActive() {
    this.countActive = this.setIsMobile() ? 4 : 8;
    return this.countActive;
  }

  move(direction: string) {
    this.setCountActive();
    let maxPosition = Math.floor(this.images.length / this.countActive);

    if(direction === 'right' && this.currentPosition === maxPosition){
        this.currentPosition = 0;
    } else if(direction === 'right' && this.currentPosition < maxPosition) {
        this.currentPosition ++;
    } else if(direction === 'left' && this.currentPosition === 0){
        this.currentPosition = maxPosition
    } else if(direction === 'left' && this.currentPosition > 0){
        this.currentPosition--;
    }

    this.setActives();
  }

  setActives() {
    let startIndex = this.currentPosition * this.countActive;
    let finishIndex = startIndex + this.countActive;

    this.images = this.images.map((image, index) => {
      image.active = index < finishIndex && index >= startIndex ? true : false;
      return image;
    })
  }
}
