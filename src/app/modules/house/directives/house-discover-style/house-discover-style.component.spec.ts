import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDiscoverStyleComponent } from './house-discover-style.component';

describe('HouseDiscoverStyleComponent', () => {
  let component: HouseDiscoverStyleComponent;
  let fixture: ComponentFixture<HouseDiscoverStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDiscoverStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDiscoverStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
