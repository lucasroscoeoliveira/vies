import { Component, OnInit, Input } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Social } from 'src/app/components-controllers/Social';

@Component({
  selector: 'app-vi-header',
  templateUrl: './vi-header.component.html',
  styleUrls: ['./vi-header.component.scss']
})
export class ViHeaderComponent implements OnInit {

  @Input() type: string;

  constructor(
    private router: Router, 
    private scroll: ScrollTo, 
    public header: Header,
    public social: Social) { }

  ngOnInit(): void {
    this.setHeader();
  }

  onClick(route: string) {
    if(this.type === 'house'){
      this.navigateToHouse(route);
    } else {
      console.log('implementar o fashion header');
    }
  }

  navigateToFashion(route: string) {
    
  }

  navigateToHouse(route: string) {
    switch(route){
      case 'vies':
        this.router.navigate(['casa/inicio', 'vies']);
        this.scroll.navigateToRoute(this.scroll.states.vies, 300);
        break;
      case 'quem-somos':
        this.router.navigate(['casa/quem-somos']);
        break;
      case 'projetos':
        this.router.navigate(['casa/inicio', 'projetos']);
        this.scroll.navigateToRoute(this.scroll.states.projects, 300);
        break;
      case 'servicos':
        this.router.navigate(['casa/inicio', 'servicos']);
        this.scroll.navigateToRoute(this.scroll.states.services, 300);
        break;
      case 'quiz':
        this.router.navigate(['casa/inicio', 'quiz']);
        this.scroll.navigateToRoute(this.scroll.states.quiz, 300);
        break;
      case 'premio':
        this.router.navigate(['premios/casa']);
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contato':
        this.router.navigate(['casa/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300);
        break;
    }
    this.header.setActive(route);
  }

  

  getMainLogo() {
    if(this.type === 'house'){
      return './assets/imgs/logo-casa-horizontal.png';
    } else {
      return './assets/imgs/logo-moda-horizontal.png';
    }
  }

  getSecondaryLogo() {
    if(this.type === 'house'){
      return './assets/imgs/logo-moda-horizontal.png';
    } else {
      return './assets/imgs/logo-casa-horizontal.png';
    }
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
}
