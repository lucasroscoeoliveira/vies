import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCallToActionComponent } from './house-call-to-action.component';

describe('HouseCallToActionComponent', () => {
  let component: HouseCallToActionComponent;
  let fixture: ComponentFixture<HouseCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
