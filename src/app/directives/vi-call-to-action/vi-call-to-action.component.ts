import { Component, OnInit, Input } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { Modal } from 'src/app/components-controllers/Modal';
import { Toast } from 'src/app/components-controllers/Toast';
import { Social } from 'src/app/components-controllers/Social';
import { Header } from 'src/app/components-controllers/Header';
import { Menu } from 'src/app/components-controllers/Menu';
import { FacebookService } from 'src/app/facebook.service';

@Component({
  selector: 'app-vi-call-to-action',
  templateUrl: './vi-call-to-action.component.html',
  styleUrls: ['./vi-call-to-action.component.scss']
})
export class ViCallToActionComponent implements OnInit {

  socials: Array<any>;

  constructor(    
    public whatsAppService: WhatsappService,
    public modal: Modal,
    public toast: Toast,
    public social: Social,
    public header: Header,
    public menu: Menu,
    public facebookService: FacebookService
  ) { }

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
    this.facebookService.registerEvent({
      name: 'Whatsapp',
      from: this.menu.type
    }, 'Contact');
    
    this.whatsAppService.sendMessage(5531991557975);
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
