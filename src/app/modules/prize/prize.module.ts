import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { PrizeViewComponent } from './modules/prize-view/prize-view.component';
import { PrizeComponent } from './prize.component';
import { PrizeRoutingModule } from './prize-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    PrizeViewComponent,
    PrizeComponent,
  ],
  imports: [
    CommonModule,
    PrizeRoutingModule,
    LazyLoadImageModule,
    DirectivesModule.forRoot(),
  ]
})
export class PrizeModule { }
