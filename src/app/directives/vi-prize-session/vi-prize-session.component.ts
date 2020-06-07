import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Menu } from 'src/app/components-controllers/Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vi-prize-session',
  templateUrl: './vi-prize-session.component.html',
  styleUrls: ['./vi-prize-session.component.scss']
})
export class ViPrizeSessionComponent implements OnInit {

  styleImages: Array<any>;

  constructor(public menu: Menu, private router: Router) { }

  getBtnType() {
    if (this.menu.type === 'house') {
      return 'green';
    }
    return 'purple';
  }

  goToPrize() {
    this.router.navigate(['premios']);
  }

  ngOnInit(): void {
    this.styleImages = [
      {
        id: 1,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.BLOGUEIRA_PREMIO_1,
      },
      {
        id: 2,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.BLOGUEIRA_PREMIO_2,
      },
      {
        id: 3,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.BLOGUEIRA_PREMIO_3,
      },
      {
        id: 4,
        source: ImagesConstants.SHARED_IMAGES.PRIZES.BLOGUEIRA_PREMIO_4,
      },
    ];
  }
}