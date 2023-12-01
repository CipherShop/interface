import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingConvertersComponent } from './electric-car-truck-charging-converters.component';

describe('ElectricCarTruckChargingConvertersComponent', () => {
  let component: ElectricCarTruckChargingConvertersComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingConvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingConvertersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingConvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
