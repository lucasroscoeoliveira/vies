import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferHttpCacheModule } from '@nguniversal/common';  

import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';

import { WhatsappService } from './services/whatsapp.service';
import { ClientAppService } from './services/client-app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WhoWeAreComponent } from './modules/who-we-are/who-we-are.component';
import { ModalComponent } from './modal/modal.component';
import { ModalEmailComponent } from './modal/directives/modal-email/modal-email.component';
import { Modal } from './components-controllers/Modal';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WhoWeAreComponent,
    ModalComponent,
    ModalEmailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'vies'}),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DirectivesModule,
    CommonModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    HttpClient,
    WhatsappService,
    ClientAppService,
    Modal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
