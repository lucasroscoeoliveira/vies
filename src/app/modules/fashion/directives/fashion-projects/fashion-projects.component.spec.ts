import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProjectsComponent } from './fashion-projects.component';

describe('FashionProjectsComponent', () => {
  let component: FashionProjectsComponent;
  let fixture: ComponentFixture<FashionProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
