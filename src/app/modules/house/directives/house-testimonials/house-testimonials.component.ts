import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/components-controllers/Testimonial';

@Component({
  selector: 'app-house-testimonials',
  templateUrl: './house-testimonials.component.html',
  styleUrls: ['./house-testimonials.component.scss']
})
export class HouseTestimonialsComponent implements OnInit {

  testimonials: Array<Testimonial>;

  constructor() { }

  ngOnInit(): void {
    this.testimonials = [
      {
        image: './assets/imgs/projects/09-AREA-GOURMET-SA.jpg',
        name: 'Wilson e Nathalia',
        description: '“Fizeram um projeto muito mais do que esperávamos! Indicamos de olhos fechados! Sucesso! Empresa que torna sonhos em realidade! ”',
        projectName: "Projeto Área Gourmet - Santa Amélia"
      },
      {
        image: './assets/imgs/projects/02-ANCHIETA.jpg',
        name: 'Luciano Neves**',
        description: '“A consultoria nos ajudou a realizarmos sem precisar de grandes reformas! O resultado foi super satisfatório!”',
        projectName: "Consultoria - Residência Grajaú"
      },
      {
        image: './assets/imgs/projects/17-QUARTO-HOME-OFF-SION.jpg',
        name: 'Fátima Roscoe e Roberto Lage',
        description: '“Minha experiência com a Viés foi muito gratificante. Todas as expectativas foram atendidas! São profissionais altamente qualificadas e muito gentis. O projeto ficou dentro de todas as nossas necessidades e expectativas!”',
        projectName: "Projeto Cozinha – Sion"
      },
    ]
  }

}
