import { Injectable, OnInit } from '@angular/core';
import { Header } from './Header';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class ScrollTo {

    static instance: ScrollTo;
    states: any;

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

    navigateToRoute(routeName: string, timeout: number | null) {
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
    }

    // navigateToNewRoute(routeName: string) {
    //     switch (routeName) {
    //         case 'start':
    //             this.router.navigate(['casa/inicio']);
    //             case 'contact':
    //             this.router.navigate(['casa/inicio', 'contato']);
    //         case 'projects':
    //             this.router.navigate(['casa/inicio', 'projetos']);
    //         case 'services':
    //             this.router.navigate(['casa/inicio', 'servicos']);
    //         case 'quiz':
    //             this.router.navigate(['casa/inicio', 'quiz']);
    //     }
    // }

    // convertRouteParams(routeParam: string) {
    //     switch (routeParam) {
    //         case 'projetos':
    //             return this.states.projects;
    //         case 'quiz':
    //             return this.states.quiz;
    //         case 'contato':
    //             return this.states.contact;
    //         case 'servicos':
    //             return this.states.services;
    //         case '':
    //             return this.states.start;
    //     }
    // }
}