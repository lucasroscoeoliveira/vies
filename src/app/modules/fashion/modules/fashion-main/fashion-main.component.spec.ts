import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionMainComponent } from './fashion-main.component';

describe('FashionMainComponent', () => {
  let component: FashionMainComponent;
  let fixture: ComponentFixture<FashionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
