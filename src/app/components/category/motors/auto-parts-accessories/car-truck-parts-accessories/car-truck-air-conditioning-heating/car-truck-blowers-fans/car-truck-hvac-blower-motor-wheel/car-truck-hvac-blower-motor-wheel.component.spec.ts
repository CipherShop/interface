import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACBlowerMotorWheelComponent } from './car-truck-hvac-blower-motor-wheel.component';

describe('CarTruckHVACBlowerMotorWheelComponent', () => {
  let component: CarTruckHVACBlowerMotorWheelComponent;
  let fixture: ComponentFixture<CarTruckHVACBlowerMotorWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACBlowerMotorWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACBlowerMotorWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
