import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { FashionComponent } from './modules/fashion/fashion.component';
import { HouseComponent } from './modules/house/house.component';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';
import { HousePrizeComponent } from './modules/house/modules/house-prize/house-prize.component';
import { HouseQuizComponent } from './modules/house/modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house/modules/house-services/house-services.component';
import { HouseMainComponent } from './modules/house/modules/house-main/house-main.component';
import { HouseProjectViewComponent } from './modules/house/modules/house-project-view/house-project-view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'moda', component: FashionComponent
  },
  {
    path: 'casa', 
    component: HouseComponent,
    children: [
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
        path: 'projeto/:id',
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
      {
        path: 'quem-somos',
        component: WhoWeAreComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
