import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakePadWearSensorsComponent } from './car-truck-brake-pad-wear-sensors.component';

describe('CarTruckBrakePadWearSensorsComponent', () => {
  let component: CarTruckBrakePadWearSensorsComponent;
  let fixture: ComponentFixture<CarTruckBrakePadWearSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakePadWearSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakePadWearSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
