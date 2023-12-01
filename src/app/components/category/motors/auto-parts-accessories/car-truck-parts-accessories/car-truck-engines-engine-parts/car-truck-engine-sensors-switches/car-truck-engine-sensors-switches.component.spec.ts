import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineSensorsSwitchesComponent } from './car-truck-engine-sensors-switches.component';

describe('CarTruckEngineSensorsSwitchesComponent', () => {
  let component: CarTruckEngineSensorsSwitchesComponent;
  let fixture: ComponentFixture<CarTruckEngineSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
