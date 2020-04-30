import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViSvgComponent } from './vi-svg.component';

describe('ViSvgComponent', () => {
  let component: ViSvgComponent;
  let fixture: ComponentFixture<ViSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
