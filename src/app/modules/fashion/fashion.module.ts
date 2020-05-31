import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { FashionComponent } from './fashion.component';
import { Header } from 'src/app/components-controllers/Header';
import { DirectivesModule } from 'src/app/directives/directives.module';


@NgModule({
  declarations: [
    FashionComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    AppRoutingModule
  ],
  providers: [
    Header
  ]
})
export class FashionModule { }
