import { Component, OnInit, HostListener } from '@angular/core';
import { Image } from 'src/app/components-controllers/Slider';
import ImagesConstants from 'src/app/utils/ImagesConstants';
import { Router, ActivatedRoute } from '@angular/router';
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
  pagesLabel: string;
  

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPosition = 0;
    this.initializeImages();
    this.setInitialActive();
    this.initializeTabs();
    this.checkForParamTab();
  }

  checkForParamTab() {
    const tabFilter: string = this.route.snapshot.queryParamMap.get('tab');
    const currentPosition: number = parseInt(this.route.snapshot.queryParamMap.get('current_position'));

    if(tabFilter){
      let selectedTab = this.tabs.find(tab => tab.filter === tabFilter);
      this.selectTab(selectedTab, currentPosition);
    }
  }

  filterProjects(selectedTab: any) {
    if(selectedTab.filter === HouseProjectConstants.FILTERS.MAIN){
      this.images = HouseProjectConstants.PROJECTS.filter(image => image.main);
    } else {
      this.images = HouseProjectConstants.PROJECTS.filter(image => image.filter === selectedTab.filter && !image.main);
    }
    this.setInitialActive();
  }

  imagesFiltered() {
    return this.images.filter(image => image.active);
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
        name: 'QUARTOS',
        filter: HouseProjectConstants.FILTERS.ROOM,
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
      {
        name: 'ANTES x DEPOIS',
        filter: HouseProjectConstants.FILTERS.BEFORE_AFTER,
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

    this.setPagesLabel();
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
    let maxPosition = Math.ceil(this.images.length / this.countActive);
    if(direction === 'right' && this.currentPosition < maxPosition - 1) {
        this.currentPosition ++;
    } else if(direction === 'left' && this.currentPosition > 0){
        this.currentPosition--;
    }

    this.setActives();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let keyPressed = event.keyCode;
    switch(keyPressed){
      case 39:
        this.move('right');
        break;
      case 37:
        this.move('left');
    }
  }

  selectTab(selectedTab: any, customCurrentPosition?: number) {
    let content = document.getElementsByTagName('app-house-projects')[0];
    content.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
    this.currentPosition = customCurrentPosition ? customCurrentPosition : 0;
    this.tabs.forEach((tab: { filter: any; selected: boolean; }) => {
      if(tab.filter === selectedTab.filter) {
        this.filterProjects(selectedTab);
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });

    this.setActives();
  }

  setActives() {
    let startIndex = this.currentPosition * this.countActive;
    let finishIndex = startIndex + this.countActive;

    this.images = this.images.map((image, index) => {
      image.active = index < finishIndex && index >= startIndex ? true : false;
      return image;
    })

    this.setPagesLabel();
  }

  setPagesLabel() {
    this.pagesLabel = (this.currentPosition + 1) + '/' + Math.ceil(this.images.length / this.countActive)
  }

  viewProjectDetail(image: Image)
  {
    const selectedTab = this.tabs.find(tab => tab.selected);
    this.router.navigate(['casa/projeto', image.id, image.filter], {
      queryParams:
      { 
        tab: selectedTab.filter,
        current_position: this.currentPosition
      }
    });
  }

  disableArrowLeft() {
    return this.currentPosition === 0;
  }

  disableArrowRight() {
    let maxPosition = Math.ceil(this.images.length / this.countActive);

    return ((this.currentPosition + 1) >= maxPosition);
  }
}
