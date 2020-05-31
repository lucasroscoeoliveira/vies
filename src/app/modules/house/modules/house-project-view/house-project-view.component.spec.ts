import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseProjectViewComponent } from './house-project-view.component';

describe('HouseProjectViewComponent', () => {
  let component: HouseProjectViewComponent;
  let fixture: ComponentFixture<HouseProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
