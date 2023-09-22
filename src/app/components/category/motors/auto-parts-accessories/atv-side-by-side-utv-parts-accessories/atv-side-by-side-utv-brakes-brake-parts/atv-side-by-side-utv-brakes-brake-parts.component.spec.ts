import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakesBrakePartsComponent } from './atv-side-by-side-utv-brakes-brake-parts.component';

describe('ATVSideBySideUTVBrakesBrakePartsComponent', () => {
  let component: ATVSideBySideUTVBrakesBrakePartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakesBrakePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakesBrakePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakesBrakePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
