import { Injectable, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from './Social';

@Injectable()
export class Header {

  static instance: Header;
  items: Array<HeaderMenuItem>;
  socials: Array<HeaderSubMenuItem>;
  type: string;

  constructor(private social: Social) {
    if (!this.type) {
      this.type = 'house';
    }
    return Header.instance = Header.instance || this;
  }

  setActive(routeName: string){
    if(!this.items){
      return;
    }
    this.items = this.items.map((item) => {
      if(item.routeName === routeName){
        item.focused = true;
      } else {
        item.focused = false;
      }
      return item;
    });
  }

  getSecondaryLogoLabel() {
    if (this.type === 'house') {
      return 'negócios';
    } else {
      return 'casa';
    }
  }

  setHeader(type: string) {
    this.type = type;

    if (type === 'house') {
      this.setHeaderItemsHouse();
    } else {
      this.setHeaderItemsFashion();
    }
    this.setSocials();
  }

  setSocials() {
    this.socials = [
      {
        name: "icon-facebook",
        clickEvent: this.social.goToFacebook
      },
      {
        name: "icon-instagram",
        clickEvent: this.social.goToInstagram
      },
      {
        name: "icon-pinterest",
        clickEvent: this.social.goToPinterest
      },
      {
        name: "icon-linkedin2",
        clickEvent: this.social.goToLinkedin
      },
      {
        name: "icon-youtube",
        clickEvent: this.social.goToYoutube
      },
    ]
  }

  setHeaderItemsHouse() {
    this.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        routeName: 'vies',
        logoLabel: 'casa',
        focused: true
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'quem-somos',
        focused: false
      },
      {
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projetos',
        focused: false
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'servicos',
        focused: false
      },
      {
        name: 'TESTE',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'quiz',
        focused: false
      },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'premio',
        focused: false
      },
      // {
      //   name: 'BLOG',
      //   subItems: [],
      //   hasMenu: false,
      //   logo: false,
      //   routeName: 'blog',
      //   focused: false
      // },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato',
        focused: false
      },
    ];
  }

  setHeaderItemsFashion() {
    this.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        logoLabel: 'negócio',
        routeName: 'vies',
        focused: true
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'quem-somos',
        focused: false
      },
      {
        name: 'PORTFÓLIO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projetos',
        focused: false
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'servicos',
        focused: false
      },
      {
        name: 'TESTE',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'quiz',
        focused: false
      },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'premio',
        focused: false
      },
      // {
      //   name: 'BLOG',
      //   subItems: [],
      //   hasMenu: false,
      //   logo: false,
      //   routeName: 'blog',
      //   focused: false
      // },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato',
        focused: false
      },
    ];
  }
}

@Injectable()
export class HeaderMenuItem {
  name: string;
  subItems: Array<HeaderSubMenuItem>;
  hasMenu: boolean;
  logo: boolean;
  logoLabel?: string;
  routeName?: string;
  focused?: boolean;
}

@Injectable()
export class HeaderSubMenuItem {
  name: string;
  clickEvent: any;
}
