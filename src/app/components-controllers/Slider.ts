import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class Slider {

  static instance: Slider;

  items: Array<Image>;

  constructor(){
    return Slider.instance = Slider.instance || this;
  }
}

@Injectable()
export class Image {
  source: string;
  sourceMobile?: string | '';
  active: Boolean;
  description?: string | '';
}
