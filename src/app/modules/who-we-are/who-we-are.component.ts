import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router } from '@angular/router';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  marina: string;
  amanda: string;

  constructor(private router: Router, public header: Header) { }

  ngOnInit(): void {
    this.marina = ImagesConstants.SHARED_IMAGES.MARINA;
    this.amanda = ImagesConstants.SHARED_IMAGES.AMANDA;
    this.header.setActive('quem-somos');
  }

  goBackToInitial() {
    if (this.header.type === 'house') {
      this.router.navigate(['casa/inicio', 'vies']);
    } else {
      this.router.navigate(['negocio/inicio', 'vies']);
    }
  }

}
