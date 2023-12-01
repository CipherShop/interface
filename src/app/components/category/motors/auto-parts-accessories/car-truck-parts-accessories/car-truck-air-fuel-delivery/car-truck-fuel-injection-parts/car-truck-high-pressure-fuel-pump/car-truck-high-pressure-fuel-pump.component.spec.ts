import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHighPressureFuelPumpComponent } from './car-truck-high-pressure-fuel-pump.component';

describe('CarTruckHighPressureFuelPumpComponent', () => {
  let component: CarTruckHighPressureFuelPumpComponent;
  let fixture: ComponentFixture<CarTruckHighPressureFuelPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHighPressureFuelPumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHighPressureFuelPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
