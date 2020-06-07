import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { Modal } from 'src/app/components-controllers/Modal';

@Component({
  selector: 'app-vi-social',
  templateUrl: './vi-social.component.html',
  styleUrls: ['./vi-social.component.scss']
})
export class ViSocialComponent implements OnInit {

  constructor(public whatsAppService: WhatsappService, public modal: Modal) { }

  ngOnInit(): void {
  }

  whatsApp() {
    this.whatsAppService.sendMessage(5531991557975);
  }

  email() {
    this.modal.open(
      'app-modal-email',
    )
  }
}
