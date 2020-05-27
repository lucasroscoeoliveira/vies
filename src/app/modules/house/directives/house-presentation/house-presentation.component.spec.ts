import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePresentationComponent } from './house-presentation.component';

describe('HousePresentationComponent', () => {
  let component: HousePresentationComponent;
  let fixture: ComponentFixture<HousePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
