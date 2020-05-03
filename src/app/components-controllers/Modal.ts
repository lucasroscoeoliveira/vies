import { Injectable, OnInit, Input } from '@angular/core';

@Injectable()
export class Modal {

  static instance: Modal;

  name: string;
  data: any;
  isOpen: boolean;
  callBack: any;

  constructor(){
    if(!this.callBack){
      this.callBack = this.emptyCallback();
    }
    return Modal.instance = Modal.instance || this;
  }

  open(name: string, modalData: any, callBack: any) {
    if(this.isOpen){
      this.close();
    }
    this.isOpen = true;
    this.name = name;
    this.data = modalData;
    this.callBack = callBack;
  }

  close() {
    this.isOpen = false;
    this.name = '';
    this.data = {};
    this.callBack = this.emptyCallback;
  }

  getData() {
    return this.data;
  }

  emptyCallback() {
    return null;
  }

  executeCallBack() {
    debugger;
    if(this.callBack){
      this.callBack();
    }
  }
}
