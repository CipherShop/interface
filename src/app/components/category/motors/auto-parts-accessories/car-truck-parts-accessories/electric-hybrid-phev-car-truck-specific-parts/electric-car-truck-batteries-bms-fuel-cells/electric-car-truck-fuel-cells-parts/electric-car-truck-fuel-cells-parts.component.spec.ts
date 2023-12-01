import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckFuelCellsPartsComponent } from './electric-car-truck-fuel-cells-parts.component';

describe('ElectricCarTruckFuelCellsPartsComponent', () => {
  let component: ElectricCarTruckFuelCellsPartsComponent;
  let fixture: ComponentFixture<ElectricCarTruckFuelCellsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckFuelCellsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckFuelCellsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
