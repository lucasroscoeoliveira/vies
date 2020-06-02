import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProjectViewComponent } from './fashion-project-view.component';

describe('FashionProjectViewComponent', () => {
  let component: FashionProjectViewComponent;
  let fixture: ComponentFixture<FashionProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
