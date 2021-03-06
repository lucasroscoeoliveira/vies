import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';

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

  constructor(public menu: Menu) { }

  ngOnInit(): void {
    this.position = 0;
    this.phrases = [
      'SINTA-SE EM CASA! SEU LAR COMO VOCÊ SEMPRE SONHOU!',
      'APENAS 3 A 7% DO INVESTIMENTO TOTAL É DESTINADO AO PROJETO',
      'TENHA SEU PROJETO, O CUSTO-BENEFÍCIO VAI TE SURPEENDER!',
      'TENHA UM PROJETO OU CONSULTORIA PARA A SUA CASA!',
      'É POSSÍVEL TRANFORMAR SEM GRANDES OBRAS E COM BAIXOS CUSTOS!',
    ];
    this.callPhrase = this.phrases[this.position];
    this.initializeInterval();
  }

  initializeInterval() {
    this.intervalEvent = setInterval(() => {
      this.changePhraseShown();
    }, 5000);
  }

  changePhraseShown() {
    if(this.position === this.phrases.length - 1){
      this.position = 0;
    } else {
      this.position++;
    }
    this.callPhrase = this.phrases[this.position];
  }

}
