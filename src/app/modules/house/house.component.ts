import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';
import { Header } from 'src/app/components-controllers/Header';
import { Title, Meta } from '@angular/platform-browser';

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
  ) { }

  ngOnInit(): void {
    this.setMenu();
    this.setHeader();

    this.titleService.setTitle("Projetos de decoração de ambientes");
    this.metaTagService.updateTag({name: 'Casa', content: "Projeto personalizados de ambientes de casa"});
  }

  setMenu() {
    this.menu = new Menu();
    this.menu.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        routeName: 'start'
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'whoWeAre'
      },
      {
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projects'
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'services'
      },
      {
        name: 'QUIZ',
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
        routeName: 'prize'
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
        routeName: 'contact'
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
    this.header = new Header();
    this.header.items = [
      {
        name: 'INÍCIO',
        subItems: [],
        hasMenu: false,
        logo: true,
        routeName: 'start'
      },
      {
        name: 'QUEM SOMOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'whoWeAre'
      },
      {
        name: 'PROJETOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'projects'
      },
      {
        name: 'SERVIÇOS',
        subItems: [],
        hasMenu: false,
        logo: false,
        routeName: 'services'
      },
      {
        name: 'QUIZ',
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
        routeName: 'prize'
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
        routeName: 'contact'
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
