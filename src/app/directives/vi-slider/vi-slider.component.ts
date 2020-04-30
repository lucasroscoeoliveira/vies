import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Slider, Image } from 'src/app/components-controllers/Slider';

@Component({
  selector: 'app-vi-slider',
  templateUrl: './vi-slider.component.html',
  styleUrls: ['./vi-slider.component.scss']
})
export class ViSliderComponent implements OnInit {

  @Input() images: Array<Image>;
  @Input() intervalNumber: number;
  intervalEvent: any;

  constructor() { }

  ngOnInit(): void {
    this.InitializeInterval();
  }

  ngOnDestroy() {
    if (this.intervalEvent) {
      clearInterval(this.intervalEvent);
    }
  }

  changeImageShown() {
    let checkedIndex = this.images.findIndex(image => image.active);
    if(checkedIndex === this.images.length - 1){
      checkedIndex = 0;
    } else {
      checkedIndex += 1;
    }


    this.images = this.images.map((image, index) => {
      if(index !== checkedIndex){
        image.active = false;
      } else {
        image.active = true;
      }

      return image;
    });
  }

  InitializeInterval() {
    this.intervalNumber = this.intervalNumber ? this.intervalNumber : 3000;

    this.intervalEvent = setInterval(() => {
      this.changeImageShown();
    }, this.intervalNumber)
  }
}
