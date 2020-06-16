import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Menu } from 'src/app/components-controllers/Menu';

@Component({
  selector: 'app-house-services-session',
  templateUrl: './house-services-session.component.html',
  styleUrls: ['./house-services-session.component.scss']
})
export class HouseServicesSessionComponent implements OnInit {

  serviceCards: any;

  constructor(private router: Router, public scrollTo: ScrollTo, public menu: Menu) { }

  ngOnInit(): void {
    this.setServiceCards();
  }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.services, 300, 'house');
  }

  toggleOpened(serviceCard: any) {
    if (screen.width < 1100) {
      serviceCard.opened = !serviceCard.opened
    }
  }

  setServiceCards() {
    this.serviceCards = [
      {
        id: 1,
        title: 'PROJETO COMPLETO',
        subtitle: 'PRESENCIAL|ONLINE',
        image: 'icon-home3',
        mainImage: ImagesConstants.HOUSE_IMAGES.SERVICES.PROJETO,
        labels: [
          {
            id: 1,
            title: 'SOLUÇÕES 100% PERSONALIZADAS',
            subtitle: ''
          },
          {
            id: 2,
            title: 'PLANTA LAYOUT COMPLETA',
            subtitle: ''
          },
          {
            id: 3,
            title: '3D REALÍSTICO',
            subtitle: ''
          },
          {
            id: 4,
            title: 'ESPECIFICAÇÕES E DETALHAMENTO COMPLETO',
            subtitle: '(Móveis, marcenaria, marmoraria, iluminação,<br> tomadas, revestimentos...)'
          },
          {
            id: 5,
            title: 'INDICAÇÃO DE FORNECEDORES<br> E SUPORTE TÉCNICO',
            subtitle: ''
          },
        ]
      },
      {
        id: 1,
        title: 'CONSULTORIA',
        subtitle: 'PRESENCIAL|ONLINE',
        mainImage: ImagesConstants.HOUSE_IMAGES.SERVICES.CONSULTORIA,
        image: 'icon-clipboard',
        labels: [
          {
            id: 1,
            title: 'SOLUÇÕES SIMPLIFICADAS',
            subtitle: ''
          },
          {
            id: 2,
            title: 'PLANTA LAYOUT',
            subtitle: ''
          },
          {
            id: 3,
            title: '3D BÁSICO',
            subtitle: ''
          },
          {
            id: 4,
            title: 'ESPECIFICAÇÕES E MEDIDAS BÁSICAS',
            subtitle: ''
          }
        ]
      }
    ]

    this.serviceCards = this.serviceCards.map((serviceCard: any) => {
      serviceCard.opened = screen.width > 901
      return serviceCard;
    })
  }

  showPdf(id: number) {
    this.router.navigate(['conteudo', id]);
  }
}
