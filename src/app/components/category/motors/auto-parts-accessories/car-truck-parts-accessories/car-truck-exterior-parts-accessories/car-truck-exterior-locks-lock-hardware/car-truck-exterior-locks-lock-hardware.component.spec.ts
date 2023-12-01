import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExteriorLocksLockHardwareComponent } from './car-truck-exterior-locks-lock-hardware.component';

describe('CarTruckExteriorLocksLockHardwareComponent', () => {
  let component: CarTruckExteriorLocksLockHardwareComponent;
  let fixture: ComponentFixture<CarTruckExteriorLocksLockHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExteriorLocksLockHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExteriorLocksLockHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
