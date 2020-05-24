import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViToastComponent } from './vi-toast.component';

describe('ViToastComponent', () => {
  let component: ViToastComponent;
  let fixture: ComponentFixture<ViToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
