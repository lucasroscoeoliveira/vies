import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-house-prize',
  templateUrl: './house-prize.component.html',
  styleUrls: ['./house-prize.component.scss']
})
export class HousePrizeComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        image: environment.s3_public + '/House/Prize/morarmais-socias.jpg',
        label: 'Sócias da Viés, Amanda e Marina, no quarto da blogueira.'
      },
      {
        id: 2,
        image: environment.s3_public + '/House/Prize/morarmais-revista.jpg',
        label: 'Ganhamos o 2º lugar e fomos <br> capa da revista.',
      },
      {
        id: 3,
        image: environment.s3_public + '/House/Prize/morarmais-deborah.jpg',
        label: 'A blogueira de moda Deborah Zandonna nos inspirou a desenvolver o quarto.'
      },
    ]
  }
}
