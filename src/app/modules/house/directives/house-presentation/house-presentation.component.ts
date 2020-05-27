import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-presentation',
  templateUrl: './house-presentation.component.html',
  styleUrls: ['./house-presentation.component.scss']
})
export class HousePresentationComponent implements OnInit {

  callPhrase: string;
  phrases: Array<string>;
  position: number;
  intervalEvent: any;

  constructor() { }

  ngOnInit(): void {
    this.position = 0;
    this.phrases = [
      'SINTA-SE EM CASA! PROJETAMOS SEU LAR, SEUS SONHOS!',
      'NÃO QUER OBRAS, MAS QUER RENOVAR SUA CASA?',
      'O VALOR DO PROJETO CORRESPONDE A 5% DO VALOR DA REFORMA',
      'SINTA-SE EM CASA! PROJETAMOS SEU LAR, SEUS SONHOS!',
    ];
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

}
