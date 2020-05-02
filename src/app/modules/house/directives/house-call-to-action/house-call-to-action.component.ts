import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    debugger;
  }

  email() {

  }
}
