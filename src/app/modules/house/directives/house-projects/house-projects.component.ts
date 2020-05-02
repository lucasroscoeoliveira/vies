import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/components-controllers/Slider';

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
        source: './assets/imgs/projects/19-RESID-VARGINHA.jpg',
        active: false,
        description: 'RESIDÊNCIA - VARGINHA - MG'
      }, 
      {
        source: './assets/imgs/projects/18-QUARTO-BEBE-CAICARA.jpg',
        active: false,
        description: 'QUARTO BEBÊ - CAIÇARA'
      }, 
      {
        source: './assets/imgs/projects/17-QUARTO-HOME-OFF-SION.jpg',
        active: false,
        description: 'QUARTO E HOME OFFICE - SION'
      }, 
      {
        source: './assets/imgs/projects/16-PLANALTO.jpg',
        active: false,
        description: 'RESIDÊNCIA - PLANALTO'
      }, 
      {
        source: './assets/imgs/projects/15-LAGOA-SANTA.jpg',
        active: false,
        description: 'RESIDÊNCIA - LAGOA SANTA'
      },
      {
        source: './assets/imgs/projects/14-CONTAGEM.jpg',
        active: false,
        description: 'RESIDÊNCIA - CONTAGEM'
      },
      {
        source: './assets/imgs/projects/13-COZINHA-SION.jpg',
        active: false,
        description: 'COZINHA - SION'
      },
      {
        source: './assets/imgs/projects/12-MORAR-MAIS.jpg',
        active: false,
        description: 'PRÊMIO MOSTRA DE DECORAÇÃO - MORAR MAIS 2018'
      },
      {
        source: './assets/imgs/projects/11-BELVEDERE.jpg',
        active: false,
        description: 'SALAS CONJUGADAS - BELVEDERE'
      },
      {
        source: './assets/imgs/projects/10-PADRE-EUSTAQUIO.jpg',
        active: false,
        description: 'RESIDÊNCIA - PADRE EUSTÁQUIO'
      },
      {
        source: './assets/imgs/projects/09-AREA-GOURMET-SA.jpg',
        active: false,
        description: 'ÁREA GOURMET - SANTA AMÉLIA'
      },
      {
        source: './assets/imgs/projects/08-SAVASSI.jpg',
        active: false,
        description: 'RESIDÊNCIA - SAVASSI'
      },
      {
        source: './assets/imgs/projects/07-SUITE-CASA.jpg',
        active: false,
        description: 'SUÍTE - OURO PRETO'
      },
      {
        source: './assets/imgs/projects/06-FUNCIONARIOS.jpg',
        active: false,
        description: 'RESIDÊNCIA - FUNCIONÁRIOS'
      },
      {
        source: './assets/imgs/projects/05-SANTA-AMELIA.jpg',
        active: false,
        description: 'RESIDÊNCIA - STO AGOSTINHO'
      },
      {
        source: './assets/imgs/projects/04-HOME-OFFICE.jpg',
        active: false,
        description: 'HOME OFFICE - SAVASSI'
      },
      {
        source: './assets/imgs/projects/03-BURITIS.jpg',
        active: false,
        description: 'RESIDÊNCIA - BURITIS'
      },
      {
        source: './assets/imgs/projects/02-ANCHIETA.jpg',
        active: false,
        description: 'RESIDÊNCIA - ANCHIETA'
      },
      {
        source: './assets/imgs/projects/01-SANTO-AGOSTINHO.jpg',
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
