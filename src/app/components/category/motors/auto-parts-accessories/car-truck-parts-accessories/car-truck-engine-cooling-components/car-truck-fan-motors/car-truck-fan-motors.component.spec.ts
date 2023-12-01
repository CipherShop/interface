import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFanMotorsComponent } from './car-truck-fan-motors.component';

describe('CarTruckFanMotorsComponent', () => {
  let component: CarTruckFanMotorsComponent;
  let fixture: ComponentFixture<CarTruckFanMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFanMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFanMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
