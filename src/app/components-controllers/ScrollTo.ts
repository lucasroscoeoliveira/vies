import { Injectable, OnInit } from '@angular/core';
import { Header } from './Header';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class ScrollTo {

  static instance: ScrollTo;
  states: any;
  blockScrollEvent: boolean = false;
  type: string = 'house';
  projectDivId: string;
  quizDivId: string;
  contactDivId: string;
  servicesDivId: string;
  viesDivId: string;
  scrollContainer: string;

  constructor(public header: Header, public router: Router) {
    this.states = {
      projects: 'projetos',
      quiz: 'quiz',
      contact: 'contato',
      services: 'servicos',
      vies: 'vies'
    };
    this.setMainDivs();
    return ScrollTo.instance = ScrollTo.instance || this;
  }

  setMainDivs() {
    this.scrollContainer = this.type === 'house' ? 'house-scroll-container' : 'fashion-scroll-container';
    this.projectDivId = this.type === 'house' ? 'house-projects' : 'fashion-projects';
    this.quizDivId = this.type === 'house' ? 'house-discover-style' : 'fashion-discover-style';
    this.contactDivId = this.type === 'house' ? 'house-call-to-action' : 'fashion-call-to-action';
    this.servicesDivId = this.type === 'house' ? 'house-services-session' : 'fashion-services-session';
    this.viesDivId = this.type === 'house' ? 'house-slider' : 'fashion-slider';
  }

  navigateToRoute(routeName: string, timeout: number, type: string) {
    this.blockScrollEvent = true;
    this.type = type;
    this.setMainDivs();

    setTimeout(() => {
      let content = null;
      switch (routeName) {
        case this.states.projects:
          content = document.getElementById(this.projectDivId);
          break;
        case this.states.quiz:
          content = document.getElementById(this.quizDivId);
          break;
        case this.states.contact:
          content = document.getElementById(this.contactDivId);
          break;
        case this.states.services:
          content = document.getElementById(this.servicesDivId);
          break;
        case this.states.vies:
          content = document.getElementById(this.viesDivId);
          break;
      }
      if (content) {
        this.header.setActive(routeName);
        content.scrollIntoView();
      }
    }, timeout);

    setTimeout(() => {
      this.blockScrollEvent = false;
    }, 1500);
  }

  changeActiveOnScroll(type: string) {
    this.type = type;
    this.setMainDivs();

    if (this.blockScrollEvent) {
      return;
    }

    let scroll = document.getElementById(this.scrollContainer);
    let mainElements = [
      document.getElementById(this.projectDivId),
      document.getElementById(this.servicesDivId),
      document.getElementById(this.quizDivId),
      document.getElementById(this.contactDivId),
    ]

    if (!scroll) {
      return;
    }

    let yTopPositions = mainElements.map((mainElement) => {
      if (!mainElement) {
        return;
      }
      let contentOffsetTop = mainElement.offsetTop;
      var scrollTop = scroll.offsetTop;
      return contentOffsetTop - scrollTop;
    });

    let currentPosition = scroll.scrollTop + 50;
    let prefix = this.type === 'house' ? 'casa' : 'negocio';

    yTopPositions.forEach((elPosition, index) => {
      if (index < yTopPositions.length - 1) {
        if (currentPosition >= yTopPositions[index] && currentPosition < yTopPositions[index + 1]) {
          switch (index) {
            case 0:
              this.router.navigate([`${prefix}/inicio`, 'projetos']);
              this.header.setActive('projetos');
              break;
            case 1:
              this.router.navigate([`${prefix}/inicio`, 'servicos']);
              this.header.setActive('servicos');
              break;
            case 2:
              this.router.navigate([`${prefix}/inicio`, 'quiz']);
              this.header.setActive('quiz');
              break;
          }
        }
      } else {
        if (currentPosition <= yTopPositions[0]) {
          this.router.navigate([`${prefix}/inicio`, 'vies']);
          this.header.setActive('vies');
        }
        if (currentPosition >= yTopPositions[yTopPositions.length - 1]) {
          this.router.navigate([`${prefix}/inicio`, 'contato']);
          this.header.setActive('contato');
        }
      }
    });
  }
}