import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';

@Component({
  selector: 'app-vi-menu',
  templateUrl: './vi-menu.component.html',
  styleUrls: ['./vi-menu.component.scss']
})
export class ViMenuComponent implements OnInit {

  menuOpened: boolean;
  @Input() items: Menu;

  constructor() { }

  ngOnInit(): void {
    this.menuOpened = false;
    debugger;
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
}
