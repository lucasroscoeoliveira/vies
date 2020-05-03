import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViButtonComponent } from './vi-button/vi-button.component';
import { ViSliderComponent } from './vi-slider/vi-slider.component';
import { ViSvgComponent } from './vi-svg/vi-svg.component';
import { ViMenuComponent } from './vi-menu/vi-menu.component';

@NgModule({
  declarations: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
  ],
  exports: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule { }
