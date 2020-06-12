import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-prize-view',
  templateUrl: './prize-view.component.html',
  styleUrls: ['./prize-view.component.scss']
})
export class PrizeViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public header: Header,
    public scroll: ScrollTo
  ) { }
  id: number;
  image: any;
  images: any;
  currIndex: number;
  pagesLabel: string;

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.currIndex = this.id ? this.id - 1 : 0;
    this.initImages();
  }

  initImages() {
    this.getImages();
  }

  updateCurrIndex(currentIndex: number) {
    this.currIndex = currentIndex;
  }

  getImages() {
    this.images = ImagesConstants.PRIZES;
  }

  getPagesLabel() {
    return (this.currIndex + 1) + '/' + this.images.length;
  }

  goBack() {
    this.router.navigate(['premios']);
  }
}
