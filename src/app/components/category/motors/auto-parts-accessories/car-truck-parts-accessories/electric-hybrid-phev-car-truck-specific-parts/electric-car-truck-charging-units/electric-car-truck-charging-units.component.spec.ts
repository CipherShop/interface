import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingUnitsComponent } from './electric-car-truck-charging-units.component';

describe('ElectricCarTruckChargingUnitsComponent', () => {
  let component: ElectricCarTruckChargingUnitsComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
