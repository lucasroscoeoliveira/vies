import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { HouseServicesSessionComponent } from './directives/house-services-session/house-services-session.component';
import { HouseTestimonialsComponent } from './directives/house-testimonials/house-testimonials.component';
import { HouseDiscoverStyleComponent } from './directives/house-discover-style/house-discover-style.component';
import { HouseQuizComponent } from './modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house-services/house-services.component';
import { HouseMainComponent } from './modules/house-main/house-main.component';
import { HousePresentationComponent } from './directives/house-presentation/house-presentation.component';
import { HouseProjectViewComponent } from './modules/house-project-view/house-project-view.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HouseRoutingModule } from './house-routing.module';

@NgModule({
  declarations: [
    HouseComponent,
    HouseServicesSessionComponent,
    HouseTestimonialsComponent,
    HouseDiscoverStyleComponent,
    HouseQuizComponent,
    HouseServicesComponent,
    HouseMainComponent,
    HousePresentationComponent,
    HouseProjectViewComponent,
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    LazyLoadImageModule,
    DirectivesModule.forRoot(),
  ],
  providers: [
  ]
})
export class HouseModule { }
