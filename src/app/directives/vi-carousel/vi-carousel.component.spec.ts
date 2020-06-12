import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViCarouselComponent } from './vi-carousel.component';

describe('ViCarouselComponent', () => {
  let component: ViCarouselComponent;
  let fixture: ComponentFixture<ViCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
