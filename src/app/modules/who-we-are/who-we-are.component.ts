import { Component, OnInit } from '@angular/core';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  marina: string;
  amanda: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.marina = ImagesConstants.SHARED_IMAGES.MARINA;
    this.amanda = ImagesConstants.SHARED_IMAGES.AMANDA;
  }

  goBackToInitial() {
    this.router.navigate(['casa/inicio']);
  }

}
