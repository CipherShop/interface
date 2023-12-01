import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckParkingSensorsComponent } from './car-truck-parking-sensors.component';

describe('CarTruckParkingSensorsComponent', () => {
  let component: CarTruckParkingSensorsComponent;
  let fixture: ComponentFixture<CarTruckParkingSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckParkingSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckParkingSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
