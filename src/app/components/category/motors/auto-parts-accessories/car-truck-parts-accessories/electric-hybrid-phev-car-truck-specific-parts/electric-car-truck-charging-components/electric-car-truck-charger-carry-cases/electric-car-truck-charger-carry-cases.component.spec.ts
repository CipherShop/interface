import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargerCarryCasesComponent } from './electric-car-truck-charger-carry-cases.component';

describe('ElectricCarTruckChargerCarryCasesComponent', () => {
  let component: ElectricCarTruckChargerCarryCasesComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargerCarryCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargerCarryCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargerCarryCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
