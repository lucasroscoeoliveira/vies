import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { NgModule } from '@angular/core';

import { TransferHttpCacheModule } from '@nguniversal/common';  

import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DirectivesModule } from './directives/directives.module';


import { WhatsappService } from './services/whatsapp.service';
import { ClientAppService } from './services/client-app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalModule } from './modal/modal.module';
import { LoginModule } from './modules/login/login.module';

import { registerLocaleData } from '@angular/common';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import localeBr from '@angular/common/locales/br';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

registerLocaleData(localeBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'vies' }),
    TransferHttpCacheModule,
    LazyLoadImageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule,
    HammerModule,
    LoginModule,
    DirectivesModule.forRoot(),
    FormsModule,
    NgxMaskModule.forRoot(),
    PinchZoomModule
  ],
  providers: [
    HttpClient,
    WhatsappService,
    ClientAppService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
