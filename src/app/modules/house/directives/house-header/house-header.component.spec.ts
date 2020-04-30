import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHeaderComponent } from './house-header.component';

describe('HouseHeaderComponent', () => {
  let component: HouseHeaderComponent;
  let fixture: ComponentFixture<HouseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
