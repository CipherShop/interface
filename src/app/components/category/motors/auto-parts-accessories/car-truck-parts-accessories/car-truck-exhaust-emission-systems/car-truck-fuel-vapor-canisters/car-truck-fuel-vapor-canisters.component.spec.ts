import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelVaporCanistersComponent } from './car-truck-fuel-vapor-canisters.component';

describe('CarTruckFuelVaporCanistersComponent', () => {
  let component: CarTruckFuelVaporCanistersComponent;
  let fixture: ComponentFixture<CarTruckFuelVaporCanistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelVaporCanistersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelVaporCanistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
