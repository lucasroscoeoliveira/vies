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
    this.metaTagService.addTag({name: 'Vitrinismo', content: "Projeto de vitrines e interiores de loja"});
    this.metaTagService.addTag({name: 'Casa', content: "PROJETO RESIDENCIAL BH"});
    this.metaTagService.addTag({name: 'Residencia', content: "PROJETO RESIDENCIAL BELO HORIZONTE"});
    this.metaTagService.addTag({name: 'Arquitetura', content: "ARQUITETO BH"});
    this.metaTagService.addTag({name: 'Belo Horizonte', content: "ARQUITETURA BELO HORIZONTE"});
    this.metaTagService.addTag({name: 'Arquiteto', content: "ARQUITETO EM BELO HORIZONTE"});
    this.metaTagService.addTag({name: 'Arquitetura', content: "ESCRITÓRIO DE ARQUITETURA BH"});
    this.metaTagService.addTag({name: 'Design', content: "ESCRITÓRIO DESIGN DE INTERIORES "});
    this.metaTagService.addTag({name: 'Projeto', content: "PROJETO ONLINE"});
    this.metaTagService.addTag({name: 'Projeto Online', content: "PROJETO RESIDENCIAL ONLINE"});
    this.metaTagService.addTag({name: 'Arquitetura Interiores', content: "ARQUITETURA DE INTERIORES"});
    this.metaTagService.addTag({name: 'Arquitetura escritório', content: "ESCRITÓRIO DE ARQUITETURA DE INTERIORES"});
    this.metaTagService.addTag({name: 'Projeto Comercial', content: "PROJETO COMERCIAL BH"});
    this.metaTagService.addTag({name: 'Projeto Loja', content: "PROJETO DE LOJA BH"});
    this.metaTagService.addTag({name: 'Loja BH', content: "PROJETO DE LOJA BELO HORIZONTE" });
    this.metaTagService.addTag({name: 'Design de Interiores', content: "DESIGN DE INTERIORES BH"});
    this.metaTagService.addTag({name: 'Arquitetura de Interiores', content: "ARQUITETURA DE INTERIORES BH"});
    this.metaTagService.addTag({name: 'Vitrine', content: "ESCRITORIO DESIGN DE INTERIORES CONTAGEM"});
    this.metaTagService.addTag({name: 'Vitrinismo', content: "VITRINISTA BH"});
    this.metaTagService.addTag({name: 'Vitrine Belo Horizonte', content: "VITRINISTA EM BELO HORIZONTE"});
    this.metaTagService.addTag({name: 'Logo', content: "IDENTIDADE VISUAL "});
    this.metaTagService.addTag({name: 'Identidade Visual', content: "CRIAÇÃO DE LOGOMARCA"});
    this.metaTagService.addTag({name: 'Design Gráfico', content: "DESIGN GRÁFICO"});
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
