import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViButtonComponent } from './vi-button/vi-button.component';
import { ViSliderComponent } from './vi-slider/vi-slider.component';
import { ViSvgComponent } from './vi-svg/vi-svg.component';
import { ViHeaderComponent } from './vi-header/vi-header.component';
import { ViMenuComponent } from './vi-menu/vi-menu.component';

@NgModule({
  declarations: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
  ],
  exports: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule { }
