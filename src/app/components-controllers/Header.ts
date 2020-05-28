import { Injectable, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Header {

  static instance: Header;
  @Input() items: Array<HeaderMenuItem>;
  @Input() socials: Array<HeaderSubMenuItem>;

  constructor(private router: Router){
    return Header.instance = Header.instance || this;
  }

  setActive(routeName: string){
    this.items = this.items.map((item) => {
      if(item.routeName === routeName){
        item.focused = true;
      } else {
        item.focused = false;
      }
      return item;
    });
  }
}

@Injectable()
export class HeaderMenuItem {
  name: string;
  subItems: Array<HeaderSubMenuItem>;
  hasMenu: boolean;
  logo: boolean;
  routeName?: string;
  focused?: boolean;
}

@Injectable()
export class HeaderSubMenuItem {
  name: string;
}
