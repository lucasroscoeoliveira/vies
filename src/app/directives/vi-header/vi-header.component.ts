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

  constructor(
    private router: Router,
    private scroll: ScrollTo,
    public header: Header,
    public social: Social) { }

  ngOnInit(): void {
    if (!this.header.items || this.header.items.length === 0) {
      this.header.setHeader('house');
    }
  }

  onClick(route: string) {
    if (this.header.type === 'house') {
      this.navigateToHouse(route);
    } else {
      this.navigateToFashion(route);
    }
  }

  navigateToFashion(route: string) {
    switch (route) {
      case 'vies':
        this.router.navigate(['negocio/inicio', 'vies']);
        this.scroll.navigateToRoute(this.scroll.states.vies, 300, 'fashion');
        break;
      case 'quem-somos':
        this.router.navigate(['quem-somos']);
        break;
      case 'projetos':
        this.router.navigate(['negocio/inicio', 'projetos']);
        this.scroll.navigateToRoute(this.scroll.states.projects, 300, 'fashion');
        break;
      case 'servicos':
        this.router.navigate(['negocio/inicio', 'servicos']);
        this.scroll.navigateToRoute(this.scroll.states.services, 300, 'fashion');
        break;
      case 'quiz':
        this.router.navigate(['negocio/inicio', 'quiz']);
        this.scroll.navigateToRoute(this.scroll.states.quiz, 300, 'fashion');
        break;
      case 'premio':
        this.router.navigate(['negocio/inicio', 'premio']);
        this.scroll.navigateToRoute(this.scroll.states.prize, 300, 'fashion');
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contato':
        this.router.navigate(['negocio/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300, 'fashion');
        break;
    }
    this.header.setActive(route);
  }

  navigateToHouse(route: string) {
    switch (route) {
      case 'vies':
        this.router.navigate(['casa/inicio', 'vies']);
        this.scroll.navigateToRoute(this.scroll.states.vies, 300, 'house');
        break;
      case 'quem-somos':
        this.router.navigate(['quem-somos']);
        break;
      case 'projetos':
        this.router.navigate(['casa/inicio', 'projetos']);
        this.scroll.navigateToRoute(this.scroll.states.projects, 300, 'house');
        break;
      case 'servicos':
        this.router.navigate(['casa/inicio', 'servicos']);
        this.scroll.navigateToRoute(this.scroll.states.services, 300, 'house');
        break;
      case 'quiz':
        this.router.navigate(['casa/inicio', 'quiz']);
        this.scroll.navigateToRoute(this.scroll.states.quiz, 300, 'house');
        break;
      case 'premio':
        this.router.navigate(['casa/inicio', 'premio']);
        this.scroll.navigateToRoute(this.scroll.states.prize, 300, 'house');
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contato':
        this.router.navigate(['casa/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300, 'house');
        break;
    }
    this.header.setActive(route);
  }

  getMainLogo() {
    if (this.header.type === 'house') {
      return './assets/imgs/logo-casa-horizontal.png';
    } else {
      return './assets/imgs/logo-moda-horizontal.png';
    }
  }

  getSecondaryLogo() {
    if (this.header.type === 'house') {
      return './assets/imgs/logo-moda-horizontal.png';
    } else {
      return './assets/imgs/logo-casa-horizontal.png';
    }
  }

  changeVies(position: string) {
    if (position === 'main') {
      if (this.header.type === 'house') {
        this.navigateToHouse('vies');
      } else {
        this.navigateToFashion('vies')
      }
    } else {
      if (this.header.type === 'house') {
        this.navigateToFashion('vies');
      } else {
        this.navigateToHouse('vies')
      }
    }
  }
}
