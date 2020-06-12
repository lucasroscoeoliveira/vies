import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/components-controllers/Testimonial';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-fashion-testimonials',
  templateUrl: './fashion-testimonials.component.html',
  styleUrls: ['./fashion-testimonials.component.scss']
})
export class FashionTestimonialsComponent implements OnInit {

  testimonials: Array<Testimonial>;
  imageConstants: ImagesConstants;

  constructor(public scrollTo: ScrollTo, public header:Header) { }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.testimonial, 300, this.header.type);
  }

  ngOnInit(): void {
    this.testimonials = [
      {
        id: 1,
        image: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_7_CLARA,
        name: 'Maria Clara Fontenelle',
        description: '“Ahhh! Como eu amei a nossa loja nova! Vocês foram incríveis! Projeto lindo! Cuidaram de tudo como sempre com muito carinho!”',
        projectName: "Projeto, vitrine e identidade visual - Loja Clara Fontenelle"
      },
      {
        id: 2,
        image: ImagesConstants.FASHION_IMAGES.PROJECTS.FITSU_CASUAL_3,
        name: 'Vanessa Galizzi',
        description: '“Gostaria de agradecer de coração pelo trabalho incrível de vocês!!! Muito obrigada por todo o suporte que nos deram durante a obra e por fazer com que nosso sonho ficasse ainda mais lindo do que nossa expectativa!!! Vocês arrasam MUITO!!!! Parabénsssss pelo trabalho!!”',
        projectName: "Projeto e vitrine –Loja Fits U casual"
      },
      {
        id: 3,
        image: ImagesConstants.FASHION_IMAGES.PROJECTS.MARCELA_RABELO_24,
        name: 'Marcela Rabelo',
        description: '“Com toda a sensibilidade a Viés conseguiu transmitir para o papel todo o meu sonho. Minha loja e marca ficaram lindas! A Viés tem a equipe mais top do mundo, parabéns pelo excelente trabalho. Muito obrigada por tanta dedicação!" ',
        projectName: "Projeto e identidade visual – Loja Marcela Rabelo"
      },
      {
        id: 4,
        image: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_4_MADAH,
        name: 'Larissa Fonseca',
        description: '“ Fomos atendidas da melhor maneira possível, as meninas são muito profissionais e souberam transferir nossas ideias para o papel, nossa vitrine ficou maravilhosa! ”',
        projectName: "Vitrine Loja Madah"
      },
    ]
  }

}
