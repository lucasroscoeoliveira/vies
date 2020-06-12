import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizeComponent } from './prize.component';
import { PrizeViewComponent } from './modules/prize-view/prize-view.component';


const routes: Routes = [
  {
    path: '',
    component: PrizeComponent,
  },
  {
    path: 'detalhe/:id',
    component: PrizeViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrizeRoutingModule { }
