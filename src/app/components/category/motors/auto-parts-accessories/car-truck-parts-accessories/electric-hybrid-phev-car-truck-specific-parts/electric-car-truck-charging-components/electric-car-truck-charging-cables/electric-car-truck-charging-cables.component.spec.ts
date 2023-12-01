import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingCablesComponent } from './electric-car-truck-charging-cables.component';

describe('ElectricCarTruckChargingCablesComponent', () => {
  let component: ElectricCarTruckChargingCablesComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
