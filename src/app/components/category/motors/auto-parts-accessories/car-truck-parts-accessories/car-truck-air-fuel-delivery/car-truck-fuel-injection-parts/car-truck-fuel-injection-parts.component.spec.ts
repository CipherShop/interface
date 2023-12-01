import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelInjectionPartsComponent } from './car-truck-fuel-injection-parts.component';

describe('CarTruckFuelInjectionPartsComponent', () => {
  let component: CarTruckFuelInjectionPartsComponent;
  let fixture: ComponentFixture<CarTruckFuelInjectionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelInjectionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelInjectionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
