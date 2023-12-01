import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirFuelDeliveryGasketsSealsORingsComponent } from './car-truck-air-fuel-delivery-gaskets-seals-o-rings.component';

describe('CarTruckAirFuelDeliveryGasketsSealsORingsComponent', () => {
  let component: CarTruckAirFuelDeliveryGasketsSealsORingsComponent;
  let fixture: ComponentFixture<CarTruckAirFuelDeliveryGasketsSealsORingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirFuelDeliveryGasketsSealsORingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirFuelDeliveryGasketsSealsORingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
