import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckParticulateFiltersComponent } from './car-truck-particulate-filters.component';

describe('CarTruckParticulateFiltersComponent', () => {
  let component: CarTruckParticulateFiltersComponent;
  let fixture: ComponentFixture<CarTruckParticulateFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckParticulateFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckParticulateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
