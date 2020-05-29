import { Injectable, OnInit } from '@angular/core';
import { Header } from './Header';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class ScrollTo {

    static instance: ScrollTo;
    states: any;
    blockScrollEvent: boolean = false;

    constructor(public header: Header, public router: Router) {
        this.states = {
            projects: 'projetos',
            quiz: 'quiz',
            contact: 'contato',
            services: 'servicos',
            vies: 'vies'
        };
        return ScrollTo.instance = ScrollTo.instance || this;
    }

    navigateToRoute(routeName: string, timeout: number) {
        this.blockScrollEvent = true;

        setTimeout(() => {
            let content = null;
            switch (routeName) {
                case this.states.projects:
                    content = document.getElementsByTagName('app-house-projects')[0];
                    break;
                case this.states.quiz:
                    content = document.getElementsByTagName('app-house-discover-style')[0];
                    break;
                case this.states.contact:
                    content = document.getElementsByTagName('app-house-call-to-action')[0];
                    break;
                case this.states.services:
                    content = document.getElementsByTagName('app-house-services-session')[0];
                    break;
                case this.states.vies:
                    content = document.getElementsByTagName('app-vi-slider')[0];
                    break;
            }
            if (content) {
                this.header.setActive(routeName);
                content.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }, timeout);

        setTimeout(() => {
            this.blockScrollEvent = false;
        }, 1500);
    }

    changeActiveOnScrollHouse() {

        if(this.blockScrollEvent){
            return;
        }

        let scroll = document.getElementById('house-scroll-container')
        let mainElements = [
          document.getElementById('house-projects'),
          document.getElementById('house-services-session'),
          document.getElementById('house-discover-style'),
          document.getElementById('house-call-to-action'),
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
    
        let currentPosition = scroll.scrollTop + 100;
        yTopPositions.forEach((elPosition, index) => {
          if(index < yTopPositions.length - 1){
            if(currentPosition >= yTopPositions[index] && currentPosition < yTopPositions[index + 1]){
              switch(index){
                case 0:
                  this.router.navigate(['casa/inicio', 'projetos']);
                  this.header.setActive('projetos');
                  break;
                case 1:
                  this.router.navigate(['casa/inicio', 'servicos']);
                  this.header.setActive('servicos');
                  break;
                case 2:
                  this.router.navigate(['casa/inicio', 'quiz']);
                  this.header.setActive('quiz');
                  break;
              }
            }
          } else {
            if(currentPosition <= yTopPositions[0]){
              this.router.navigate(['casa/inicio', 'vies']);
              this.header.setActive('vies');
            }
            if(currentPosition >= yTopPositions[yTopPositions.length - 1]){
              this.router.navigate(['casa/inicio', 'contato']);
              this.header.setActive('contato');
            }
          }
        });
      }
}