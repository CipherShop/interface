import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckBatteryBMSUnitsComponent } from './electric-car-truck-battery-bms-units.component';

describe('ElectricCarTruckBatteryBMSUnitsComponent', () => {
  let component: ElectricCarTruckBatteryBMSUnitsComponent;
  let fixture: ComponentFixture<ElectricCarTruckBatteryBMSUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckBatteryBMSUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckBatteryBMSUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
