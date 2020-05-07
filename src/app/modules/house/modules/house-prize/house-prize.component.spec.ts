import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePrizeComponent } from './house-prize.component';

describe('HousePrizeComponent', () => {
  let component: HousePrizeComponent;
  let fixture: ComponentFixture<HousePrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
