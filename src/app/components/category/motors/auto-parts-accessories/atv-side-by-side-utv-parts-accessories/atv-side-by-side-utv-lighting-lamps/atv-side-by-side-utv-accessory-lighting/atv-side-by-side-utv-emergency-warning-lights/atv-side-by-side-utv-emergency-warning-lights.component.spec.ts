import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEmergencyWarningLightsComponent } from './atv-side-by-side-utv-emergency-warning-lights.component';

describe('ATVSideBySideUTVEmergencyWarningLightsComponent', () => {
  let component: ATVSideBySideUTVEmergencyWarningLightsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEmergencyWarningLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEmergencyWarningLightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEmergencyWarningLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
