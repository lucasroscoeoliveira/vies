import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { ViPrizeSessionComponent } from './vi-prize-session/vi-prize-session.component';
import { ViCarouselComponent } from './vi-carousel/vi-carousel.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Toast } from '../components-controllers/Toast';
import { Header } from '../components-controllers/Header';
import { Menu } from '../components-controllers/Menu';
import { Slider } from '../components-controllers/Slider';
import { Social } from '../components-controllers/Social';
import { ScrollTo } from '../components-controllers/ScrollTo';
import { Testimonial } from '../components-controllers/Testimonial';
import { ViProjectsComponent } from './vi-projects/vi-projects.component';
import { ViTestimonialsComponent } from './vi-testimonials/vi-testimonials.component';
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
    ViPrizeSessionComponent,
    ViCarouselComponent,
    ViProjectsComponent,
    ViTestimonialsComponent
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
    ViPrizeSessionComponent,
    ViCarouselComponent,
    ViProjectsComponent,
    ViTestimonialsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    NgxMaskModule.forRoot(),
  ]
})
export class DirectivesModule { 
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
      providers: [
        Toast,
        Header,
        Menu,
        Slider,
        Social,
        ScrollTo,
        Testimonial,
      ]
    }
  }
}
