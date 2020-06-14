import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Menu } from 'src/app/components-controllers/Menu';

@Component({
  selector: 'app-fashion-services-session',
  templateUrl: './fashion-services-session.component.html',
  styleUrls: ['./fashion-services-session.component.scss']
})
export class FashionServicesSessionComponent implements OnInit {

  serviceCards: any;

  constructor(private router: Router, public scrollTo: ScrollTo, public menu: Menu) { }

  ngOnInit(): void {
    this.setServiceCards();
  }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.services, 300, 'fashion');
  }

  toggleOpened(serviceCard: any) {
    serviceCard.opened = !serviceCard.opened
  }

  setServiceCards() {
    this.serviceCards = [
      {
        image: 'icon-PROJETO',
        title: 'PROJETO COMPLETO',
        subtitle: 'PRESENCIAL | ONLINE',
        labels: [
          {
            main: 'SOLUÇÕES 100% PERSONALIZADAS'
          },
          {
            main: 'PLANTA LAYOUT COMPLETA'
          },
          {
            main: '3D REALÍSTICO'
          },
          {
            main: 'ESPECIFICAÇÕES E DETALHAMENTO COMPLETO',
            description: '(MÓVEIS, MARCENARIA, MARMORARIA, ILUMINAÇÃO, TOMADA, REVESTIMENTOS, ENTRE OUTROS)'
          },
          {
            main: 'INDICAÇÃO DE FORNECEDORES E SUPORTE TÉCNICO'
          },  
        ],
        btnLabel: 'VEJA UM EXEMPLO DE ENTREGA',
        pdfId: 1,
      },
      {
        image: 'icon-VITRINISMO',
        title: 'VITRINISMO',
        subtitle: 'PRESENCIAL | ONLINE',
        labels: [
          {
            main: '3D REALÍSTICO DA VITRINE'
          },
          {
            main: 'ESPECIFICAÇÕES E DETALHAMENTO'
          },
          {
            main: 'INDICAÇÃO DE FORNECEDORES (PRESENCIAL)'
          },
          {
            main: 'ACOMPANHAMENTO DA MONTAGEM (PRESENCIAL)'
          },  
        ],
        btnLabel: 'VEJA UM EXEMPLO DE ENTREGA',
        pdfId: 1,
      },
      {
        image: 'icon-CONSULTORIA',
        title: 'CONSULTORIA',
        subtitle: 'PRESENCIAL | ONLINE',
        labels: [
          {
            main: 'SOLUÇÕES + SIMPLIFICADAS'
          },
          {
            main: 'PLANTA LAYOUT'
          },
          {
            main: '3D BÁSICO'
          },
          {
            main: 'ESPECIFICAÇÕES E MEDIDAS BÁSICAS'
          },  
        ],
        btnLabel: 'VEJA UM EXEMPLO DE ENTREGA',
        pdfId: 1,
      },
      {
        image: 'icon-ID-VISUAL',
        title: 'IDENTIDADE VISUAL',
        subtitle: 'PRESENCIAL | ONLINE',
        labels: [
          {
            main: 'IDENTIDADE VISUAL (LOGOMARCA)'
          },
          {
            main: 'ARTE PARA ELEMENTOS COMPLEMENTARES COMO: CARTÕES DE VISITAS, SACOLAS, PAPELARIA ENTRE OUTROS'
          }
        ],
        btnLabel: 'VEJA UM EXEMPLO DE ENTREGA'
      },
      {
        image: 'icon-VISUAL-MERCH-1icon-VISUAL-MERCH',
        title: 'VISUAL MERCHANDISING',
        subtitle: 'PRESENCIAL | ONLINE',
        labels: [
          {
            main: 'ORGANIZAÇÃO DOS PRODUTOS NA VITRINE E ÁREA DE VENDAS'
          },
        ],
        btnLabel: 'VEJA FOTOS',
        pdfId: 1,
      },
      {
        image: 'icon-PALESTRAS',
        title: 'CURSOS | PALESTRAS | WORKSHOPS',
        subtitle: 'PRESENCIAL',
        labels: [
          {
            main: 'CURSO DE VITRINISMO'
          },
          {
            main: 'CURSO DE VITRINES TEMÁTICAS'
          },
          {
            main: 'TREINAMENTO DE VM PARA VENDEDORES'
          },
          {
            main: 'WORKSHOPS, PALESTRAS, OUTROS CURSOS'
          },
          {
            main: 'ORGANIZAÇÃO DOS PRODUTOS NA VITRINE E ÁREA DE VENDAS',
            description: '(DATAS E DETALHES A CONSULTAR)'
          }
        ],
        btnLabel: 'VEJA FOTOS',
        pdfId: 1,
      }
    ]

    this.serviceCards = this.serviceCards.map((serviceCard: any) => {
      serviceCard.opened = screen.width > 901
      return serviceCard;
    })
  }

  showPdf(pdfId: number) {
    this.router.navigate(['conteudo', pdfId]);
  }

}
