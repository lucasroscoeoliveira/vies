import { Component, OnInit, HostListener } from '@angular/core';
import { Image } from 'src/app/components-controllers/Slider';
import { Router, ActivatedRoute } from '@angular/router';
import FashionProjectConstants from 'src/app/utils/FashionProjectConstants';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-fashion-projects',
  templateUrl: './fashion-projects.component.html',
  styleUrls: ['./fashion-projects.component.scss']
})
export class FashionProjectsComponent implements OnInit {

  images: Array<Image>;
  currentPosition: number;
  countActive: number;
  tabs: any;
  pagesLabel: string;

  constructor(private router: Router, private route: ActivatedRoute, public scrollTo: ScrollTo) { }

  ngOnInit(): void {
    this.currentPosition = 0;
    this.initializeImages();
    this.setInitialActive();
    this.initializeTabs();
    this.checkForParamTab();
  }

  navigateToProjectsSession() {
    this.scrollTo.navigateToRoute(this.scrollTo.states.projects, 300, 'fashion');
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
    if(selectedTab.filter === FashionProjectConstants.FILTERS.MAIN){
      this.images = FashionProjectConstants.PROJECTS.filter(image => image.main);
    } else {
      this.images = FashionProjectConstants.PROJECTS.filter(image => image.filter === selectedTab.filter && !image.main);
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
        filter: FashionProjectConstants.FILTERS.MAIN,
        selected: true
      },
      {
        name: 'LOJAS',
        filter: FashionProjectConstants.FILTERS.STORE,
        selected: false
      },
      {
        name: 'VITRINES',
        filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
        selected: false
      },
      {
        name: 'COMERCIAL GERAL',
        filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL,
        selected: false
      },
      {
        name: 'IDENTIDADE VISUAL',
        filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
        selected: false
      },
      // {
      //   name: 'ANTES X DEPOIS',
      //   filter: FashionProjectConstants.FILTERS.BEFORE_AFTER,
      //   selected: false
      // }
    ]
  }

  initializeImages() {
    this.images = FashionProjectConstants.PROJECTS.filter(image => image.main);
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

    let content = document.getElementsByTagName('app-fashion-projects')[0];
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
    this.router.navigate(['negocio/projeto', image.id, image.filter], {
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
