import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'app-vi-svg',
  templateUrl: './vi-svg.component.html',
  styleUrls: ['./vi-svg.component.scss']
})
export class ViSvgComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }
}
