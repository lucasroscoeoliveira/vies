import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViPrizeSessionComponent } from './vi-prize-session.component';

describe('ViPrizeSessionComponent', () => {
  let component: ViPrizeSessionComponent;
  let fixture: ComponentFixture<ViPrizeSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViPrizeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViPrizeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
