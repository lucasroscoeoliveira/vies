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
  typeColor: string;

  constructor(
    private router: Router,
    public scroll: ScrollTo,
    public social: Social,
    public menu: Menu) { }

  ngOnInit(): void {
    this.menuOpened = false;
    this.typeColor = this.menu.type === 'house' ? 'green' : 'purple';
    if (!this.menu.items || this.menu.items.length === 0) {
      this.menu.setMenu('house');
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    let drawer = document.getElementById("menu-content");

    if(this.menuOpened){
      drawer.style.width = "300px";
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
    if(this.menu.type === 'house'){
      this.navigateToHouse(route);
    } else {
      this.navigateToFashion(route);
    }
    this.closeMenu();
  }

  navigateToFashion(route: string) {
    switch(route){
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
        this.router.navigate(['premios']);
        break;
      case 'contato':
        this.router.navigate(['negocio/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300, 'fashion');
        break;
    }
  }

  navigateToHouse(route: string) {
    switch(route){
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
        this.router.navigate(['premios']);
        break;
      case 'contato':
        this.router.navigate(['casa/inicio', 'contato']);
        this.scroll.navigateToRoute(this.scroll.states.contact, 300, 'house');
        break;
    }
  }

  getMainLogo() {
    if(this.menu.type === 'house'){
      return './assets/imgs/logo-casa-horizontal.png';
    } else {
      return './assets/imgs/logo-moda-horizontal.png';
    }
  }

  getSecondaryLogo() {
    if(this.menu.type === 'house'){
      return './assets/imgs/logo-moda-horizontal.png';
    } else {
      return './assets/imgs/logo-casa-horizontal.png';
    }
  }

  changeVies(position: string) {
    if (position === 'main') {
      if (this.menu.type === 'house') {
        this.navigateToHouse('vies');
      } else {
        this.navigateToFashion('vies')
      }
    } else {
      if (this.menu.type === 'house') {
        this.navigateToFashion('vies');
      } else {
        this.navigateToHouse('vies')
      }
    }
  }
}
