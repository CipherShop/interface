import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACTemperatureSensorsComponent } from './car-truck-hvac-temperature-sensors.component';

describe('CarTruckHVACTemperatureSensorsComponent', () => {
  let component: CarTruckHVACTemperatureSensorsComponent;
  let fixture: ComponentFixture<CarTruckHVACTemperatureSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACTemperatureSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACTemperatureSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
