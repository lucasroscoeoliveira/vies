import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/components-controllers/Slider';
import HouseProjectConstants from 'src/app/utils/HouseProjectConstants';

@Component({
  selector: 'app-house-project-view',
  templateUrl: './house-project-view.component.html',
  styleUrls: ['./house-project-view.component.scss']
})
export class HouseProjectViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;
  image: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.image = HouseProjectConstants.PROJECTS.find(project => project.id === this.id);
  }

  move(direction: string) {

  }

}
