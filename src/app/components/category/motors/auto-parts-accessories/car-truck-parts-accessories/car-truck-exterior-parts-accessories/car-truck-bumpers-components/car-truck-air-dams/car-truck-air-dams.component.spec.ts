import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAirDamsComponent } from './car-truck-air-dams.component';

describe('CarTruckAirDamsComponent', () => {
  let component: CarTruckAirDamsComponent;
  let fixture: ComponentFixture<CarTruckAirDamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAirDamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAirDamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
