import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalBrakeSensorsSwitchesComponent } from './car-truck-additional-brake-sensors-switches.component';

describe('CarTruckAdditionalBrakeSensorsSwitchesComponent', () => {
  let component: CarTruckAdditionalBrakeSensorsSwitchesComponent;
  let fixture: ComponentFixture<CarTruckAdditionalBrakeSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalBrakeSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalBrakeSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
