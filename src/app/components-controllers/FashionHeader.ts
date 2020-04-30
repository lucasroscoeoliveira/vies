import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class FashionHeader {

  static instance: FashionHeader;

  items: Array<FashionHeaderMenuItem>;
  socials: Array<FashionHeaderSubMenuItem>;

  constructor(){
    this.setMenu();
    return FashionHeader.instance = FashionHeader.instance || this;
  }

  setMenu() {
    this.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'PORTFOLIO',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'SERVIÇOS',
        subItems: [
          {
            name: 'Design de Loja',
          },
          {
            name: 'Vitrinismo',
          },
          {
            name: 'Visual Merchandising',
          },
          {
            name: 'Consultoria',
          },
          {
            name: 'Design para espaços de Produção',
          },
        ],
        hasMenu: true
      },
      {
        name: 'CURSOS',
        subItems: [
          {
            name: 'Visual Merchandising',
          },
          {
            name: 'Vitrinismo',
          },
          {
            name: 'Vitrines Temáticas',
          }
        ],
        hasMenu: true
      },
      {
        name: 'BLOG',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'PARCEIROS',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'DEPOIMENTOS',
        subItems: [],
        hasMenu: false
      },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false
      },
    ];

    this.socials = [
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

@Injectable()
export class FashionHeaderMenuItem {
  name: string;
  subItems: Array<FashionHeaderSubMenuItem>;
  hasMenu: boolean;
}

@Injectable()
export class FashionHeaderSubMenuItem {
  name: string;
}
