import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViSocialComponent } from './vi-social.component';

describe('ViSocialComponent', () => {
  let component: ViSocialComponent;
  let fixture: ComponentFixture<ViSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
