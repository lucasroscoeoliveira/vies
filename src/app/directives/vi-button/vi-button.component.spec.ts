import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViButtonComponent } from './vi-button.component';

describe('ViButtonComponent', () => {
  let component: ViButtonComponent;
  let fixture: ComponentFixture<ViButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
