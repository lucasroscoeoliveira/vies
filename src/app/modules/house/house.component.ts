import { Component, OnInit, HostListener } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';
import { Header } from 'src/app/components-controllers/Header';
import { Title, Meta } from '@angular/platform-browser';
import { Toast } from 'src/app/components-controllers/Toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "casa";
  menu: Menu;
  header: Header;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setMenu();
    this.setHeader();

    this.titleService.setTitle("Viés – Projetos residenciais");
    this.metaTagService.updateTag({name: 'Casa', content: "Projeto personalizados de ambientes de casa"});
  }

  onScroll(event) {
    this.header.changeActiveOnScrollHouse();
  }

  setMenu() {
    this.menu = new Menu();
    this.menu.items = [
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
      {
        name: 'TESTE',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'quiz'
      },
      {
        name: 'PRÊMIO',
        subItems: [],
        hasMenu: true,
        logo: false,
        routeName: 'premio'
      },
      {
        name: 'BLOG',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'blog'
      },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato'
      },
    ];

    this.menu.socials = [
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

  setHeader() {
    this.header = new Header(this.router);
    this.header.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
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
      {
        name: 'BLOG',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'blog',
        focused: false
      },
      {
        name: 'CONTATO',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'contato',
        focused: false
      },
    ];

    this.header.socials = [
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
