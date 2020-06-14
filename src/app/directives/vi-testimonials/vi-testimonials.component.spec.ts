import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTestimonialsComponent } from './vi-testimonials.component';

describe('ViTestimonialsComponent', () => {
  let component: ViTestimonialsComponent;
  let fixture: ComponentFixture<ViTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
