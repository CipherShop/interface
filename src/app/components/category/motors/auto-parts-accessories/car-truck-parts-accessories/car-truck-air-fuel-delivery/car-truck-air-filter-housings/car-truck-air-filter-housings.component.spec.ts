import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirFilterHousingsComponent } from './car-truck-air-filter-housings.component';

describe('CarTruckAirFilterHousingsComponent', () => {
  let component: CarTruckAirFilterHousingsComponent;
  let fixture: ComponentFixture<CarTruckAirFilterHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirFilterHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirFilterHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
