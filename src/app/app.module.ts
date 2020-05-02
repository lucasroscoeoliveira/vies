import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';

import { FashionModule } from './modules/fashion/fashion.module';
import { HouseModule } from './modules/house/house.module';
import { DirectivesModule } from './directives/directives.module';

import { Slider } from '../app/components-controllers/Slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FashionModule,
    HouseModule,
    DirectivesModule,
  ],
  providers: [
    Slider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
