import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { Modal } from 'src/app/components-controllers/Modal';
import { FacebookService } from 'src/app/facebook.service';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-vi-social',
  templateUrl: './vi-social.component.html',
  styleUrls: ['./vi-social.component.scss']
})
export class ViSocialComponent implements OnInit {

  constructor(
    public whatsAppService: WhatsappService, 
    public modal: Modal,
    public facebookService: FacebookService,
    public header: Header) { }

  ngOnInit(): void {
  }

  whatsApp() {
    this.facebookService.registerEvent({
      name: 'Email',
      from: this.header.type
    }, 'Contact');

    this.whatsAppService.sendMessage(5531991557975);
  }

  email() {
    this.modal.open(
      'app-modal-email',
    )
  }
}
