import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckAirFuelDeliveryComponent } from './other-car-truck-air-fuel-delivery.component';

describe('OtherCarTruckAirFuelDeliveryComponent', () => {
  let component: OtherCarTruckAirFuelDeliveryComponent;
  let fixture: ComponentFixture<OtherCarTruckAirFuelDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckAirFuelDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckAirFuelDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
