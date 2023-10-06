import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent } from './atv-side-by-side-utv-skid-plates-sliders-spools.component';

describe('ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent', () => {
  let component: ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSkidPlatesSlidersSpoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
