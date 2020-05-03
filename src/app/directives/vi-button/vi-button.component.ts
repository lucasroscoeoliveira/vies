import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vi-button',
  templateUrl: './vi-button.component.html',
  styleUrls: ['./vi-button.component.scss']
})
export class ViButtonComponent implements OnInit {

  @Input() type: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    this.onClick.emit();
  }

}
