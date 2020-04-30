import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViSliderComponent } from './vi-slider.component';

describe('ViSliderComponent', () => {
  let component: ViSliderComponent;
  let fixture: ComponentFixture<ViSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
