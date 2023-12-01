import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAlertWarningDevicesComponent } from './car-truck-alert-warning-devices.component';

describe('CarTruckAlertWarningDevicesComponent', () => {
  let component: CarTruckAlertWarningDevicesComponent;
  let fixture: ComponentFixture<CarTruckAlertWarningDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAlertWarningDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAlertWarningDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
