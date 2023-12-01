import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelTanksFillerNecksComponent } from './car-truck-fuel-tanks-filler-necks.component';

describe('CarTruckFuelTanksFillerNecksComponent', () => {
  let component: CarTruckFuelTanksFillerNecksComponent;
  let fixture: ComponentFixture<CarTruckFuelTanksFillerNecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelTanksFillerNecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelTanksFillerNecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
