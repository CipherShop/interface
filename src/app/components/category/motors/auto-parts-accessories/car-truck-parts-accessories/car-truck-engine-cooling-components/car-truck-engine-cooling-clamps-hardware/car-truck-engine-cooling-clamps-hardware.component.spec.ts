import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineCoolingClampsHardwareComponent } from './car-truck-engine-cooling-clamps-hardware.component';

describe('CarTruckEngineCoolingClampsHardwareComponent', () => {
  let component: CarTruckEngineCoolingClampsHardwareComponent;
  let fixture: ComponentFixture<CarTruckEngineCoolingClampsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineCoolingClampsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineCoolingClampsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
