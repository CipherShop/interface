import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckParkingCamerasComponent } from './car-truck-parking-cameras.component';

describe('CarTruckParkingCamerasComponent', () => {
  let component: CarTruckParkingCamerasComponent;
  let fixture: ComponentFixture<CarTruckParkingCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckParkingCamerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckParkingCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
