import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { Modal } from 'src/app/components-controllers/Modal';
import { Toast } from 'src/app/components-controllers/Toast';

@Component({
  selector: 'app-house-call-to-action',
  templateUrl: './house-call-to-action.component.html',
  styleUrls: ['./house-call-to-action.component.scss']
})
export class HouseCallToActionComponent implements OnInit {

  socials: Array<string>;

  constructor(
    public whatsAppService: WhatsappService,
    public modal: Modal,
    public toast: Toast) { }

  ngOnInit(): void {

    this.socials = [
      './assets/imgs/logofacebook.jpg',
      './assets/imgs/logoinstagram.jpg',
      './assets/imgs/logoyoutube.jpg',
    ]
  }

  whatsApp() {
    this.whatsAppService.sendMessage(5531993357579);
  }

  email() {
    this.modal.open(
      'app-modal-email',
    )
  }

  setIsMobile() {
    return screen.width < 500
  }
}
