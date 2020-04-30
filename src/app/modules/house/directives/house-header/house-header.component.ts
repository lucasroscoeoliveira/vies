import { Component, OnInit } from '@angular/core';
import { HouseHeader } from 'src/app/components-controllers/HouseHeader';

@Component({
  selector: 'app-house-header',
  templateUrl: './house-header.component.html',
  styleUrls: ['./house-header.component.scss']
})
export class HouseHeaderComponent implements OnInit {

  constructor(public houseHeader: HouseHeader) { }

  ngOnInit(): void {
    this.houseHeader.setMenu();
  }

}
