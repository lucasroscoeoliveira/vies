import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViFooterComponent } from './vi-footer.component';

describe('ViFooterComponent', () => {
  let component: ViFooterComponent;
  let fixture: ComponentFixture<ViFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
