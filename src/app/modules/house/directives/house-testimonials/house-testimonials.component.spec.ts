import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTestimonialsComponent } from './house-testimonials.component';

describe('HouseTestimonialsComponent', () => {
  let component: HouseTestimonialsComponent;
  let fixture: ComponentFixture<HouseTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
