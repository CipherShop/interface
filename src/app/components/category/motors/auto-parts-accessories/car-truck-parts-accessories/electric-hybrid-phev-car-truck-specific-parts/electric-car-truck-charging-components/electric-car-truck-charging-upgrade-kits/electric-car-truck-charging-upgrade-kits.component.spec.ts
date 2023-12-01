import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingUpgradeKitsComponent } from './electric-car-truck-charging-upgrade-kits.component';

describe('ElectricCarTruckChargingUpgradeKitsComponent', () => {
  let component: ElectricCarTruckChargingUpgradeKitsComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingUpgradeKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingUpgradeKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingUpgradeKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
