import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
    this.position = 0;
    this.phrases = [
      'FIDELIZE SEUS CLIENTE COM UM ESPAÇO ATRATIVO',
      'TORNE O AMBIENTE UM ALIADO DO SEU NEGÓCIO',
      'AMBIENTES BEM PENSADOS GERAM MAIS RESULTADOS',
      'PROJETOS CORRESPONDEM DE 2 A 5% DOS CUSTOS DA REFORMA',
      'TENHA SUA VITRINE COMO UM VENDEDOR A MAIS!',
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
    if(this.position === this.phrases.length - 1){
      this.position = 0;
    } else {
      this.position++;
    }
    this.callPhrase = this.phrases[this.position];
  }
}
