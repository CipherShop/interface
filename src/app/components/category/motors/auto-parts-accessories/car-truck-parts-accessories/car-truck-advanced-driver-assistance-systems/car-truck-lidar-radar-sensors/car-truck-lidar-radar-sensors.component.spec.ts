import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckLidarRadarSensorsComponent } from './car-truck-lidar-radar-sensors.component';

describe('CarTruckLidarRadarSensorsComponent', () => {
  let component: CarTruckLidarRadarSensorsComponent;
  let fixture: ComponentFixture<CarTruckLidarRadarSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckLidarRadarSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckLidarRadarSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
