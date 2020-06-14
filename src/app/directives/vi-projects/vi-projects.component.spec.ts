import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViProjectsComponent } from './vi-projects.component';

describe('ViProjectsComponent', () => {
  let component: ViProjectsComponent;
  let fixture: ComponentFixture<ViProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
