import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckAirConditioningHeatingComponent } from './other-car-truck-air-conditioning-heating.component';

describe('OtherCarTruckAirConditioningHeatingComponent', () => {
  let component: OtherCarTruckAirConditioningHeatingComponent;
  let fixture: ComponentFixture<OtherCarTruckAirConditioningHeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckAirConditioningHeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckAirConditioningHeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
