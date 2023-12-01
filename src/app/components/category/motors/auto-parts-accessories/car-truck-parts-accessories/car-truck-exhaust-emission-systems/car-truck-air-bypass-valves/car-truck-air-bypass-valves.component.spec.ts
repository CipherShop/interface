import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirBypassValvesComponent } from './car-truck-air-bypass-valves.component';

describe('CarTruckAirBypassValvesComponent', () => {
  let component: CarTruckAirBypassValvesComponent;
  let fixture: ComponentFixture<CarTruckAirBypassValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirBypassValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirBypassValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
