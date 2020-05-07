import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Header {

  static instance: Header;
  @Input() items: Array<HeaderMenuItem>;
  @Input() socials: Array<HeaderSubMenuItem>;

  constructor(){
    return Header.instance = Header.instance || this;
  }
}

@Injectable()
export class HeaderMenuItem {
  name: string;
  subItems: Array<HeaderSubMenuItem>;
  hasMenu: boolean;
  logo: boolean;
  routeName?: string;
}

@Injectable()
export class HeaderSubMenuItem {
  name: string;
}
