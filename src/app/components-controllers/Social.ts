import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Social {

  static instance: Social;

  constructor(){
    return Social.instance = Social.instance || this;
  }

  goToFacebook() {
      window.open('https://www.facebook.com/viesdesigncasa/');
  }

  goToInstagram() {
    window.open('https://www.instagram.com/viesdesigncasa/?hl=pt-br');
  }

  goToPinterest() {
    window.open('https://br.pinterest.com/designvies/');
  }

  goToYoutube() {
    window.open('https://www.youtube.com/user/viesdesign');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/company/vi%C3%A9s-design---ambientes-para-moda/');
  }
}