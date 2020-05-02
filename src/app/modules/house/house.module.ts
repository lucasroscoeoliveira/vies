import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { HouseHeaderComponent } from './directives/house-header/house-header.component';
import { HouseCallToActionComponent } from './directives/house-call-to-action/house-call-to-action.component';
import { HouseProjectsComponent } from './directives/house-projects/house-projects.component';
import { HouseTestimonialsComponent } from './directives/house-testimonials/house-testimonials.component';
import { DirectivesModule } from 'src/app/directives/directives.module';


@NgModule({
  declarations: [
    HouseComponent,
    HouseHeaderComponent,
    HouseCallToActionComponent,
    HouseProjectsComponent,
    HouseTestimonialsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  providers: [
  ]
})
export class HouseModule { }
