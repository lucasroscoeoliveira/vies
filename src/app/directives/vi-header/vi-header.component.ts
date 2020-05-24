import { Component, OnInit, Input } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-vi-header',
  templateUrl: './vi-header.component.html',
  styleUrls: ['./vi-header.component.scss']
})
export class ViHeaderComponent implements OnInit {

  @Input() type: string;

  constructor(private router: Router, private scroll: ScrollTo, public header: Header) { }

  ngOnInit(): void {
  }

  onClick(route: string) {
    if(this.type === 'house'){
      this.navigateToHouse(route);
    } else {
      console.log('implementar o fashion header');
    }
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
        this.router.navigate(['casa/premios']);
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
}
