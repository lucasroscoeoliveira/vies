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

  phrases: Array<string>;
  position: number;
  intervalEvent: any;
  callPhrase: string;

  constructor(
    public whatsAppService: WhatsappService,
    public modal: Modal,
    public toast: Toast) { }

  ngOnInit(): void {
    this.phrases = [
      'SINTA-SE EM CASA! PROJETAMOS SEU LAR, SEUS SONHOS!',
      'NÃO QUER OBRAS, MAS QUER RENOVAR SUA CASA?',
      'O VALOR DO PROJETO CORRESPONDE A 5% DO VALOR DA REFORMA',
      'SINTA-SE EM CASA! PROJETAMOS SEU LAR, SEUS SONHOS!',
    ]
    this.position = 0;
    this.callPhrase = this.phrases[this.position];
    this.initializeInterval();
  }

  initializeInterval() {
    this.intervalEvent = setInterval(() => {
      this.changePhraseShown();
    }, 3000);
  }

  changePhraseShown() {
    if(this.position === 3){
      this.position = 0;
    } else {
      this.position++;
    }
    this.callPhrase = this.phrases[this.position];
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
