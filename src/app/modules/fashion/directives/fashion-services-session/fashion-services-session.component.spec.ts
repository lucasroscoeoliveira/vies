import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionServicesSessionComponent } from './fashion-services-session.component';

describe('FashionServicesSessionComponent', () => {
  let component: FashionServicesSessionComponent;
  let fixture: ComponentFixture<FashionServicesSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionServicesSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionServicesSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
