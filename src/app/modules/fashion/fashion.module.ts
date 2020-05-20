import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { Header } from 'src/app/components-controllers/Header';


@NgModule({
  declarations: [
    FashionComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    Header
  ]
})
export class FashionModule { }
