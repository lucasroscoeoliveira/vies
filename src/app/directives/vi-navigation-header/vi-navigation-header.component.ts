import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vi-navigation-header',
  templateUrl: './vi-navigation-header.component.html',
  styleUrls: ['./vi-navigation-header.component.scss']
})
export class ViNavigationHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Output() onGoBack = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.onGoBack.emit(null);
  }
}
