import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';

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

  constructor() { }

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
        title: 'INDICAÇÃO DE MEDIDAS BÁSICAS',
        subtitle: ''
      },
    ]
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
        title: '3D REALÍSTICOS',
        subtitle: ''
      },
      {
        id: 4,
        title: 'DETALHAMENTO COMPLETO',
        subtitle: '(Especificações, marcenaria, marmoraria, iluminação,<br> tomadas, revestimentos...)'
      },
      {
        id: 5,
        title: 'ORÇAMENTO COM FORNECEDORES<br> (PRESENCIAL)',
        subtitle: ''
      },
    ]
  }
}
