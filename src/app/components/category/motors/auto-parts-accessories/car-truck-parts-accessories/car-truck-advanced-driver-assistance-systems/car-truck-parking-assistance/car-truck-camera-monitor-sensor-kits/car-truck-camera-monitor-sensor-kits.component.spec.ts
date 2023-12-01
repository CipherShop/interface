import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCameraMonitorSensorKitsComponent } from './car-truck-camera-monitor-sensor-kits.component';

describe('CarTruckCameraMonitorSensorKitsComponent', () => {
  let component: CarTruckCameraMonitorSensorKitsComponent;
  let fixture: ComponentFixture<CarTruckCameraMonitorSensorKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCameraMonitorSensorKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCameraMonitorSensorKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
