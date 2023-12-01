import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckOxygenSensorsComponent } from './car-truck-oxygen-sensors.component';

describe('CarTruckOxygenSensorsComponent', () => {
  let component: CarTruckOxygenSensorsComponent;
  let fixture: ComponentFixture<CarTruckOxygenSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckOxygenSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckOxygenSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
