import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseProjectsComponent } from './house-projects.component';

describe('HouseProjectsComponent', () => {
  let component: HouseProjectsComponent;
  let fixture: ComponentFixture<HouseProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
