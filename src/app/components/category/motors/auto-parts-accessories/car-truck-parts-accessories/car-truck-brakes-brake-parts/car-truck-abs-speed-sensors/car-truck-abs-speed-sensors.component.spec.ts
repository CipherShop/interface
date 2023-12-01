import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckABSSpeedSensorsComponent } from './car-truck-abs-speed-sensors.component';

describe('CarTruckABSSpeedSensorsComponent', () => {
  let component: CarTruckABSSpeedSensorsComponent;
  let fixture: ComponentFixture<CarTruckABSSpeedSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckABSSpeedSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckABSSpeedSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
