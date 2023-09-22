import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRoofsTopsComponent } from './atv-side-by-side-utv-roofs-tops.component';

describe('ATVSideBySideUTVRoofsTopsComponent', () => {
  let component: ATVSideBySideUTVRoofsTopsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRoofsTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRoofsTopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRoofsTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
