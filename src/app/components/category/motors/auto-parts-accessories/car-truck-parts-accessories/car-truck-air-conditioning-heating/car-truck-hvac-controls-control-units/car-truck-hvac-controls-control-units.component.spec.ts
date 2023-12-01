import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACControlsControlUnitsComponent } from './car-truck-hvac-controls-control-units.component';

describe('CarTruckHVACControlsControlUnitsComponent', () => {
  let component: CarTruckHVACControlsControlUnitsComponent;
  let fixture: ComponentFixture<CarTruckHVACControlsControlUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACControlsControlUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACControlsControlUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
