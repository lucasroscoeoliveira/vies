import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionTestimonialsComponent } from './fashion-testimonials.component';

describe('FashionTestimonialsComponent', () => {
  let component: FashionTestimonialsComponent;
  let fixture: ComponentFixture<FashionTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
