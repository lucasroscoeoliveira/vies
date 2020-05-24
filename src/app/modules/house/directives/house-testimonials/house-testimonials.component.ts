import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/components-controllers/Testimonial';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-house-testimonials',
  templateUrl: './house-testimonials.component.html',
  styleUrls: ['./house-testimonials.component.scss']
})
export class HouseTestimonialsComponent implements OnInit {

  testimonials: Array<Testimonial>;
  imageConstants: ImagesConstants;

  constructor() { }

  ngOnInit(): void {
    this.testimonials = [
      {
        id: 1,
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
        name: 'Wilson e Nathalia',
        description: '“Fizeram um projeto muito mais do que esperávamos! Indicamos de olhos fechados! Sucesso! Empresa que torna sonhos em realidade! ”',
        projectName: "Projeto Área Gourmet"
      },
      {
        id: 2,
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.BURITIS_3,
        name: 'Larissa e Douglas Santos',
        description: '“Meninas, gostaríamos de parabenizar pela presteza e competência de vocês. Nosso apartamento antigo ficou novo! O projeto que vocês fizeram superou as nossas expectativas! Estamos amando usar cada cantinho!”',
        projectName: "Projeto Apartamento Completo"
      },
      {
        id: 3,
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
        name: 'Fátima Roscoe e Roberto Lage',
        description: '“Minha experiência com a Viés foi muito gratificante. Todas as expectativas foram atendidas! São profissionais altamente qualificadas e muito gentis!”',
        projectName: "Projeto Cozinha"
      },
      {
        id: 4,
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_HOME_OFF_SION_17,
        name: 'Lucas Oliveira',
        description: '“Gostei muito dos resultados do meu quarto e home office que projetaram. Além de tornarem os dois ambientes muito mais funcionais e organizados, ficaram no estilo que eu queria.”',
        projectName: "Projeto Quarto Solteiro"
      },
    ]
  }
}
