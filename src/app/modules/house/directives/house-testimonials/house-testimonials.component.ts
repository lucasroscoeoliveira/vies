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
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
        name: 'Wilson e Nathalia',
        description: '“Fizeram um projeto muito mais do que esperávamos! Indicamos de olhos fechados! Sucesso! Empresa que torna sonhos em realidade! ”',
        projectName: "Projeto Área Gourmet"
      },
      {
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANCHIETA_2,
        name: 'Luciano Neves**',
        description: '“A consultoria nos ajudou a realizarmos sem precisar de grandes reformas! O resultado foi super satisfatório!”',
        projectName: "Consultoria Residência"
      },
      {
        image: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
        name: 'Fátima Roscoe e Roberto Lage',
        description: '“Minha experiência com a Viés foi muito gratificante. Todas as expectativas foram atendidas! São profissionais altamente qualificadas e muito gentis!”',
        projectName: "Projeto Cozinha"
      },
    ]
  }

}
