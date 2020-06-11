import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { NgModule } from '@angular/core';

import { TransferHttpCacheModule } from '@nguniversal/common';  

import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ModalModule } from './modal/modal.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';

import { DirectivesModule } from './directives/directives.module';

import { WhatsappService } from './services/whatsapp.service';
import { ClientAppService } from './services/client-app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalComponent } from './modal/modal.component';
import { ModalEmailComponent } from './modal/directives/modal-email/modal-email.component';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';
import { PrizeViewComponent } from './modules/prize-view/prize-view.component';
import { PrizeComponent } from './modules/prize/prize.component';
import { ViesPdfViewerComponent } from './modules/vies-pdf-viewer/vies-pdf-viewer.component';
import { SafePipe } from './filters/safe.pipe';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WhoWeAreComponent,
    PrizeViewComponent,
    PrizeComponent,
    ViesPdfViewerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'vies' }),
    TransferHttpCacheModule,
    LazyLoadImageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirectivesModule.forRoot(),
    ModalModule,
    HammerModule,
    FormsModule,
    NgxMaskModule.forRoot(),
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
