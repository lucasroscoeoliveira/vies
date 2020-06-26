import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'src/app/components-controllers/Modal';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import FashionProjectConstants from 'src/app/utils/FashionProjectConstants';

@Component({
  selector: 'app-fashion-project-view',
  templateUrl: './fashion-project-view.component.html',
  styleUrls: ['./fashion-project-view.component.scss']
})
export class FashionProjectViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public modal: Modal, public scroll: ScrollTo) { }
  id: number;
  image: any;
  images: any;
  filter: string;
  currIndex: number;
  routeParameters: any;

  ngOnInit(): void {
    this.initVariables();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    event.preventDefault();
    this.goBack();
  }

  initVariables() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.filter = params['tab'];
    });
    this.currIndex = 0;
    this.checkForTabParams();
    this.initImages();
  }

  updateCurrIndex(currentIndex: number) {
    this.currIndex = currentIndex;
  }

  getPagesLabel() {
    return (this.currIndex + 1) + '/' + this.images.length;
  }

  checkForTabParams() {
    this.routeParameters = {
      tab: this.route.snapshot.queryParamMap.get('tab'),
      currentPosition: parseInt(this.route.snapshot.queryParamMap.get('current_position'))
    }
  }

  initImages() {
    this.getImages();
  }

  getImages() {
    let project = FashionProjectConstants.PROJECTS.find(project => project.id === this.id);
    if (project && project.main && this.routeParameters.tab === 'main') {
      this.images = FashionProjectConstants.PROJECTS_DETAIL.filter((image) => {
        return image.id === this.id && !image.removeFromMain;
      });
    } else {
      this.images = FashionProjectConstants.PROJECTS_DETAIL.filter((image) => {
        return image.filter === this.filter && image.id === this.id;
      });
    }
  }

  disableArrowLeft() {
    return this.currIndex === 0
  }

  disableArrowRight() {
    return this.currIndex >= this.images.length - 1;
  }

  goBack() {
    this.router.navigate(['negocio/inicio', 'projetos'], {
      queryParams:
      {
        tab: this.routeParameters.tab,
        current_position: this.routeParameters.currentPosition
      }
    });
    this.scroll.navigateToRoute(this.scroll.states.projects, 500, 'fashion');
  }

  openModal() {
    this.modal.open(
      'app-modal-email'
    )
  }

}
