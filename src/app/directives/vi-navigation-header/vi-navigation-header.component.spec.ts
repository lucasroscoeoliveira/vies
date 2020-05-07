import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViNavigationHeaderComponent } from './vi-navigation-header.component';

describe('ViNavigationHeaderComponent', () => {
  let component: ViNavigationHeaderComponent;
  let fixture: ComponentFixture<ViNavigationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViNavigationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
