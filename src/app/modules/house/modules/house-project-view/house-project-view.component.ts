import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import HouseProjectConstants from 'src/app/utils/HouseProjectConstants';
import { Modal } from 'src/app/components-controllers/Modal';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-house-project-view',
  templateUrl: './house-project-view.component.html',
  styleUrls: ['./house-project-view.component.scss']
})
export class HouseProjectViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public modal: Modal, public scroll: ScrollTo) { }
  id: number;
  image: any;
  images: any;
  filter: string;
  currIndex: number;
  routeParameters: any;
  pagesLabel: string;

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.filter = params['tab'];
    });
    this.currIndex = 0;
    this.initImages();
    this.checkForTabParams();
    this.setPagesLabel();
  }

  setPagesLabel() {
    this.pagesLabel = (this.currIndex + 1) + '/' + this.images.length;
  }

  checkForTabParams() {
    this.routeParameters = {
      tab : this.route.snapshot.queryParamMap.get('tab'),
      currentPosition: parseInt(this.route.snapshot.queryParamMap.get('current_position'))
    }
  }

  initImages() {
    this.getImages();
    this.setImage();
  }

  getImages() {
    let project = HouseProjectConstants.PROJECTS.find(project => project.id === this.id);
    if (project && project.main) {
      this.images = HouseProjectConstants.PROJECTS_DETAIL.filter((image) => {
        return image.id === this.id;
      });
    } else {
      this.images = HouseProjectConstants.PROJECTS_DETAIL.filter((image) => {
        return image.filter === this.filter && image.id === this.id;
      });
    }
  }

  setImage() {
    this.image = this.images[this.currIndex];
  }

  move(direction: string) {
    if (direction === 'right') {
      if (!this.visibleRightArrow()) {
        return;
      }
      this.moveRight();
    }
    else {
      if (!this.visibleLeftArrow()) {
        return;
      }
      this.moveLeft();
    }
    this.setImage();
    this.setPagesLabel();
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

  moveRight() {
    if (this.currIndex === this.images.length - 1) {
      this.currIndex = 0;
    } else {
      this.currIndex++;
    }
  }

  moveLeft() {
    if (this.currIndex === 0) {
      this.currIndex = this.images.length - 1;
    } else {
      this.currIndex--;
    }
  }

  visibleRightArrow() {
    return this.currIndex < this.images.length - 1;
  }

  visibleLeftArrow() {
    return this.currIndex > 0
  }

  goBack() {
    this.router.navigate(['casa/inicio', 'projetos'], {
      queryParams:
        { 
          tab: this.routeParameters.tab,
          current_position: this.routeParameters.currentPosition
        }
    });
    this.scroll.navigateToRoute(this.scroll.states.projects, 500);
  }

  openModal() {
    this.modal.open(
      'app-modal-email'
    )
  }
}
