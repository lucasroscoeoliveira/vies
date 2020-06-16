import { Component, OnInit, HostListener } from '@angular/core';
import { Testimonial } from 'src/app/components-controllers/Testimonial';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Header } from 'src/app/components-controllers/Header';
import { Menu } from 'src/app/components-controllers/Menu';

@Component({
  selector: 'app-vi-testimonials',
  templateUrl: './vi-testimonials.component.html',
  styleUrls: ['./vi-testimonials.component.scss']
})
export class ViTestimonialsComponent implements OnInit {

  testimonials: Array<Testimonial>;
  imageConstants: ImagesConstants;
  currentIndex: number = 0;
  containerDiv: any;

  constructor(public scrollTo: ScrollTo, public header:Header, public menu: Menu) { }

  ngOnInit(): void {
    this.setTestimonials();
    this.initVariables();
  }

  mobileView() {
    return screen.width < 500;
  }

  initVariables() {
    if (!this.mobileView()) {
      return;
    }
    this.initContainerSize();
  }

  initContainerSize() {
    setTimeout(() => {
      this.containerDiv = document.getElementById('vi-testimonials-container');
      this.containerDiv.style.width = 100 * this.testimonials.length + '%';
      let calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
    }, 300)
  }

  move(direction: string) {
    let calc = 0;

    if (direction === 'right' && this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
    }
    else if(direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
    }
    this.selectTestimonialByIndex();
  }

  setTestimonials() {
    if (this.header.type === 'house') {
      this.testimonials = [
        {
          id: 1,
          image: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
          name: 'Wilson e Nathalia',
          description: '“Fizeram um projeto muito mais do que esperávamos! Indicamos de olhos fechados! Sucesso! Empresa que torna sonhos em realidade! ”',
          projectName: "Projeto Área Gourmet",
          active: true,
        },
        {
          id: 2,
          image: ImagesConstants.HOUSE_IMAGES.PROJECTS.BURITIS_3,
          name: 'Larissa e Douglas Santos',
          description: '“Meninas, gostaríamos de parabenizar pela presteza e competência de vocês. Nosso apartamento antigo ficou novo! O projeto que vocês fizeram superou as nossas expectativas! Estamos amando usar cada cantinho!”',
          projectName: "Projeto Apartamento Completo",
          active: false
        },
        {
          id: 3,
          image: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
          name: 'Fátima Roscoe e Roberto Lage',
          description: '“Minha experiência com a Viés foi muito gratificante. Todas as expectativas foram atendidas! São profissionais altamente qualificadas e muito gentis!”',
          projectName: "Projeto Cozinha",
          active: false
        },
        {
          id: 4,
          image: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_HOME_OFF_SION_17,
          name: 'Lucas Oliveira',
          description: '“Gostei muito dos resultados do meu quarto e home office que projetaram. Além de tornarem os dois ambientes muito mais funcionais e organizados, ficaram no estilo que eu queria.”',
          projectName: "Projeto Quarto Solteiro",
          active: false
        },
      ]
    } else {
      this.testimonials = [
        {
          id: 1,
          image: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_7_CLARA,
          name: 'Maria Clara Fontenelle',
          description: '“Ahhh! Como eu amei a nossa loja nova! Vocês foram incríveis! Projeto lindo! Cuidaram de tudo como sempre com muito carinho!”',
          projectName: "Projeto, vitrine e identidade visual - Loja Clara Fontenelle",
          active: true
        },
        {
          id: 2,
          image: ImagesConstants.FASHION_IMAGES.PROJECTS.FITSU_CASUAL_3,
          name: 'Vanessa Galizzi',
          description: '“Gostaria de agradecer de coração pelo trabalho incrível de vocês!!! Muito obrigada por todo o suporte que nos deram durante a obra e por fazer com que nosso sonho ficasse ainda mais lindo do que nossa expectativa!!! Vocês arrasam MUITO!!!! Parabénsssss pelo trabalho!!”',
          projectName: "Projeto e vitrine –Loja Fits U casual",
          active: false
        },
        {
          id: 3,
          image: ImagesConstants.FASHION_IMAGES.PROJECTS.MARCELA_RABELO_24,
          name: 'Marcela Rabelo',
          description: '“Com toda a sensibilidade a Viés conseguiu transmitir para o papel todo o meu sonho. Minha loja e marca ficaram lindas! A Viés tem a equipe mais top do mundo, parabéns pelo excelente trabalho. Muito obrigada por tanta dedicação!" ',
          projectName: "Projeto e identidade visual – Loja Marcela Rabelo",
          active: false
        },
        {
          id: 4,
          image: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_4_MADAH,
          name: 'Larissa Fonseca',
          description: '“ Fomos atendidas da melhor maneira possível, as meninas são muito profissionais e souberam transferir nossas ideias para o papel, nossa vitrine ficou maravilhosa! ”',
          projectName: "Vitrine Loja Madah",
          active: false
        },
      ]
    }
  }

  selectTestimonialByIndex() {
    this.testimonials = this.testimonials.map((testimonial, index) => {
      testimonial.active = index === this.currentIndex ? true : false;
      return testimonial;
    })
  }

  selectTestimonial(testimonialSelected: Testimonial) {
    this.testimonials = this.testimonials.map((testimonial, index) => {
      if (testimonial.id === testimonialSelected.id) {
        this.currentIndex = index;
      }
      testimonial.active = testimonial.id === testimonialSelected.id ? true : false;
      return testimonial;
    })

    let calc = (this.currentIndex) * 100;
    this.containerDiv.style.transform = `translateX(-${calc}vw)`;
  }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.testimonial, 300, this.header.type);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let keyPressed = event.keyCode;
    switch (keyPressed) {
      case 39:
        this.move('right');
        break;
      case 37:
        this.move('left');
    }
  }

}
