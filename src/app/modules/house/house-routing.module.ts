import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseComponent } from './house.component';
import { HouseMainComponent } from './modules/house-main/house-main.component';
import { HouseQuizComponent } from './modules/house-quiz/house-quiz.component';
import { HouseServicesComponent } from './modules/house-services/house-services.component';
import { HouseProjectViewComponent } from './modules/house-project-view/house-project-view.component';


const routes: Routes = [
  {
    path: '', 
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
        path: 'inicio/:session',
        component: HouseMainComponent,
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
        path: 'projeto/:id/:tab',
        component: HouseProjectViewComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
