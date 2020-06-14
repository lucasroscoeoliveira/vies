import { Injectable, OnInit, Input } from '@angular/core';
import { Social } from './Social';

@Injectable()
export class Menu {

  static instance: Menu;
  type: string;
  items: Array<MenuMenuItem>;
  socials: Array<MenuSubMenuItem>;
  menuOpened: boolean;

  constructor(public social: Social) {
    if (!this.type) {
      this.type = 'house';
    }
    return Menu.instance = Menu.instance || this;
  }

  openMenu() {
    this.menuOpened = true;
    let drawer = document.getElementById("menu-content");
    drawer.style.width = "300px";
  }

  getSecondaryLogoLabel() {
    if (this.type === 'house') {
      return 'negócios';
    } else {
      return 'casa';
    }
  }

  getPrimaryLogoLabel() {
    if (this.type === 'house') {
      return 'casa';
    } else {
      return 'negócios';
    }
  }

  setMenu(type: string) {
    this.type = type;

    if (type === 'house') {
      this.setMenuItemsHouse();
    } else {
      this.setMenuItemsFashion();
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
      // {
      //   name: "icon-linkedin2",
      //   clickEvent: this.social.goToLinkedin
      // },
      {
        name: "icon-youtube",
        clickEvent: this.social.goToYoutube
      },
    ]
  }

  setMenuItemsHouse() {
    this.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        routeName: 'vies',
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'quem-somos'
      },
      {
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projetos'
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'servicos'
      },
      // {
      //   name: 'TESTE',
      //   subItems: [],
      //   hasMenu: true,
      //   logo: false,
      //   routeName: 'quiz'
      // },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'premio'
      },
      // {
      //   name: 'BLOG',
      //   subItems: [],
      //   hasMenu: false,
      //   logo: false,
      //   routeName: 'blog'
      // },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato'
      },
    ];
  }

  setMenuItemsFashion() {
    this.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        routeName: 'vies',
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'quem-somos'
      },
      {
        name: 'PORTFÓLIO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projetos'
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'servicos'
      },
      // {
      //   name: 'TESTE',
      //   subItems: [],
      //   hasMenu: true,
      //   logo: false,
      //   routeName: 'quiz'
      // },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'premio'
      },
      // {
      //   name: 'BLOG',
      //   subItems: [],
      //   hasMenu: false,
      //   logo: false,
      //   routeName: 'blog'
      // },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato'
      },
    ];
  }

}

export class MenuMenuItem {
  name: string;
  subItems: Array<MenuSubMenuItem>;
  hasMenu: boolean;
  logo: boolean;
  logoLabel?: string;
  routeName?: string;
}

export class MenuSubMenuItem {
  name: string;
  clickEvent: any;
}
