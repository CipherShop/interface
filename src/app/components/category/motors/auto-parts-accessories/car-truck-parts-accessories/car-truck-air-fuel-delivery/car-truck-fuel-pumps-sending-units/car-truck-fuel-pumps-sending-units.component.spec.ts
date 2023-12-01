import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelPumpsSendingUnitsComponent } from './car-truck-fuel-pumps-sending-units.component';

describe('CarTruckFuelPumpsSendingUnitsComponent', () => {
  let component: CarTruckFuelPumpsSendingUnitsComponent;
  let fixture: ComponentFixture<CarTruckFuelPumpsSendingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelPumpsSendingUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelPumpsSendingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
