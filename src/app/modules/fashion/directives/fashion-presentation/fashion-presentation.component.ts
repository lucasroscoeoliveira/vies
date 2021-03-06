import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';

@Component({
  selector: 'app-fashion-presentation',
  templateUrl: './fashion-presentation.component.html',
  styleUrls: ['./fashion-presentation.component.scss']
})
export class FashionPresentationComponent implements OnInit {

  callPhrase: string;
  phrases: Array<string>;
  position: number;
  intervalEvent: any;
  
  constructor(public menu: Menu) { }

  ngOnInit(): void {
    this.position = 0;
    this.phrases = [
      'TORNE SEU AMBIENTE UM ALIADO NAS VENDAS E FIDELIZAÇÃO DE CLIENTES',
      'EM GERAL, APENAS 3 A 7% DO INVESTIMENTO TOTAL É DESTINADO AO PROJETO',
      'VITRINES CHAMATIVAS PODEM REPRESENTAR ATÉ 80% DAS VENDAS',
      'ALAVANQUE SEU NEGÓCIO E SE DIFERENCIE DA CONCORRÊNCIA!',
      'SEJA SEMPRE A 1ª OPÇÃO DO SEU CLIENTE, INVISTA NO SEU NEGÓCIO!',
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
