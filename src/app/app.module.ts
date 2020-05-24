import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TransferHttpCacheModule } from '@nguniversal/common';  

import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';

import { FashionModule } from './modules/fashion/fashion.module';
import { HouseModule } from './modules/house/house.module';
import { DirectivesModule } from './directives/directives.module';

import { Slider } from '../app/components-controllers/Slider';
import { Header } from '../app/components-controllers/Header';
import { Menu } from '../app/components-controllers/Menu';
import { Modal } from '../app/components-controllers/Modal';
import { Testimonial } from '../app/components-controllers/Testimonial';
import { ScrollTo } from '../app/components-controllers/ScrollTo';
import { Toast } from '../app/components-controllers/Toast';

import { WhatsappService } from './services/whatsapp.service';
import { ClientAppService } from './services/client-app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalComponent } from './modal/modal.component';
import { ModalEmailComponent } from './modal/directives/modal-email/modal-email.component';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalEmailComponent,
    ModalComponent,
    WhoWeAreComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'vies'}),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
    FashionModule,
    BrowserAnimationsModule,
    HouseModule,
    HammerModule,
    DirectivesModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    Slider,
    ScrollTo,
    Testimonial,
    HttpClient,
    Header,
    Menu,
    Modal,
    Toast,
    WhatsappService,
    ClientAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
