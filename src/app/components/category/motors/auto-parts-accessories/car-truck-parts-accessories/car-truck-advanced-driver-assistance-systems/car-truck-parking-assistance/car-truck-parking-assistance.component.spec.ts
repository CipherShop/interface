import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckParkingAssistanceComponent } from './car-truck-parking-assistance.component';

describe('CarTruckParkingAssistanceComponent', () => {
  let component: CarTruckParkingAssistanceComponent;
  let fixture: ComponentFixture<CarTruckParkingAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckParkingAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckParkingAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
