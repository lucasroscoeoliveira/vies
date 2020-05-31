import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Header } from 'src/app/components-controllers/Header';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss']
})
export class PrizeComponent implements OnInit {

  headerImages: any;
  projectImages: any;
  videoImages: any;
  type: string;

  constructor(
    public router: Router,
    public header: Header,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.setHeaderImages();
    this.setProjectImages();
    this.setVideoImages();

    this.header.setActive('premio');

    if(this.route.params){
      this.route.params.subscribe(params => {
        this.type = params['type'] === 'casa' ? 'house' : 'fashion';
      });
    }
  }

  setHeaderImages() {
    this.headerImages = [
      {
        id: 1,
        image: environment.s3_public + '/House/Prize/morarmais-socias.jpg',
        label: 'Sócias da Viés, Amanda e Marina, no quarto da blogueira.'
      },
      {
        id: 2,
        image: environment.s3_public + '/House/Prize/morarmais-revista.jpg',
        label: 'Ganhamos o 2º lugar e fomos <br> capa da revista do evento!',
      },
      {
        id: 3,
        image: environment.s3_public + '/House/Prize/morarmais-deborah.jpg',
        label: 'A blogueira de moda Deborah Zandonna nos inspirou a projetar o quarto.'
      },
    ]
  }

  setProjectImages() {
    this.projectImages = [
      {
        id: 1,
        image: environment.s3_public + '/House/Prize/capablogueira-premio1.jpg',
      },
      {
        id: 2,
        image: environment.s3_public + '/House/Prize/capablogueira-premio2.jpg',
      },
      {
        id: 3,
        image: environment.s3_public + '/House/Prize/capablogueira-premio3.jpg',
      },
    ]
  }

  setVideoImages() {
    this.videoImages = [
      {
        id: 1,
        image: environment.s3_public + '/House/Prize/capavideo-bastidores.jpg',
        label: 'BASTIDORES',
        url: 'https://www.youtube.com/watch?v=1wp-3VxwKMw'
      },
      {
        id: 2,
        image: environment.s3_public + '/House/Prize/capa-video-globohorizonte.jpg',
        label: 'NA MÍDIA',
        url: 'https://www.youtube.com/watch?v=27FJ89SR__E'
      },
      {
        id: 3,
        image: environment.s3_public + '/House/Prize/capavideo-processo.jpg',
        label: 'O PROCESSO',
        url: 'https://www.youtube.com/watch?v=wO8CMNGkF1k'
      },
    ]
  }

  viewVideo(videoImage: any) {
    window.open(videoImage.url);
  }

  goToPrizeView(projectImage: any) {
    let routeType = this.getRouteNameFromType();
    this.router.navigate(['premios/detalhe', routeType, projectImage.id]);
  }

  getRouteNameFromType() {
    if(this.type === 'fashion'){
      return 'negocio';
    }
    return 'casa';
  }
}