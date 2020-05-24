import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Header {

  static instance: Header;
  @Input() items: Array<HeaderMenuItem>;
  @Input() socials: Array<HeaderSubMenuItem>;

  constructor(){
    return Header.instance = Header.instance || this;
  }

  setActive(activeItem: HeaderMenuItem){
    this.items = this.items.map((item) => {
      if(item.name === activeItem.name){
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
