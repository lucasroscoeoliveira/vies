import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Menu } from 'src/app/components-controllers/Menu';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-vi-prize-session',
  templateUrl: './vi-prize-session.component.html',
  styleUrls: ['./vi-prize-session.component.scss']
})
export class ViPrizeSessionComponent implements OnInit {

  styleImages: Array<any>;

  constructor(public menu: Menu, private router: Router, public scrollTo: ScrollTo) { }

  getBtnType() {
    if (this.menu.type === 'house') {
      return 'green';
    }
    return 'purple';
  }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.prize, 300, this.menu.type);
  }

  goToPrize() {
    this.router.navigate(['premios']);
  }

  viewVideo() {
    window.open('https://www.youtube.com/watch?v=27FJ89SR__E');
  }

  ngOnInit(): void {
    this.styleImages = [
      {
        id: 1,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.CAPA_VIDEO_3,
      },
      {
        id: 2,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.MORAR_MAIS_2,
      },
      {
        id: 3,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.MORAR_MAIS_3,
      },
      {
        id: 4,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.MORAR_MAIS_1,
      },
    ];
  }
}
