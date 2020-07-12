declare const fbq: any; // 1. add an ambient declaration

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() { }

  registerEvent(data: any, type: string) {
    fbq('track', type, data);
    debugger
  }
}
