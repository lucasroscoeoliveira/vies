import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-header',
  templateUrl: './house-header.component.html',
  styleUrls: ['./house-header.component.scss']
})
export class HouseHeaderComponent implements OnInit {

  constructor(public houseHeader: Header, private router: Router) { }

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

  onClick(route: string) {
    switch(route){
      case 'start':
        this.router.navigate(['casa/inicio']);
        break;
      case 'whoWeAre':
        this.router.navigate(['casa/quem-somos']);
        break;
      case 'projects':
        this.router.navigate(['casa/inicio']);
        setTimeout(() => this.scrollTo('projects'),500);
        break;
      case 'services':
        this.router.navigate(['casa/servicos']);
        break;
      case 'quiz':
        this.router.navigate(['casa/inicio']);
        setTimeout(() => this.scrollTo('quiz'),500);
        break;
      case 'prize':
        this.router.navigate(['casa/premios']);
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contact':
        this.router.navigate(['casa/inicio']);
        setTimeout(() => this.scrollTo('contact'),500);
        break;
    }
  }

  scrollTo(route: string){
    let content = null;

    switch(route){
      case 'projects':
        content = document.getElementsByTagName('app-house-projects')[0];
        break;
      case 'quiz':
        content = document.getElementsByTagName('app-house-discover-style')[0];
        break;
      case 'contact':
        content = document.getElementsByTagName('app-house-call-to-action')[0];
        break;  
    }
    if(content){
      content.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
}
