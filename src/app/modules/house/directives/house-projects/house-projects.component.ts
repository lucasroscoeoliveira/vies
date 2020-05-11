import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/components-controllers/Slider';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router } from '@angular/router';
import HouseProjectConstants from 'src/app/utils/HouseProjectConstants';

@Component({
  selector: 'app-house-projects',
  templateUrl: './house-projects.component.html',
  styleUrls: ['./house-projects.component.scss']
})
export class HouseProjectsComponent implements OnInit {

  images: Array<Image>;
  currentPosition: number;
  countActive: number;
  tabs: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPosition = 0;
    this.initializeImages();
    this.setInitialActive();
    this.initializeTabs();
  }

  selectTab(selectedTab: any) {
    this.tabs.forEach((tab: { filter: any; selected: boolean; }) => {
      if(tab.filter === selectedTab.filter) {
        this.filterProjects(selectedTab);
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });
  }

  filterProjects(selectedTab: any) {
    if(selectedTab.filter === HouseProjectConstants.FILTERS.MAIN){
      this.images = HouseProjectConstants.PROJECTS.filter(image => image.main);
    } else {
      this.images = HouseProjectConstants.PROJECTS.filter(image => image.filter === selectedTab.filter);
    }
    this.setInitialActive();
  }

  initializeTabs() {
    this.tabs = [
      {
        name: 'EM DESTAQUE',
        filter: HouseProjectConstants.FILTERS.MAIN,
        selected: true
      },
      {
        name: 'SALAS',
        filter: HouseProjectConstants.FILTERS.LIVING_ROOM,
        selected: false
      },
      {
        name: 'COZINHAS',
        filter: HouseProjectConstants.FILTERS.KITCHEN,
        selected: false
      },
      {
        name: 'QUARTO CASAL',
        filter: HouseProjectConstants.FILTERS.ROOM_COUPLE,
        selected: false
      },
      {
        name: 'QUARTO SOLTEIRO',
        filter: HouseProjectConstants.FILTERS.ROOM_SINGLE,
        selected: false
      },
      {
        name: 'ANTES x DEPOIS',
        filter: HouseProjectConstants.FILTERS.BEFORE_AFTER,
        selected: false
      },
      {
        name: 'INFANTIS',
        filter: HouseProjectConstants.FILTERS.CHILD,
        selected: false
      },
      {
        name: 'HOME OFFICE',
        filter: HouseProjectConstants.FILTERS.HOME_OFFICE,
        selected: false
      },
      {
        name: 'BANHEIROS',
        filter: HouseProjectConstants.FILTERS.BATHROOM,
        selected: false
      },
    ]
  }

  initializeImages() {
    this.images = HouseProjectConstants.PROJECTS.filter(image => image.main);
  }

  setInitialActive() {
    this.countActive = this.setIsMobile() ? 4 : 8;

    this.images = this.images.map((image, index) => {
      image.active = index < this.countActive ? true : false;
      return image;
    })
  }

  setIsMobile() {
    return screen.width < 900
  }

  setCountActive() {
    this.countActive = this.setIsMobile() ? 4 : 8;
    return this.countActive;
  }

  move(direction: string) {
    this.setCountActive();
    let maxPosition = Math.floor(this.images.length / this.countActive);

    if(direction === 'right' && this.currentPosition === maxPosition){
        this.currentPosition = 0;
    } else if(direction === 'right' && this.currentPosition < maxPosition) {
        this.currentPosition ++;
    } else if(direction === 'left' && this.currentPosition === 0){
        this.currentPosition = maxPosition
    } else if(direction === 'left' && this.currentPosition > 0){
        this.currentPosition--;
    }

    this.setActives();
  }

  setActives() {
    let startIndex = this.currentPosition * this.countActive;
    let finishIndex = startIndex + this.countActive;

    this.images = this.images.map((image, index) => {
      image.active = index < finishIndex && index >= startIndex ? true : false;
      return image;
    })
  }

  viewProjectDetail(image: Image)
  {
    this.router.navigate(['casa/projeto', image.id, image.filter]);
  }
}
