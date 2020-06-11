import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionRoutingModule } from './fashion-routing.module';
import { FashionComponent } from './fashion.component';
import { FashionMainComponent } from './modules/fashion-main/fashion-main.component';
import { FashionProjectViewComponent } from './modules/fashion-project-view/fashion-project-view.component';
import { FashionQuizComponent } from './modules/fashion-quiz/fashion-quiz.component';
import { FashionServicesComponent } from './modules/fashion-services/fashion-services.component';
import { FashionPresentationComponent } from './directives/fashion-presentation/fashion-presentation.component';
import { FashionProjectsComponent } from './directives/fashion-projects/fashion-projects.component';
import { FashionServicesSessionComponent } from './directives/fashion-services-session/fashion-services-session.component';
import { FashionDiscoverStyleComponent } from './directives/fashion-discover-style/fashion-discover-style.component';
import { FashionTestimonialsComponent } from './directives/fashion-testimonials/fashion-testimonials.component';
import { LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    FashionComponent,
    FashionMainComponent,
    FashionProjectViewComponent,
    FashionQuizComponent,
    FashionServicesComponent,
    FashionPresentationComponent,
    FashionProjectsComponent,
    FashionServicesSessionComponent,
    FashionDiscoverStyleComponent,
    FashionTestimonialsComponent,
  ],
  imports: [
    CommonModule,
    FashionRoutingModule,
    LazyLoadImageModule
  ],
  providers: [
  ]
})
export class FashionModule { }
