import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import HouseProjectConstants from 'src/app/utils/HouseProjectConstants';

@Component({
  selector: 'app-house-prize-view',
  templateUrl: './house-prize-view.component.html',
  styleUrls: ['./house-prize-view.component.scss']
})
export class HousePrizeViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public scroll: ScrollTo) { }

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
    this.setPagesLabel();
  }

  setPagesLabel() {
    this.pagesLabel = (this.currIndex + 1) + '/' + this.images.length;
  }

  initImages() {
    this.getImages();
    this.setImage();
  }

  getImages() {
    this.images = HouseProjectConstants.PRIZES;
  }

  setImage() {
    this.image = this.images[this.currIndex];
  }

  move(direction: string) {
    if (direction === 'right') {
      if (!this.visibleRightArrow()) {
        return;
      }
      this.moveRight();
    }
    else {
      if (!this.visibleLeftArrow()) {
        return;
      }
      this.moveLeft();
    }
    this.setImage();
    this.setPagesLabel();
  }

  moveRight() {
    if (this.currIndex === this.images.length - 1) {
      this.currIndex = 0;
    } else {
      this.currIndex++;
    }
  }

  moveLeft() {
    if (this.currIndex === 0) {
      this.currIndex = this.images.length - 1;
    } else {
      this.currIndex--;
    }
  }

  visibleRightArrow() {
    return this.currIndex < this.images.length - 1;
  }

  visibleLeftArrow() {
    return this.currIndex > 0
  }

  goBack() {
    this.router.navigate(['casa/premios']);
    this.scroll.navigateToRoute(this.scroll.states.projects, 500);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let keyPressed = event.keyCode;
    switch (keyPressed) {
      case 39:
        this.move('right');
        break;
      case 37:
        this.move('left');
    }
  }

}
