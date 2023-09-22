import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSensorsSwitchesComponent } from './atv-side-by-side-utv-sensors-switches.component';

describe('ATVSideBySideUTVSensorsSwitchesComponent', () => {
  let component: ATVSideBySideUTVSensorsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
