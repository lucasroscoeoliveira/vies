import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Social {

  static instance: Social;

  constructor(){
    return Social.instance = Social.instance || this;
  }

  goToFacebook() {
      window.open('https://www.facebook.com/viescasa/');
  }

  goToInstagram() {
    window.open('https://instagram.com/viescasa?igshid=9zzhn2xo4fq2');
  }

  goToPinterest() {
    window.open('https://br.pinterest.com/designvies/');
  }

  goToYoutube() {
    window.open('https://www.youtube.com/user/viesdesign');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/company/vi%C3%A9s-design---ambientes-para-moda/about/?viewAsMember=true');
  }
}