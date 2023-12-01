import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACVentActuatorsComponent } from './car-truck-hvac-vent-actuators.component';

describe('CarTruckHVACVentActuatorsComponent', () => {
  let component: CarTruckHVACVentActuatorsComponent;
  let fixture: ComponentFixture<CarTruckHVACVentActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACVentActuatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACVentActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
