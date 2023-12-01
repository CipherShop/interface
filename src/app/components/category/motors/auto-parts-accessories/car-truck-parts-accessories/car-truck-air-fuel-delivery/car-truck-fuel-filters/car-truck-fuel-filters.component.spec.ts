import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelFiltersComponent } from './car-truck-fuel-filters.component';

describe('CarTruckFuelFiltersComponent', () => {
  let component: CarTruckFuelFiltersComponent;
  let fixture: ComponentFixture<CarTruckFuelFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
