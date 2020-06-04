import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViesPdfViewerComponent } from './vies-pdf-viewer.component';

describe('ViesPdfViewerComponent', () => {
  let component: ViesPdfViewerComponent;
  let fixture: ComponentFixture<ViesPdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViesPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViesPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
