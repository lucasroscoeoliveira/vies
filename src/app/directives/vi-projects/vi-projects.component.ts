import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Header } from 'src/app/components-controllers/Header';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import FashionProjectConstants from 'src/app/utils/FashionProjectConstants';
import HouseProjectConstants from 'src/app/utils/HouseProjectConstants';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/components-controllers/Slider';

@Component({
  selector: 'app-vi-projects',
  templateUrl: './vi-projects.component.html',
  styleUrls: ['./vi-projects.component.scss']
})
export class ViProjectsComponent implements OnInit {

  images: any;
  @Input() title: string;
  @Input() currentIndex: number = 0;
  tabs: any;
  @Output() counterChange = new EventEmitter();
  imagesFormatted: any;
  containerDiv: any
  coutItems: number;
  pagesLabel: string;

  constructor(public header: Header, public scroll: ScrollTo, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.initImages();
    this.initImagesFormatted();
    this.setPagesLabel();
    this.initContainerSize();
    this.initializeTabs();
    this.checkForParamTab();
  }

  initImages() {
    this.images = [];
    if (this.header.type === 'fashion') {
      this.images = FashionProjectConstants.PROJECTS.filter(image => image.main);
    } else {
      this.images = HouseProjectConstants.PROJECTS.filter(image => image.main);
    }
  }

  setPagesLabel() {
    this.pagesLabel = 'Página ' + (this.currentIndex + 1) + ' de ' + Math.ceil(this.imagesFormatted.length)
  }

  checkForParamTab() {
    const tabFilter: string = this.route.snapshot.queryParamMap.get('tab');
    const currentPosition: number = parseInt(this.route.snapshot.queryParamMap.get('current_position'));

    if(tabFilter){
      let selectedTab = this.tabs.find(tab => tab.filter === tabFilter);
      this.selectTab(selectedTab, currentPosition);
    }
  }

  initImagesFormatted() {
    if (screen.width <= 1100) {
      this.coutItems = 4;
      this.formatImages(this.coutItems);
    } else {
      this.coutItems = 8;
      this.formatImages(this.coutItems);
    }
  }
 
  formatImages(count: number) {
    this.imagesFormatted = [];
    let totalSliced = Math.ceil(this.images.length / count);

    for (let i = 0; i < totalSliced; i++) {
      if (i < totalSliced) {
        let slicedImages = this.images.slice(i * count, (i * count) + count);
        this.imagesFormatted.push({
          images: slicedImages
        })
      }
      else {
        let slicedImages = this.images.slice(i, this.images.length - 1);
        this.imagesFormatted.push({
          images: slicedImages
        })
      }
    }
    this.setPagesLabel();
  }

  initContainerSize() {
    setTimeout(() => {
      this.containerDiv = document.getElementById('projects-carousel-container');
      this.containerDiv.style.width = 100 * this.imagesFormatted.length + 'vw';
      this.setPosition();
    }, 300)
  }

  setPosition() {
    let calc = (this.currentIndex) * 100;
    this.containerDiv.style.transform = `translateX(-${calc}vw)`;
  }

  move(direction: string) {
    let calc = 0;

    if (direction === 'right' && this.currentIndex < this.imagesFormatted.length - 1) {
      this.currentIndex++;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
      this.counterChange.emit(this.currentIndex);
    }
    else if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
      calc = (this.currentIndex) * 100;
      this.containerDiv.style.transform = `translateX(-${calc}vw)`;
      this.counterChange.emit(this.currentIndex);
    }
    this.setPagesLabel();
  }

  checkLeftDisabled() {
    return this.currentIndex === 0;
  }

  checkRightDisabled() {
    return this.currentIndex === this.imagesFormatted.length - 1;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let keyPressed = event.keyCode;
    switch (keyPressed) {
      case 39:
        this.move('right');
        break;
      case 37:
        this.move('left');
    }
  }

  selectTab(selectedTab: any, customCurrentPosition?: number) {
    this.currentIndex = customCurrentPosition ? customCurrentPosition : 0;
    this.tabs.forEach((tab: { filter: any; selected: boolean; }) => {
      if(tab.filter === selectedTab.filter) {
        this.filterProjects(selectedTab);
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });
    this.setPagesLabel();
    this.setPosition();
    this.scroll.navigateToRoute(this.scroll.states.projects, 300, this.header.type);
  }

  filterProjects(selectedTab: any) {
    this.currentIndex = 0;
    if (this.header.type === 'fashion') {
      if(selectedTab.filter === FashionProjectConstants.FILTERS.MAIN){
        this.images = FashionProjectConstants.PROJECTS.filter(image => image.main);
      } else {
        this.images = FashionProjectConstants.PROJECTS.filter(image => image.filter === selectedTab.filter && !image.main);
      }
    }

    else {
      if(selectedTab.filter === HouseProjectConstants.FILTERS.MAIN){
        this.images = HouseProjectConstants.PROJECTS.filter(image => image.main);
      } else {
        this.images = HouseProjectConstants.PROJECTS.filter(image => image.filter === selectedTab.filter && !image.main);
      }
    }
    this.formatImages(this.coutItems);
  }

  navigateToProjectsSession() {
    this.scroll.navigateToRoute(this.scroll.states.projects, 300, this.header.type);
  }

  initializeTabs() {
    if (this.header.type === 'fashion') {
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
    else {
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
          filter: HouseProjectConstants.FILTERS.BEDROOM,
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
        // {
        //   name: 'ANTES x DEPOIS',
        //   filter: HouseProjectConstants.FILTERS.BEFORE_AFTER,
        //   selected: false
        // },
      ]
    }
  }

  viewProjectDetail(image: Image)
  {
    let prefix = this.header.type === 'fashion' ? 'negocio' : 'casa';
    const selectedTab = this.tabs.find(tab => tab.selected);
    this.router.navigate([`${prefix}/projeto`, image.id, image.filter], {
      queryParams:
      { 
        tab: selectedTab.filter,
        current_position: this.currentIndex
      }
    });
  }

}
