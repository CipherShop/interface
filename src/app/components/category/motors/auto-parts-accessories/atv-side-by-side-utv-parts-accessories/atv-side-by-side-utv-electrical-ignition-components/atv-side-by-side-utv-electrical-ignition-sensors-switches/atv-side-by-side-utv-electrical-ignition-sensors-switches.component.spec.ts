import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent } from './atv-side-by-side-utv-electrical-ignition-sensors-switches.component';

describe('ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent', () => {
  let component: ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
