import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelTankCapsComponent } from './car-truck-fuel-tank-caps.component';

describe('CarTruckFuelTankCapsComponent', () => {
  let component: CarTruckFuelTankCapsComponent;
  let fixture: ComponentFixture<CarTruckFuelTankCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelTankCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelTankCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
