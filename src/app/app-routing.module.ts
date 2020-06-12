import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionModule } from './modules/fashion/fashion.module';
import { HouseModule } from './modules/house/house.module';
import { WhoWeAreModule } from './modules/who-we-are/who-we-are.module';
import { ViesPdfViewerModule } from './modules/vies-pdf-viewer/vies-pdf-viewer.module';
import { PrizeModule } from './modules/prize/prize.module';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'premios',
    loadChildren: () => PrizeModule,
  },
  {
    path: 'conteudo/:id',
    loadChildren: () => ViesPdfViewerModule,
  },
  {
    path: 'quem-somos',
    loadChildren: () => WhoWeAreModule,
  },
  {
    path: 'casa', 
    loadChildren: () => HouseModule
  },
  {
    path: 'negocio',
    loadChildren: () => FashionModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
