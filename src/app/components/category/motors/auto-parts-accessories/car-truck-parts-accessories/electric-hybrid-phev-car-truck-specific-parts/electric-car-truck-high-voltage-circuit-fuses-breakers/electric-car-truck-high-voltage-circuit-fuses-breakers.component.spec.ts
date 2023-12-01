import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckHighVoltageCircuitFusesBreakersComponent } from './electric-car-truck-high-voltage-circuit-fuses-breakers.component';

describe('ElectricCarTruckHighVoltageCircuitFusesBreakersComponent', () => {
  let component: ElectricCarTruckHighVoltageCircuitFusesBreakersComponent;
  let fixture: ComponentFixture<ElectricCarTruckHighVoltageCircuitFusesBreakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckHighVoltageCircuitFusesBreakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckHighVoltageCircuitFusesBreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
