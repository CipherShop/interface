import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGrabBarsHandlesComponent } from './atv-side-by-side-utv-grab-bars-handles.component';

describe('ATVSideBySideUTVGrabBarsHandlesComponent', () => {
  let component: ATVSideBySideUTVGrabBarsHandlesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGrabBarsHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGrabBarsHandlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGrabBarsHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
