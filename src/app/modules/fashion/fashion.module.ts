import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  providers: [
    Header
  ]
})
export class FashionModule { }
