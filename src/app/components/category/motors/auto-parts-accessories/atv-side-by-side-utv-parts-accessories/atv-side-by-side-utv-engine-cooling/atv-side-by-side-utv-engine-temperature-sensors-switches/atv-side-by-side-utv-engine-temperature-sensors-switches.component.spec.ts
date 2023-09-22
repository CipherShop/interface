import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent } from './atv-side-by-side-utv-engine-temperature-sensors-switches.component';

describe('ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent', () => {
  let component: ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
