import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { FashionComponent } from './modules/fashion/fashion.component';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "casa", 
    loadChildren: './modules/house/house.module#HouseModule'
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "quem-somos", component: WhoWeAreComponent
  },
  {
    path: "moda", component: FashionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
