import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-house-header',
  templateUrl: './house-header.component.html',
  styleUrls: ['./house-header.component.scss']
})
export class HouseHeaderComponent implements OnInit {

  constructor(public houseHeader: Header) { }

  ngOnInit(): void {
    this.setMenu();
  }

  setMenu() {
    this.houseHeader.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
      },
      {
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false,
        logo: false,
      },
      {
        name: 'SERVIÇOS',
        subItems: [
          {
            name: 'PROJETO MASTER',
          },
          {
            name: 'DECORE RÁPIDO',
          },
        ],
        hasMenu: true,
        logo: false,
      },
      {
        name: 'QUIZ',
        subItems: [],
        hasMenu: true,
        logo: false,
      },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
      },
      {
        name: 'BLOG',
        subItems: [],
        hasMenu: false,
        logo: false,
      },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
      },
    ];

    this.houseHeader.socials = [
      {
        name: "icon-facebook"
      },
      {
        name: "icon-instagram"
      },
      {
        name: "icon-pinterest"
      },
      {
        name: "icon-linkedin2"
      },
      {
        name: "icon-youtube"
      },
    ]
  }
}
