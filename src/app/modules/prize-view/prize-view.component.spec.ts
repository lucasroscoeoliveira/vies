import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeViewComponent } from './prize-view.component';

describe('PrizeViewComponent', () => {
  let component: PrizeViewComponent;
  let fixture: ComponentFixture<PrizeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
