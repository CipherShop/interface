import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTurbosPartsComponent } from './car-truck-turbos-parts.component';

describe('CarTruckTurbosPartsComponent', () => {
  let component: CarTruckTurbosPartsComponent;
  let fixture: ComponentFixture<CarTruckTurbosPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTurbosPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTurbosPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
