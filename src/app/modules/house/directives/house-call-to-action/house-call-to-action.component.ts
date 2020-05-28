import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { Modal } from 'src/app/components-controllers/Modal';
import { Toast } from 'src/app/components-controllers/Toast';
import { Social } from 'src/app/components-controllers/Social';

@Component({
  selector: 'app-house-call-to-action',
  templateUrl: './house-call-to-action.component.html',
  styleUrls: ['./house-call-to-action.component.scss']
})
export class HouseCallToActionComponent implements OnInit {

  socials: Array<any>;

  constructor(
    public whatsAppService: WhatsappService,
    public modal: Modal,
    public toast: Toast,
    public social: Social) { }

  ngOnInit(): void {

    this.socials = [
      {
        source: './assets/imgs/logofacebook.jpg',
        clickEvent: this.social.goToFacebook
      },
      {
        source: './assets/imgs/logoinstagram.jpg',
        clickEvent: this.social.goToInstagram
      },
      {
        source: './assets/imgs/logoyoutube.jpg',
        clickEvent: this.social.goToYoutube
      },
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
