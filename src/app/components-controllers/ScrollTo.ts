import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ScrollTo {

    static instance: ScrollTo;
    states: any;

    constructor() {
        this.states = {
            projects: 'projects',
            quiz: 'quiz',
            contact: 'contact',
            services: 'services',
            main: 'main'
        };
        return ScrollTo.instance = ScrollTo.instance || this;
    }

    navigateToRoute(routeName: string, timeout: number | null) {
        routeName = this.convertRouteParams(routeName);
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
            case this.states.main:
                content = document.getElementsByTagName('app-vi-slider')[0];
                break;
        }

        if (content) {
            setTimeout(() => {
                content.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }, timeout);
        }
    }

    convertRouteParams(routeParam: string) {
        switch (routeParam) {
            case 'projetos':
                return this.states.projects;
            case 'quiz':
                return this.states.quiz;
            case 'contato':
                return this.states.contact;
            case 'servicos':
                return this.states.services;
            default:
                return routeParam;
        }
    }
}