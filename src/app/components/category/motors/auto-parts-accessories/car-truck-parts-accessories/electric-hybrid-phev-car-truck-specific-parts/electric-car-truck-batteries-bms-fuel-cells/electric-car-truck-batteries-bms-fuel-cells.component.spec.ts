import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckBatteriesBMSFuelCellsComponent } from './electric-car-truck-batteries-bms-fuel-cells.component';

describe('ElectricCarTruckBatteriesBMSFuelCellsComponent', () => {
  let component: ElectricCarTruckBatteriesBMSFuelCellsComponent;
  let fixture: ComponentFixture<ElectricCarTruckBatteriesBMSFuelCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckBatteriesBMSFuelCellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckBatteriesBMSFuelCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
