import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-vi-navigation-header',
  templateUrl: './vi-navigation-header.component.html',
  styleUrls: ['./vi-navigation-header.component.scss']
})
export class ViNavigationHeaderComponent implements OnInit {

  @Input() title: string;
  @Output() onGoBack = new EventEmitter();

  constructor(public header: Header) { }

  ngOnInit(): void {
  }

  goBack() {
    this.onGoBack.emit(null);
  }
}
