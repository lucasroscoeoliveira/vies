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

  changeActiveOnScrollHouse() {
    let scroll = document.getElementById('house-scroll-container')
    let mainElements = [
      document.getElementById('house-call-to-action'),
      document.getElementById('house-projects'),
      document.getElementById('house-services-session'),
      document.getElementById('house-discover-style'),
    ]

    if(!scroll){
      return;
    }

    let yTopPositions = mainElements.map((mainElement) => {
      if(!mainElement){
        return;
      }
      let contentOffsetTop = mainElement.offsetTop;
      var scrollTop = scroll.offsetTop;
      return contentOffsetTop - scrollTop;
    });

    let currentPosition = scroll.scrollTop + 1;
    yTopPositions.forEach((elPosition, index) => {
      if(index < yTopPositions.length - 1){
        if(currentPosition >= yTopPositions[index] && currentPosition < yTopPositions[index + 1]){
          switch(index){
            case 0:
              this.router.navigate(['casa/inicio', 'contato']);
              this.setActive('contato');
              break;
            case 1:
              this.router.navigate(['casa/inicio', 'projetos']);
              this.setActive('projetos');
              break;
            case 2:
              this.router.navigate(['casa/inicio', 'servicos']);
              this.setActive('servicos');
              break;
          }
        }
      } else {
        if(currentPosition <= yTopPositions[0]){
          this.router.navigate(['casa/inicio', 'vies']);
          this.setActive('vies');
        }
        if(currentPosition >= yTopPositions[yTopPositions.length - 1]){
          this.router.navigate(['casa/inicio', 'quiz']);
          this.setActive('quiz');
        }
      }
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
