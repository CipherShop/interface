import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirConditioningHeatingComponent } from './car-truck-air-conditioning-heating.component';

describe('CarTruckAirConditioningHeatingComponent', () => {
  let component: CarTruckAirConditioningHeatingComponent;
  let fixture: ComponentFixture<CarTruckAirConditioningHeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirConditioningHeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirConditioningHeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
