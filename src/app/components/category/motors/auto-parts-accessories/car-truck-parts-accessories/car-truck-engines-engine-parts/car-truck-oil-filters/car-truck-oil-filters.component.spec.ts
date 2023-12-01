import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckOilFiltersComponent } from './car-truck-oil-filters.component';

describe('CarTruckOilFiltersComponent', () => {
  let component: CarTruckOilFiltersComponent;
  let fixture: ComponentFixture<CarTruckOilFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckOilFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckOilFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
