import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/components-controllers/Header';
import { HouseComponent } from './house.component';
import { HouseHeaderComponent } from './directives/house-header/house-header.component';
import { DirectivesModule } from 'src/app/directives/directives.module';


@NgModule({
  declarations: [
    HouseComponent,
    HouseHeaderComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  providers: [
    Header
  ]
})
export class HouseModule { }
