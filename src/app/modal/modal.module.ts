import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { Modal } from '../components-controllers/Modal';
import { ModalEmailComponent } from './directives/modal-email/modal-email.component';
import { ModalComponent } from './modal.component';



@NgModule({
  declarations: [
    ModalEmailComponent,
    ModalComponent,
  ],
  exports: [
    ModalEmailComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule.forRoot(),
    FormsModule,
    NgxMaskModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    Modal,
  ]
})
export class ModalModule { }
