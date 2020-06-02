import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import ImagesConstants from 'src/app/utils/ImagesConstants';

@Component({
  selector: 'app-prize-view',
  templateUrl: './prize-view.component.html',
  styleUrls: ['./prize-view.component.scss']
})
export class PrizeViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public scroll: ScrollTo
  ) { }
  id: number;
  image: any;
  images: any;
  currIndex: number;
  pagesLabel: string;
  @Input() type: string;

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.type = params['type'] === 'casa' ? 'house' : 'fashion';
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
    this.images = ImagesConstants.PRIZES;
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
    let routeType = this.getRouteNameFromType();
    this.router.navigate(['premios']);
  }

  getRouteNameFromType() {
    if(this.type === 'fashion'){
      return 'negocio';
    }
    return 'casa';
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
