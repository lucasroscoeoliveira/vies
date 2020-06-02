import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDiscoverStyleComponent } from './fashion-discover-style.component';

describe('FashionDiscoverStyleComponent', () => {
  let component: FashionDiscoverStyleComponent;
  let fixture: ComponentFixture<FashionDiscoverStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionDiscoverStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionDiscoverStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
