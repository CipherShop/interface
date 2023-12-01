import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent } from './car-truck-exhaust-emission-clamps-flanges-hangers-hardware.component';

describe('CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent', () => {
  let component: CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent;
  let fixture: ComponentFixture<CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustEmissionClampsFlangesHangersHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
