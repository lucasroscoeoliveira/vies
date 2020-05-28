import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Social } from 'src/app/components-controllers/Social';

@Component({
  selector: 'app-vi-menu',
  templateUrl: './vi-menu.component.html',
  styleUrls: ['./vi-menu.component.scss']
})
export class ViMenuComponent implements OnInit {

  menuOpened: boolean;
  @Input() menu: Menu;
  @Input() type: string;

  constructor(private router: Router, public scroll: ScrollTo, public social: Social) { }

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
      case 'prize':
        this.router.navigate(['casa/premios']);
        break;
      case 'premio':
        this.router.navigate(['casa/premios']);
        break;
      case 'contato':
        this.router.navigate(['casa/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300);
        break;
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
