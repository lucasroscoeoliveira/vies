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
        title: 'SOLUÇÕES SIMPLIFICADAS',
        subtitle: ''
      },
      {
        title: 'PLANTA LAYOUT',
        subtitle: ''
      },
      {
        title: '3D BÁSICO',
        subtitle: ''
      },
      {
        title: 'INDICAÇÃO DE MEDIDAS BÁSICAS',
        subtitle: ''
      },
    ]
  }

  setServiceLabels() {
    this.serviceLabels = [
      {
        title: 'SOLUÇÕES 100% PERSONALIZADAS',
        subtitle: ''
      },
      {
        title: 'PLANTA LAYOUT COMPLETA',
        subtitle: ''
      },
      {
        title: '3D REALÍSTICOS',
        subtitle: ''
      },
      {
        title: 'DETALHAMENTO COMPLETO',
        subtitle: '(Especificações, marcenaria, marmoraria, iluminação,<br> tomadas, revestimentos...)'
      },
      {
        title: 'ORÇAMENTO COM FORNECEDORES<br> (PRESENCIAL)',
        subtitle: ''
      },
    ]
  }

}
