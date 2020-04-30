import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViButtonComponent } from './vi-button/vi-button.component';
import { ViSliderComponent } from './vi-slider/vi-slider.component';
import { ViSvgComponent } from './vi-svg/vi-svg.component';

@NgModule({
  declarations: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
  ],
  exports: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule { }
