import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';  

import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
    NoopAnimationsModule,
    HttpClientModule,
    FashionModule,
    HouseModule,
    DirectivesModule,
    FormsModule,
    MatInputModule,
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
    WhatsappService,
    ClientAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
