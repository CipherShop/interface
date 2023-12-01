import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckWheelCylindersComponent } from './car-truck-wheel-cylinders.component';

describe('CarTruckWheelCylindersComponent', () => {
  let component: CarTruckWheelCylindersComponent;
  let fixture: ComponentFixture<CarTruckWheelCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckWheelCylindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckWheelCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
