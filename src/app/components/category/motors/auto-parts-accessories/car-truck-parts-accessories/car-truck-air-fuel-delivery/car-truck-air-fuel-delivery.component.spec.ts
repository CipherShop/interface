import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirFuelDeliveryComponent } from './car-truck-air-fuel-delivery.component';

describe('CarTruckAirFuelDeliveryComponent', () => {
  let component: CarTruckAirFuelDeliveryComponent;
  let fixture: ComponentFixture<CarTruckAirFuelDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirFuelDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirFuelDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
