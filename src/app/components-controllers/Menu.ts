import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Menu {

  static instance: Menu;
  @Input() items: Array<MenuMenuItem>;
  @Input() socials: Array<MenuSubMenuItem>;

  constructor(){
    return Menu.instance = Menu.instance || this;
  }
}

@Injectable()
export class MenuMenuItem {
  name: string;
  subItems: Array<MenuSubMenuItem>;
  hasMenu: boolean;
  logo: boolean;
  routeName?: string;
}

@Injectable()
export class MenuSubMenuItem {
  name: string;
}
