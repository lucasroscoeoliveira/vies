import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class HouseHeader {

  static instance: HouseHeader;

  items: Array<HouseHeaderMenuItem>;
  socials: Array<HouseHeaderSubMenuItem>;

  constructor(){
    this.setMenu();
    return HouseHeader.instance = HouseHeader.instance || this;
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
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false
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
        hasMenu: true
      },
      {
        name: 'QUIZ',
        subItems: [],
        hasMenu: true
      },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true
      },
      {
        name: 'BLOG',
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
export class HouseHeaderMenuItem {
  name: string;
  subItems: Array<HouseHeaderSubMenuItem>;
  hasMenu: boolean;
}

@Injectable()
export class HouseHeaderSubMenuItem {
  name: string;
}
