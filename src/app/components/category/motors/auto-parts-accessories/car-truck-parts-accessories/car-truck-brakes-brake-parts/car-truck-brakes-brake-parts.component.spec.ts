import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakesBrakePartsComponent } from './car-truck-brakes-brake-parts.component';

describe('CarTruckBrakesBrakePartsComponent', () => {
  let component: CarTruckBrakesBrakePartsComponent;
  let fixture: ComponentFixture<CarTruckBrakesBrakePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakesBrakePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakesBrakePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
