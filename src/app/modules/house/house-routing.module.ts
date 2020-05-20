import { HousePrizeComponent } from './modules/house-prize/house-prize.component';
import { HouseQuizComponent } from './modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house-services/house-services.component';
import { HouseMainComponent } from './modules/house-main/house-main.component';
import { HouseProjectViewComponent } from './modules/house-project-view/house-project-view.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routerConfig = [
  {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
  },
  {
      path: 'inicio',
      component: HouseMainComponent,
  },
  {
      path: 'inicio/:session',
      component: HouseMainComponent,
  },
  {
      path: 'projeto/:id/:tab',
      component: HouseProjectViewComponent,
  },
  {
      path: 'premios',
      component: HousePrizeComponent,
  },
  {
      path: 'quiz',
      component: HouseQuizComponent,
  },
  {
      path: 'servicos',
      component: HouseServicesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routerConfig),
  ],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
