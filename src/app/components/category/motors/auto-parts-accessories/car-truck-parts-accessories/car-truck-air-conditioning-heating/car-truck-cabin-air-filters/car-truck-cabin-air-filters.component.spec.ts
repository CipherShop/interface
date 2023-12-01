import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCabinAirFiltersComponent } from './car-truck-cabin-air-filters.component';

describe('CarTruckCabinAirFiltersComponent', () => {
  let component: CarTruckCabinAirFiltersComponent;
  let fixture: ComponentFixture<CarTruckCabinAirFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCabinAirFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCabinAirFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
