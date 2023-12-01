import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirFiltersComponent } from './car-truck-air-filters.component';

describe('CarTruckAirFiltersComponent', () => {
  let component: CarTruckAirFiltersComponent;
  let fixture: ComponentFixture<CarTruckAirFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
