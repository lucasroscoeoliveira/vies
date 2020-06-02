import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionServicesComponent } from './fashion-services.component';

describe('FashionServicesComponent', () => {
  let component: FashionServicesComponent;
  let fixture: ComponentFixture<FashionServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
