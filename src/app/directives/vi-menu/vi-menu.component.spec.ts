import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViMenuComponent } from './vi-menu.component';

describe('ViMenuComponent', () => {
  let component: ViMenuComponent;
  let fixture: ComponentFixture<ViMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
