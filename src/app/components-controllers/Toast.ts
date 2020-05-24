import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Toast {

  static instance: Toast;

  message: string;
  type: string;
  isOpen: boolean;
  callBack: any;

  constructor(){
    if(!this.callBack){
      this.callBack = this.emptyCallback();
    }
    return Toast.instance = Toast.instance || this;
  }

  success(message: string, time: number = 3) {
    if(this.isOpen){
      return;
    }
    this.open(message, 'success', time);

    setTimeout(() => {
      this.isOpen = false;
    }, time * 1000);
  }

  error(message: string, time: number = 3) {
    this.open(message, 'error', time);

    setTimeout(() => {
      this.isOpen = false;
    }, time * 1000);
  }

  private open(message: string, type: string, time: number = 3) {
    this.isOpen = true;
    this.message = message;
    this.type = type;
  }

  emptyCallback() {
    return null;
  }
}
