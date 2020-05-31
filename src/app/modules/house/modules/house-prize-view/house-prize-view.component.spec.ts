import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePrizeViewComponent } from './house-prize-view.component';

describe('HousePrizeViewComponent', () => {
  let component: HousePrizeViewComponent;
  let fixture: ComponentFixture<HousePrizeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePrizeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePrizeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
