import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViHeaderComponent } from './vi-header.component';

describe('ViHeaderComponent', () => {
  let component: ViHeaderComponent;
  let fixture: ComponentFixture<ViHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
