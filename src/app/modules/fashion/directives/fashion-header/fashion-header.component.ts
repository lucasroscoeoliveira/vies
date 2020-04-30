import { Component, OnInit } from '@angular/core';
import { FashionHeader } from 'src/app/components-controllers/FashionHeader';

@Component({
  selector: 'app-fashion-header',
  templateUrl: './fashion-header.component.html',
  styleUrls: ['./fashion-header.component.scss']
})
export class FashionHeaderComponent implements OnInit {

  constructor(public fashionHeader: FashionHeader) { }

  ngOnInit(): void {
    this.fashionHeader.setMenu();
  }

}
