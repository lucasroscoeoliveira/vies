import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseServicesSessionComponent } from './house-services-session.component';

describe('HouseServicesSessionComponent', () => {
  let component: HouseServicesSessionComponent;
  let fixture: ComponentFixture<HouseServicesSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseServicesSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseServicesSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
