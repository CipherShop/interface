import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDashCamsAlarmsSecurityDevicesComponent } from './car-dash-cams-alarms-security-devices.component';

describe('CarDashCamsAlarmsSecurityDevicesComponent', () => {
  let component: CarDashCamsAlarmsSecurityDevicesComponent;
  let fixture: ComponentFixture<CarDashCamsAlarmsSecurityDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDashCamsAlarmsSecurityDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDashCamsAlarmsSecurityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
