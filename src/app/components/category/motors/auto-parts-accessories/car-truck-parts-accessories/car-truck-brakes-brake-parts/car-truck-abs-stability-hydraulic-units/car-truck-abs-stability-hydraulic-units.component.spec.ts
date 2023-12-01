import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckABSStabilityHydraulicUnitsComponent } from './car-truck-abs-stability-hydraulic-units.component';

describe('CarTruckABSStabilityHydraulicUnitsComponent', () => {
  let component: CarTruckABSStabilityHydraulicUnitsComponent;
  let fixture: ComponentFixture<CarTruckABSStabilityHydraulicUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckABSStabilityHydraulicUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckABSStabilityHydraulicUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
