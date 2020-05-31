import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ViButtonComponent } from './vi-button/vi-button.component';
import { ViSliderComponent } from './vi-slider/vi-slider.component';
import { ViSvgComponent } from './vi-svg/vi-svg.component';
import { ViHeaderComponent } from './vi-header/vi-header.component';
import { ViMenuComponent } from './vi-menu/vi-menu.component';
import { ViNavigationHeaderComponent } from './vi-navigation-header/vi-navigation-header.component';
import { ViFooterComponent } from './vi-footer/vi-footer.component';
import { ViToastComponent } from './vi-toast/vi-toast.component';
import { ViSocialComponent } from './vi-social/vi-social.component';
import { ViCallToActionComponent } from './vi-call-to-action/vi-call-to-action.component';

@NgModule({
  declarations: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
    ViNavigationHeaderComponent,
    ViFooterComponent,
    ViToastComponent,
    ViSocialComponent,
    ViCallToActionComponent,
  ],
  exports: [
    ViButtonComponent,
    ViSliderComponent,
    ViSvgComponent,
    ViMenuComponent,
    ViHeaderComponent,
    ViNavigationHeaderComponent,
    ViFooterComponent,
    ViToastComponent,
    ViSocialComponent,
    ViCallToActionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class DirectivesModule { }
