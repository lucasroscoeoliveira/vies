import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViCallToActionComponent } from './vi-call-to-action.component';

describe('ViCallToActionComponent', () => {
  let component: ViCallToActionComponent;
  let fixture: ComponentFixture<ViCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
