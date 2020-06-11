import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';
import { PrizeViewComponent } from './modules/prize-view/prize-view.component';
import { PrizeComponent } from './modules/prize/prize.component';
import { ViesPdfViewerComponent } from './modules/vies-pdf-viewer/vies-pdf-viewer.component';
import { HouseModule } from './modules/house/house.module';
import { FashionModule } from './modules/fashion/fashion.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'premios/detalhe/:id',
    component: PrizeViewComponent,
  },
  {
    path: 'premios',
    component: PrizeComponent,
  },
  {
    path: 'quem-somos',
    component: WhoWeAreComponent,
  },
  {
    path: 'conteudo/:id',
    component: ViesPdfViewerComponent,
  },
  {
    path: 'casa',
    loadChildren: () => HouseModule
  },
  {
    path: 'negocio',
    loadChildren: () => FashionModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
