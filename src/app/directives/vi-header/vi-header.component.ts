import { Component, OnInit, Input } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vi-header',
  templateUrl: './vi-header.component.html',
  styleUrls: ['./vi-header.component.scss']
})
export class ViHeaderComponent implements OnInit {

  @Input() header: Header;
  @Input() type: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(route: string) {
    if(this.type === 'house'){
      this.navigateToHouse(route);
    } else {
      console.log('implementar o fashion header');
    }
  }

  scrollTo(route: string){
    if(this.type === 'house'){
      this.scrollToHouse(route);
    } else {
      console.log('implementar o fashion header');
    }
  }

  navigateToHouse(route: string) {
    switch(route){
      case 'start':
        this.router.navigate(['casa/inicio']);
        break;
      case 'whoWeAre':
        this.router.navigate(['casa/quem-somos']);
        break;
      case 'projects':
        this.router.navigate(['casa/inicio', 'projetos']);
        setTimeout(() => this.scrollTo('projects'),500);
        break;
      case 'services':
        this.router.navigate(['casa/servicos']);
        break;
      case 'quiz':
        this.router.navigate(['casa/inicio', 'quiz']);
        setTimeout(() => this.scrollTo('quiz'),500);
        break;
      case 'prize':
        this.router.navigate(['casa/premios']);
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contact':
        this.router.navigate(['casa/inicio', 'contato']);
        setTimeout(() => this.scrollTo('contact'),500);
        break;
    }
  }

  scrollToHouse(route: string) {
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
