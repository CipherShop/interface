import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalFuelInjectionPartsComponent } from './car-truck-additional-fuel-injection-parts.component';

describe('CarTruckAdditionalFuelInjectionPartsComponent', () => {
  let component: CarTruckAdditionalFuelInjectionPartsComponent;
  let fixture: ComponentFixture<CarTruckAdditionalFuelInjectionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalFuelInjectionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalFuelInjectionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
