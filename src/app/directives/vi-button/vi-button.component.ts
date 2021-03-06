import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vi-button',
  templateUrl: './vi-button.component.html',
  styleUrls: ['./vi-button.component.scss']
})
export class ViButtonComponent implements OnInit {

  @Input() type: string;
  @Input() wide: boolean;
  @Input() round: boolean;
  @Input() submit: boolean;
  @Input() isDisabled: boolean;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    if (!this.isDisabled) {
      this.onClick.emit();
    }
  }

  getBtnType() {
    if(this.submit){
      return 'submit';
    }
  }
}
