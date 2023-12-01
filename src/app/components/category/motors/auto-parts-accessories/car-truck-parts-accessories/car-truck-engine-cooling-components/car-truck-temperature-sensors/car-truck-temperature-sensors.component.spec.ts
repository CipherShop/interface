import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTemperatureSensorsComponent } from './car-truck-temperature-sensors.component';

describe('CarTruckTemperatureSensorsComponent', () => {
  let component: CarTruckTemperatureSensorsComponent;
  let fixture: ComponentFixture<CarTruckTemperatureSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTemperatureSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTemperatureSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
