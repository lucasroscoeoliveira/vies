import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-vi-carousel',
  templateUrl: './vi-carousel.component.html',
  styleUrls: ['./vi-carousel.component.scss']
})
export class ViCarouselComponent implements OnInit {

  @Input() images: any;
  @Input() currentIndex: number;
  @Output() counterChange = new EventEmitter();
  containerDiv: any

  constructor(public header: Header) { }

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.initContainerSize();
  }

  initContainerSize() {
    this.containerDiv = document.getElementById('carousel-container');
    this.containerDiv.style.width = 100 * this.images.length + '%';
  }

  move(direction: string) {
    let calc = 0;

    if (direction === 'right' && this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
      this.counterChange.emit(this.currentIndex);
    }
    else if(direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
      this.counterChange.emit(this.currentIndex);
    }
  }

  checkLeftDisabled() {
    return this.currentIndex === 0;
  }

  checkRightDisabled() {
    return this.currentIndex === this.images.length - 1;
  }

  isBeforeAfter(image: any) {
    return image.sourceAfter;
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
