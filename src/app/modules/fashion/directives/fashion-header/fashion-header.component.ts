import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-fashion-header',
  templateUrl: './fashion-header.component.html',
  styleUrls: ['./fashion-header.component.scss']
})
export class FashionHeaderComponent implements OnInit {

  constructor(public fashionHeader: Header) { }

  ngOnInit(): void {
    this.setMenu();
  }

  setMenu() {
    this.fashionHeader.items = [
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

    this.fashionHeader.socials = [
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
