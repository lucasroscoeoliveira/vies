import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViButtonComponent } from './vi-button/vi-button.component';
import { ViSliderComponent } from './vi-slider/vi-slider.component';
import { ViSvgComponent } from './vi-svg/vi-svg.component';
import { ViHeaderComponent } from './vi-header/vi-header.component';
import { ViMenuComponent } from './vi-menu/vi-menu.component';
import { ViNavigationHeaderComponent } from './vi-navigation-header/vi-navigation-header.component';
import { ViFooterComponent } from './vi-footer/vi-footer.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { Header } from '../components-controllers/Header';
import { Menu } from '../components-controllers/Menu';
import { ScrollTo } from '../components-controllers/ScrollTo';
import { Slider } from '../components-controllers/Slider';

@NgModule({
  declarations: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
    ViNavigationHeaderComponent,
    ViFooterComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    RouterModule,
  ],
  exports: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
    ViNavigationHeaderComponent,
    ViFooterComponent,
  ],
  providers: [
    Header,
    Menu,
    ScrollTo,
    Slider,
  ],
})
export class DirectivesModule { 
  
}
