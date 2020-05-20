import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-vi-menu',
  templateUrl: './vi-menu.component.html',
  styleUrls: ['./vi-menu.component.scss']
})
export class ViMenuComponent implements OnInit {

  menuOpened: boolean;
  @Input() menu: Menu;
  @Input() type: string;

  constructor(private router: Router, private scroll: ScrollTo) { }

  ngOnInit(): void {
    this.menuOpened = false;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    let drawer = document.getElementById("menu-content");

    if(this.menuOpened){
      drawer.style.width = "250px";
    } else {
      drawer.style.width = "0";
    }
  }

  closeMenu() {
    if(this.menuOpened){
      this.menuOpened = false;
      let drawer = document.getElementById("menu-content");
      drawer.style.width = "0px";
    }
  }

  onClickMenu(route: string) {
    if(this.type === 'house'){
      this.navigateToHouse(route);
    } else {
      console.log('implementar o fashion header');
    }
    this.closeMenu();
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
        this.scroll.navigateToRoute(this.scroll.states.main, 300);
        break;
      case 'whoWeAre':
        this.router.navigate(['quem-somos']);
        break;
      case 'projects':
        this.router.navigate(['casa/inicio', 'projetos']);
        this.scroll.navigateToRoute(this.scroll.states.projects, 300);
        break;
      case 'services':
        this.router.navigate(['casa/inicio', 'servicos']);
        this.scroll.navigateToRoute(this.scroll.states.services, 300);
        break;
      case 'quiz':
        this.router.navigate(['casa/inicio', 'quiz']);
        this.scroll.navigateToRoute(this.scroll.states.quiz, 300);
        break;
      case 'prize':
        this.router.navigate(['casa/premios']);
        break;
      case 'blog':
        //falta implementar o blog
        break;
      case 'contact':
        this.router.navigate(['casa/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300);
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
