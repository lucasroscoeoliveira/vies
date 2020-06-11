import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionComponent } from './fashion.component';
import { FashionMainComponent } from './modules/fashion-main/fashion-main.component';
import { FashionQuizComponent } from './modules/fashion-quiz/fashion-quiz.component';
import { FashionServicesComponent } from './modules/fashion-services/fashion-services.component';
import { FashionProjectViewComponent } from './modules/fashion-project-view/fashion-project-view.component';


const routes: Routes = [
  {
    path: '',
    component: FashionComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: FashionMainComponent,
      },
      {
        path: 'inicio/:session',
        component: FashionMainComponent,
      },
      {
        path: 'quiz',
        component: FashionQuizComponent,
      },
      {
        path: 'servicos',
        component: FashionServicesComponent,
      },
      {
        path: 'projeto/:id/:tab',
        component: FashionProjectViewComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionRoutingModule { }
