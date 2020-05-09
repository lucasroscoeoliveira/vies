import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { HouseCallToActionComponent } from './directives/house-call-to-action/house-call-to-action.component';
import { HouseServicesSessionComponent } from './directives/house-services-session/house-services-session.component';
import { HouseProjectsComponent } from './directives/house-projects/house-projects.component';
import { HouseTestimonialsComponent } from './directives/house-testimonials/house-testimonials.component';
import { HouseDiscoverStyleComponent } from './directives/house-discover-style/house-discover-style.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HousePrizeComponent } from './modules/house-prize/house-prize.component';
import { HouseQuizComponent } from './modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house-services/house-services.component';
import { HouseMainComponent } from './modules/house-main/house-main.component';
import { HouseProjectViewComponent } from './modules/house-project-view/house-project-view.component';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    HouseComponent,
    HouseCallToActionComponent,
    HouseServicesSessionComponent,
    HouseProjectsComponent,
    HouseTestimonialsComponent,
    HouseDiscoverStyleComponent,
    HousePrizeComponent,
    HouseQuizComponent,
    HouseServicesComponent,
    HouseMainComponent,
    HouseProjectViewComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    AppRoutingModule
  ],
  providers: [
  ]
})
export class HouseModule { }
