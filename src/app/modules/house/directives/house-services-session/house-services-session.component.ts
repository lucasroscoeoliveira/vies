import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-services-session',
  templateUrl: './house-services-session.component.html',
  styleUrls: ['./house-services-session.component.scss']
})
export class HouseServicesSessionComponent implements OnInit {

  projectImage: string;
  consultImage: string;
  serviceLabels: any;
  consultLabels: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projectImage = ImagesConstants.HOUSE_IMAGES.SERVICES.PROJETO;
    this.consultImage = ImagesConstants.HOUSE_IMAGES.SERVICES.CONSULTORIA;
    this.setServiceLabels();
    this.setConsultLabels();
  }

  setConsultLabels() {
    this.consultLabels = [
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
      },
    ]
  }

  showPdf(id: number) {
    this.router.navigate(['conteudo', id]);
  }

  setServiceLabels() {
    this.serviceLabels = [
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
  }
}
