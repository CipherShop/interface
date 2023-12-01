import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakePadShoeHardwareComponent } from './car-truck-brake-pad-shoe-hardware.component';

describe('CarTruckBrakePadShoeHardwareComponent', () => {
  let component: CarTruckBrakePadShoeHardwareComponent;
  let fixture: ComponentFixture<CarTruckBrakePadShoeHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakePadShoeHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakePadShoeHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
