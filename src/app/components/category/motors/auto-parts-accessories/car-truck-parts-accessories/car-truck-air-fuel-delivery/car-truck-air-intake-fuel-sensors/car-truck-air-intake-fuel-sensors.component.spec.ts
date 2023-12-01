import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirIntakeFuelSensorsComponent } from './car-truck-air-intake-fuel-sensors.component';

describe('CarTruckAirIntakeFuelSensorsComponent', () => {
  let component: CarTruckAirIntakeFuelSensorsComponent;
  let fixture: ComponentFixture<CarTruckAirIntakeFuelSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirIntakeFuelSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirIntakeFuelSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
