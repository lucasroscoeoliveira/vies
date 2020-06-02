import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HouseComponent } from './house.component';
import { HouseServicesSessionComponent } from './directives/house-services-session/house-services-session.component';
import { HouseProjectsComponent } from './directives/house-projects/house-projects.component';
import { HouseTestimonialsComponent } from './directives/house-testimonials/house-testimonials.component';
import { HouseDiscoverStyleComponent } from './directives/house-discover-style/house-discover-style.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HouseQuizComponent } from './modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house-services/house-services.component';
import { HouseMainComponent } from './modules/house-main/house-main.component';
import { HousePresentationComponent } from './directives/house-presentation/house-presentation.component';
import { HouseProjectViewComponent } from './modules/house-project-view/house-project-view.component';

@NgModule({
  declarations: [
    HouseComponent,
    HouseServicesSessionComponent,
    HouseProjectsComponent,
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
    DirectivesModule,
    AppRoutingModule
  ],
  providers: [
  ]
})
export class HouseModule { }
