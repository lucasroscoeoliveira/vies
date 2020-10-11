import { Injectable, OnInit, Input } from '@angular/core';
import { Menu } from './Menu';

@Injectable()
export class Social {

  static instance: Social;

  constructor() {
    return Social.instance = Social.instance || this;
  }

  goToFacebook(type: string) {
    debugger;
    switch (type) {
      case 'house':
        window.open('https://www.facebook.com/viescasa/');
        break;
      default:
        window.open('https://www.facebook.com/viesdesign/');
        break;
    }
  }

  goToInstagram(type: string) {
    switch (type) {
      case 'house':
        window.open('https://instagram.com/viescasa?igshid=9zzhn2xo4fq2');
        break;
      default:
        window.open('https://instagram.com/viesdesign?igshid=1mxx2r0u43oai');
        break;
    }
  }

  goToPinterest(type: string) {
    window.open('https://br.pinterest.com/designvies/');
  }

  goToYoutube(type: string) {
    window.open('https://www.youtube.com/user/viesdesign');
  }
}