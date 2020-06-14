import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { FashionMainComponent } from './modules/fashion-main/fashion-main.component';
import { FashionProjectViewComponent } from './modules/fashion-project-view/fashion-project-view.component';
import { FashionQuizComponent } from './modules/fashion-quiz/fashion-quiz.component';
import { FashionServicesComponent } from './modules/fashion-services/fashion-services.component';
import { FashionPresentationComponent } from './directives/fashion-presentation/fashion-presentation.component';
import { FashionServicesSessionComponent } from './directives/fashion-services-session/fashion-services-session.component';
import { FashionDiscoverStyleComponent } from './directives/fashion-discover-style/fashion-discover-style.component';
import { FashionTestimonialsComponent } from './directives/fashion-testimonials/fashion-testimonials.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FashionRoutingModule } from './fashion-routing.module';


@NgModule({
  declarations: [
    FashionComponent,
    FashionMainComponent,
    FashionProjectViewComponent,
    FashionQuizComponent,
    FashionServicesComponent,
    FashionPresentationComponent,
    FashionServicesSessionComponent,
    FashionDiscoverStyleComponent,
    FashionTestimonialsComponent,
  ],
  imports: [
    CommonModule,
    FashionRoutingModule,
    LazyLoadImageModule,
    DirectivesModule.forRoot(),
  ],
  providers: [
  ]
})
export class FashionModule { }
