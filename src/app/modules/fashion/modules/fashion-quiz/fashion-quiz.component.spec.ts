import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionQuizComponent } from './fashion-quiz.component';

describe('FashionQuizComponent', () => {
  let component: FashionQuizComponent;
  let fixture: ComponentFixture<FashionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
