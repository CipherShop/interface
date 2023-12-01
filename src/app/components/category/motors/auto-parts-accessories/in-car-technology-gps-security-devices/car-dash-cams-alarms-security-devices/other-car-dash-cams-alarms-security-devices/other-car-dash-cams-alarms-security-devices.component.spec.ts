import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarDashCamsAlarmsSecurityDevicesComponent } from './other-car-dash-cams-alarms-security-devices.component';

describe('OtherCarDashCamsAlarmsSecurityDevicesComponent', () => {
  let component: OtherCarDashCamsAlarmsSecurityDevicesComponent;
  let fixture: ComponentFixture<OtherCarDashCamsAlarmsSecurityDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarDashCamsAlarmsSecurityDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarDashCamsAlarmsSecurityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
