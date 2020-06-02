import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionPresentationComponent } from './fashion-presentation.component';

describe('FashionPresentationComponent', () => {
  let component: FashionPresentationComponent;
  let fixture: ComponentFixture<FashionPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
